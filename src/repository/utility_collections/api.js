import axios from "axios";

const api = axios.create({
  baseURL: process.env.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
