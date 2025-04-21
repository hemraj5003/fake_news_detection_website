from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os
import sys
import logging
import requests
from urllib.parse import urlencode
from pymongo import MongoClient
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta
from dotenv import load_dotenv  # ✅ NEW

# 🔹 Load environment variables
load_dotenv()

# 🔹 Local Imports
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from src.preprocess import clean_text  

app = Flask(__name__)
CORS(app)

# 🔹 Configuration
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
print("JWT SECRET KEY:", app.config['JWT_SECRET_KEY'])
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

jwt = JWTManager(app)

# 🔹 MongoDB Setup
MONGO_URI = os.getenv("MONGO_URI")
mongo_client = MongoClient(MONGO_URI)
db = mongo_client["newsApp"]
users_collection = db["users"]
predictions_collection = db["predictions"]

# Model Paths (💡 RELATIVE)
BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "fake_news_model.pkl")
VECTORIZER_PATH = os.path.join(BASE_DIR, "tfidf_vectorizer.pkl")

# Load model/vectorizer
try:
    model = joblib.load(MODEL_PATH)
    vectorizer = joblib.load(VECTORIZER_PATH)
    print("✅ Model and vectorizer loaded.")
except Exception as e:
    logging.error(f"❌ Model load error: {e}")
    model, vectorizer = None, None

# 🔹 Trusted News Sources
TRUSTED_SOURCES = [
    "timesofindia.indiatimes.com",
    "bbc.com",
    "hindustantimes.com",
    "ndtv.com",
    "cnn.com",
    "theguardian.com",
    "reuters.com"
]

# 🔹 Google API
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
CSE_ID = os.getenv("CSE_ID")

def search_news_on_google(query):
    params = {"q": query, "key": GOOGLE_API_KEY, "cx": CSE_ID}
    search_url = f"https://www.googleapis.com/customsearch/v1?{urlencode(params)}"
    try:
        response = requests.get(search_url)
        results = response.json().get("items", [])
        for result in results:
            url = result.get("link", "")
            for source in TRUSTED_SOURCES:
                if source in url:
                    return {"trusted": True, "source": source, "url": url}
        return {"trusted": False}
    except Exception as e:
        logging.error(f"Error searching Google: {e}")
        return {"trusted": False, "error": "Google Search Failed"}

# 🔐 Register Route
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username and password required"}), 400

    if users_collection.find_one({"username": username}):
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = generate_password_hash(password)
    users_collection.insert_one({"username": username, "password": hashed_pw})
    return jsonify({"message": "User registered successfully"}), 201

# 🔐 Login Route
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = users_collection.find_one({"username": username})
    print("Login attempt:", username)
    print("User found:", user)

    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token), 200

# 🔍 Prediction Endpoint (JWT Protected)
@app.route("/predict", methods=["POST"])
@jwt_required()
def predict():
    data = request.get_json()
    news_text = data.get("news", "")
    user = get_jwt_identity()

    if not news_text:
        return jsonify({"error": "No news text provided"}), 400
    
    if model is None or vectorizer is None:
        return jsonify({"error": "Model not loaded"}), 500

    # Step 1: ML Prediction
    cleaned_text = clean_text(news_text)
    text_vector = vectorizer.transform([cleaned_text])
    prediction = model.predict(text_vector)[0]
    result = "Real News ✅" if prediction == 1 else "Fake News ❌"

    # Step 2: Google Verification
    google_result = search_news_on_google(news_text)

    # Step 3: Store Result
    predictions_collection.insert_one({
        "user": user,
        "news": news_text,
        "prediction": result,
        "google_result": google_result
    })

    return jsonify({
        "prediction": result,
        "trusted_source": google_result
    })

def handler(environ, start_response):
    from werkzeug.middleware.dispatcher import DispatcherMiddleware
    return DispatcherMiddleware(app)(environ, start_response)