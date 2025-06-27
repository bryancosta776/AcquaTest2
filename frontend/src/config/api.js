// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://acquatest2-1.onrender.com';

// Log para debug
console.log('API_BASE_URL:', API_BASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  CONSUMO: `${API_BASE_URL}/consumo`,
  HEALTH: `${API_BASE_URL}/health`
};

// Log endpoints para debug
console.log('API_ENDPOINTS:', API_ENDPOINTS);

export default API_BASE_URL; 