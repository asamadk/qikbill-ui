import axios from "axios";
import router from "@/router";
import { useUserStore } from "@/stores/userStore";
import { routeConstants } from "@/router/routeConstants";

// Create an Axios instance
const api = axios.create({
  url: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  withCredentials: true, // Ensures cookies (session-based auth) are sent with requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const userStore = useUserStore();
    const originalRequest = error.config;

    if (error.response) {
      // Handle Unauthorized Errors (401)
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Attempt to refresh the session (server should renew the cookie)
          await api.get("/auth/refresh");
          
          // Retry the original request
          return api(originalRequest);
        } catch (refreshError) {
          // Refresh token failed → Logout user and redirect to login
          userStore.logout();
          router.push(routeConstants.LOGIN);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
