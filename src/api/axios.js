import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ ensures cookies & auth headers are sent
});

export default axiosInstance;
