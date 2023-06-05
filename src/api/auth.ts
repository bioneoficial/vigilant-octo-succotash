import axios from "axios";
import { apiConfig } from "./apiConfig";
import { PostLogin } from "@/types/types";

export async function createUser(login: PostLogin): Promise<PostLogin> {
    const response = await axios.post(apiConfig.loginApiUrl, login);
    return response.data;
  }