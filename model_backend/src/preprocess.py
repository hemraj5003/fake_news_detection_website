import re
import nltk
import os
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# Manually set NLTK data path
nltk_data_path = os.path.join(os.getenv("APPDATA"), "nltk_data")
nltk.data.path.append(nltk_data_path)

# Download required NLTK data
nltk.download('punkt', download_dir=nltk_data_path, force=True)
nltk.download('stopwords', download_dir=nltk_data_path, force=True)

# Function to clean text
def clean_text(text):
    text = text.lower()  # Convert to lowercase
    text = re.sub(r"\W", " ", text)  # Remove special characters
    text = re.sub(r"\d+", "", text)  # Remove numbers
    words = word_tokenize(text)  # Tokenize words
    
    # Remove stopwords
    stop_words = set(stopwords.words("english"))
    words = [word for word in words if word not in stop_words]

    return " ".join(words)

# Example usage
if __name__ == "__main__":
    sample_text = "Hello, World! This is a sample text for testing 123."
    cleaned_text = clean_text(sample_text)
    print("Original Text:", sample_text)
    print("Cleaned Text:", cleaned_text)
