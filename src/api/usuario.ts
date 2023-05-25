import axios from 'axios';
import { apiConfig } from './apiConfig';
import { getAllUsersResponse } from '@/types/types';



export async function getAllUsers(): Promise<Array<getAllUsersResponse>> {
    const response = await axios.get(apiConfig.userApiUrl);
    return response.data;
  }