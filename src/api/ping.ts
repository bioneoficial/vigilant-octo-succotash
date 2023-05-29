import axios from 'axios';
import { apiConfig } from './apiConfig';

export async function fetchPing(): Promise<string> {
    const response = await axios.get(apiConfig.pingApiUrl);
    return response.data;
  }