// axiosInstance.js
import axios from "axios";

const APIURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
    baseURL: `${APIURL}`,
});

// Attach token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const OAuthToken = localStorage.getItem("OAuthToken");

        if (user && user.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        } else if (OAuthToken) {
            config.headers.Authorization = `Bearer ${OAuthToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            localStorage.removeItem("user");
            localStorage.removeItem("OAuthToken");
            window.location.replace("/");
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
