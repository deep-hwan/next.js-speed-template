import axios from 'axios';
import { HTTPS_API } from '@/config/env_key';

//
/// baseUrl
export const API = axios.create({
  baseURL: HTTPS_API,
});
