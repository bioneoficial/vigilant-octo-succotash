import axios from 'axios';
import { apiConfig } from './apiConfig';
import { ResetPasswordResponse } from '@/types/types';

interface ResetPasswordRequest {
    email?: string;
    code?: string;
    newPassword?: string;
}

export async function resetPassword({email}: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    const response = await axios.post(`${apiConfig.passwordApiUrl}/reset`, {email});
    return response.data;
  }

  export async function resetPasswordValidate({code}: ResetPasswordRequest, token: string): Promise<ResetPasswordResponse> {
    const response = await axios.post(`${apiConfig.passwordApiUrl}/token-validation`, {code}, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

  export async function updatePassword({code}: ResetPasswordRequest, token: string, id: string): Promise<ResetPasswordResponse> {
    const response = await axios.post(`${apiConfig.passwordApiUrl}/${id}`, {code}, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }
