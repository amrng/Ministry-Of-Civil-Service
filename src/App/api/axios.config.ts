import axios from "axios";

export const baseURL = "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json" || "multipart/form-data",
    "Content-Type": "application/json" || "multipart/form-data",
  },
});

export default axiosInstance;
