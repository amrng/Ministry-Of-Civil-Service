import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nestnews.onrender.com/",
  headers: {
    Accept: "application/json" || "multipart/form-data",
    "Content-Type": "application/json" || "multipart/form-data",
  },
});

export default axiosInstance;
