import axios from "axios"

export const clientApi = axios.create({
    baseURL: 'https://pixelchat-gla8.onrender.com'
  });