import { api } from "../api";

const getLikesCount = async () => {
  try {
    const response = await api.get("/likes");
    return response.data.likesCount;
  } catch (error) {
    console.error(error);
  }
};

const updateLikesCount = async (body) => {
  try {
    console.log(body);
    const response = await api.post("/likes", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getLikesCount, updateLikesCount };
