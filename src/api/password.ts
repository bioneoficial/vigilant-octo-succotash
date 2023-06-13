import axios from 'axios';
import { apiConfig } from './apiConfig';
import { ResetPasswordResponse } from '@/types/types';

interface ResetPasswordRequest {
    email: string;
}

export async function resetPassword({email}: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    const response = await axios.post(`${apiConfig.passwordApiUrl}/reset`, {email});
    return response.data;
  }