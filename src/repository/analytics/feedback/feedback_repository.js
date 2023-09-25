import { api } from "../api";

const postFeedback = async (body, headers) => {
  try {
    const response = await api.post("/feedback", body, headers);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { postFeedback };
