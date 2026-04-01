import axios, { AxiosError } from "axios";
import { handleAxiosError } from "./handleAxiosError";
import { toast } from "sonner";

const formBaseUrl = import.meta.env.VITE_API_BASE_URL;        // http://localhost:3000/
const webinarBaseUrl = "https://cmccm.vercel.app";            // external webinar app

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const ngrokHeaders = {
  "X-Client-ID": "app",                  // internal app identification
  "ngrok-skip-browser-warning": "true",  // ngrok tunnel testing
};

export const apiClient = {
  // form submissions → Next.js API (localhost:3000)
  post: async <T = any, D = any>(endpoint: string, data: D) => {
    try {
      const response = await axios.post<T>(`${formBaseUrl}${endpoint}`, data, {
        headers: defaultHeaders,
      });
      return response.data;
    } catch (error) {
      const message = handleAxiosError(error as AxiosError, "Request failed");
      toast.error(message);
      throw error;
    }
  },

  // webinar calls → https://cmccm.vercel.app
  postWebinar: async <T = any, D = any>(
    endpoint: string,
    data: D,
    customHeaders?: Record<string, string>  // any extra per-call headers
  ) => {
    try {
      const response = await axios.post<T>(`${webinarBaseUrl}${endpoint}`, data, {
        headers: {
          ...defaultHeaders,
          ...ngrokHeaders,    // X-Client-ID + ngrok headers
          ...customHeaders,   // optional extras
        },
      });
      return response.data;
    } catch (error) {
      const message = handleAxiosError(error as AxiosError, "Request failed");
      toast.error(message);
      throw error;
    }
  },
};