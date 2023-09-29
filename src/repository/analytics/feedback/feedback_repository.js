import { api } from "../api";

const postFeedback = async (body) => {
  try {
    // console.log(body);
    const response = await api.post("/feedback", body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { postFeedback };
