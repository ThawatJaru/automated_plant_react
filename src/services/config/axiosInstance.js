import axios from 'axios';
import { apiKey } from './base';

export const axiosInstance = axios.create({
  baseURL: apiKey,
});