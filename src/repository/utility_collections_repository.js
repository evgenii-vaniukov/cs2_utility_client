import axios from "axios";

const apiUrl = process.env.BASE_URL;

// console.log(baseUrl);

// const getUtilityCollections = async () => {
//   try {
//     const response = await fetch("http//localhost:3000/utilitycollections");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const api = axios.create({
  baseURL: "http://localhost:3000",
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

export { getUtilityCollections };
