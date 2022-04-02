import axios from "axios";

export const $api = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "43f0c297-2531-4067-973e-a9fefbbb5845",
  },
});
