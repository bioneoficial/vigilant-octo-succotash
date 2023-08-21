import axios from 'axios';
import { apiConfig } from './apiConfig';
import { CreateUser, CreateUserResponse, Response, UpdateUser, getAllUsersResponse, updatePhoto } from '@/types/types';

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

  export async function updatePhoto(user: updatePhoto): Promise<updatePhoto> {
    const response = await axios.post(`${apiConfig.userApiUrl}/updatePhoto`, user);
    return response.data;
  }