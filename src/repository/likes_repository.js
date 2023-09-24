import { api } from "./api";

const getLikesCount = async () => {
  try {
    const response = await api.get("/likes");
    return response.data.likesCount;
  } catch (error) {
    console.error(error);
  }
};

export { getLikesCount };
