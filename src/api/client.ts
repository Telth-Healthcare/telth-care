import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { handleAxiosError } from "./handleAxiosError";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const defaultHeaders = {
  Accept: "application/json",
  "X-Client-ID": "app",
  "ngrok-skip-browser-warning": "true",
};


export const apiClient = {
  post: async <T = any, D = any>(endpoint: string, data: D) => {
    try {
      const response = await axios.post<T>(`${baseUrl}${endpoint}`, data, {
        headers: defaultHeaders,
      });
      return response.data;
    } catch (error) {
      const message = handleAxiosError(error as AxiosError, "Request failed");
      toast.error(message);
      throw error;
    }
  },
};