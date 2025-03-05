import axios from 'axios';

//
/// baseUrl
export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
});
