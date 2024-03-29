import axios from 'axios';
import { apiConfig } from './apiConfig';
import { CreateUser, CreateUserResponse, Response, UpdateUser, getAllUsersResponse } from '@/types/types';

export async function getAllUsers(): Promise<Array<getAllUsersResponse>> {
    const response = await axios.get(apiConfig.userApiUrl);
    return response.data;
  }

export async function getUserById(id: number): Promise<getAllUsersResponse> {
    const response = await axios.get(`${apiConfig.userApiUrl}/${id}`);
    return response.data;
  }

export async function createUser(user: CreateUser): Promise<CreateUserResponse> {
    const response = await axios.post(apiConfig.userApiUrl, user);
    return response.data;
  }

export async function updateUser(token: string, user: UpdateUser): Promise<Response> {
    const response = await axios.put(`${apiConfig.userApiUrl}/${user.id}`, user, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

  // export async function updateUserByAdmin(user: postUser): Promise<postUser> {
  //   const response = await axios.put(`${apiConfig.userApiUrl}/admin/${user.id}`, user);
  //   return response.data;
  // }

export async function updatePhoto(token: string, data: FormData): Promise<Response> {
    const response = await axios.post(`${apiConfig.userApiUrl}/updatePhoto`, data, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

export async function getEmailCode(token:string): Promise<{success: boolean, code: string}> {
    const response = await axios.post(`${apiConfig.userApiUrl}/request-email-code`,{}, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

export async function verifyEmailCode(token:string, code: string): Promise<{success: boolean}> {
    const response = await axios.get(`${apiConfig.userApiUrl}/verify-email-code/${code}`, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

export async function PostUserToAutor(token: string, data:{
  fullName: string,
  cpfOrCnpj: string,
  termsOfUse: boolean,
  copyright: boolean,
  ageConfirmation: boolean,
}): Promise<Response> {
    const response = await axios.post(`${apiConfig.userApiUrl}/user-to-autor`, data, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }
  