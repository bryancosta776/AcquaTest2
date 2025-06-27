// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://acquatest2-1.onrender.com';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  CONSUMO: `${API_BASE_URL}/consumo`,
  HEALTH: `${API_BASE_URL}/health`
};

export default API_BASE_URL; 