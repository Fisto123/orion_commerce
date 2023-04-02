import axios from "axios";

export const newRequest = axios.create({
  baseURL: "https://orion-commerce.onrender.com/",
  withCredentials: true,
});
