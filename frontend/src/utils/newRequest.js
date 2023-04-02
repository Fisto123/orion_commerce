import axios from "axios";

export const newRequest = axios.create({
  baseURL: "http://localhost:5001/",
  withCredentials: true,
});
