import axios from "axios";

const api = axios.create({
  baseURL: "https://cs2-utility-analytics.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
