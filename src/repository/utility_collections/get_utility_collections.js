import { cache } from "react";
import { api } from "./api";

export const revalidate = 60;

export const getUtilityCollections = cache(async () => {
  try {
    const response = await api.get("/utilitycollections");

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
});
