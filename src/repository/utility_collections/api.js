import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "preview"
    ? process.env.API_URL
    : process.env.DEV_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
