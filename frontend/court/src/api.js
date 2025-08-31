import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchSlots = (date) => axios.get(`${API_BASE}/api/slots`, { params: { date } });
export const bookSlot = (id, token) =>
  axios.post(`${API_BASE}/api/slots/book/${id}`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const signup = (data) => axios.post(`${API_BASE}/api/auth/signup`, data);
export const login = (data) => axios.post(`${API_BASE}/api/auth/login`, data);