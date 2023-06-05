import axios from "axios";
import { apiConfig } from "./apiConfig";
import { CreateUser, CreateUserResponse, LoginResponse, PostLogin } from "@/types/types";

export async function loginUser(login: PostLogin): Promise<LoginResponse> {
    const response = await axios.post(apiConfig.loginApiUrl, login);
    return response.data;
  }

  export async function createUser(user: CreateUser): Promise<CreateUserResponse> {
    const response = await axios.post(apiConfig.loginApiUrl, user);
    return response.data;
  }