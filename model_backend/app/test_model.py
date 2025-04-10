import requests

BASE_URL = "http://127.0.0.1:5000"  # Change if hosted elsewhere

USERNAME = "testuser"
PASSWORD = "testpassword"

# 🔐 Register user
def register():
    print("📦 Registering user...")
    response = requests.post(f"{BASE_URL}/register", json={
        "username": USERNAME,
        "password": PASSWORD
    })
    print("✅ Status:", response.status_code)
    try:
        print("📄 Response:", response.json())
    except Exception:
        print("📄 Response: Not in JSON format")

# 🔐 Login to get JWT token
def login():
    print("\n🔐 Logging in...")
    response = requests.post(f"{BASE_URL}/login", json={
        "username": USERNAME,
        "password": PASSWORD
    })
    print("✅ Status:", response.status_code)
    try:
        data = response.json()
        print("📄 Response:", data)
        return data.get("access_token")
    except Exception as e:
        print("❌ JSON Decode Error:", str(e))
        print("📄 Raw Response:", response.text)
        return None

# 🔍 Make a prediction
def predict_news(token, news_text):
    print("\n🧠 Predicting...")
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(f"{BASE_URL}/predict", json={
        "news": news_text
    }, headers=headers)

    print("✅ Status:", response.status_code)
    try:
        print("📄 Prediction Response:", response.json())
    except Exception:
        print("📄 Response: Not in JSON format")

if __name__ == "__main__":
    register()
    token = login()
    if token:
        sample_news = "Government announces new economic policy to support farmers."
        predict_news(token, sample_news)
    else:
        print("❌ Failed to get token. Check server logs or credentials.")
