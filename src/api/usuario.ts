import axios from 'axios';
import { apiConfig } from './apiConfig';
// import { user } from '@/types/types';

export interface UserRequest {
    id: number;
    nome: string;
    descricao: string;
    email: string;
    fotoPath: string | null; // Use `null` if the `fotoPath` field can be `null`
  }

export async function getAllUsers(): Promise<Array<UserRequest>> {
    const response = await axios.get(apiConfig.userApiUrl);
    return response.data;
  }