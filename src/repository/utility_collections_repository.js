import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

const getUtilityCollections = async () => {
  try {
    const response = await api.get("/utilitycollections");

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const getCollectionDetails = async (id) => {
  try {
    const response = await api.get(`/utilitycollections/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export { getCollectionDetails, getUtilityCollections };
