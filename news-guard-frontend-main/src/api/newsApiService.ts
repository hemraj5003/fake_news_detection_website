// newsapiServices.tsx

const API_BASE_URL = 'http://127.0.0.1:5000';

// Interfaces
interface DetectionResponse {
  result: 'real' | 'fake';
  confidence: number;
  explanation: string;
  trusted_source?: {
    trusted: boolean;
    source?: string;
    url?: string;
    error?: string;
  };
}

interface AuthResponse {
  access_token: string;
}

interface AuthData {
  username: string;
  password: string;
}

// 🔐 Login Function
const loginUser = async (data: AuthData): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Login failed. Check your credentials.');
  }

  const result: AuthResponse = await response.json();
  localStorage.setItem('token', result.access_token);
}

// 🔐 Register Function
const registerUser = async (data: AuthData): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Registration failed.');
  }
}

// 🔍 Detect News Function
const detectNews = async (text: string): Promise<DetectionResponse> => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Unauthorized. Please log in.');

  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ news: text }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Prediction failed.');
  }

  const data = await response.json();
  console.log('[Fake News Detector Response]', data);

  const isFake = data.prediction.toLowerCase().includes('fake');
  const isTrusted = data.trusted_source?.trusted;

  return {
    result: isFake ? 'fake' : 'real',
    confidence: isTrusted ? 0.95 : 0.60,
    explanation: isTrusted
      ? `Verified from ${data.trusted_source.source}`
      : 'Could not verify from trusted sources.',
    trusted_source: data.trusted_source,
  };
};

// 🧹 Logout Function
const logoutUser = () => {
  localStorage.removeItem('token');
}

export {
  detectNews,
  loginUser,
  registerUser,
  logoutUser,
};

export type {
  DetectionResponse,
  AuthData,
};
