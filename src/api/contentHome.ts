import axios from "axios";
import { apiConfig } from './apiConfig';
import { ContentHomeResponse } from "@/types/types";

export const getContentHome = async (): Promise<ContentHomeResponse> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}`);
    return response.data;
};
