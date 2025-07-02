import axios from "axios";
import { BACKEND_BASEURL } from "../constants/BACKEND_BASEURL";

const axiosInstance = axios.create({
  baseURL: BACKEND_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
