import axios from "axios";
import { apiConfig } from "./apiConfig";
import { LoginResponse, PostLogin } from "@/types/types";

export async function loginUser(login: PostLogin): Promise<LoginResponse> {
    const response = await axios.post(apiConfig.loginApiUrl, login);
    return response.data;
  }

