import axios from "axios";
import { AUTH_TOKEN } from "./constants";

const baseUrl = "http://web-02.cndungu.tech/api";

const fetchAuthToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (token === null) return null;
  return `Bearer ${token}`;
};

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: fetchAuthToken(),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default client;
