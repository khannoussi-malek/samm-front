import Axios from "axios";
import { AUTH_TOKEN_KEY } from "../../pages/Auth/AuthContext";

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY) || null;
    if (!!token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.baseURL = import.meta.env.VITE_BACKEND_API_URL;
    return config;
}, (error) => Promise.reject(error));