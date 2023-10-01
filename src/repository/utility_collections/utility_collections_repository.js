import { cache } from "react";
import { api } from "./api";

const getUtilityCollections = cache(async () => {
  try {
    const response = await api.get("/utilitycollections");

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});

const getCollectionDetails = async (id) => {
  try {
    const response = await api.get(`/utilitycollections/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getCollectionDetails, getUtilityCollections };
