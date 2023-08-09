import axios from "axios";
import { apiConfig } from './apiConfig';
import { ContentHomeResponse } from "@/types/types";

export interface getVitrineProps {
    conteudo_nome: string;
    conteudo_id: number;
    imagem_banner: string;
    imagem_capa: string;
  }
  
export const getContentHome = async (): Promise<ContentHomeResponse> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/home`);
    return response.data;
};

export const getByNome = async (nome: string): Promise<getVitrineProps[]> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/vitrine`,  { params: { nome } });
    return response.data;
};

export const getSelecoes = async (): Promise<getVitrineProps[]> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/selecoes`);
    return response.data;
};

export const getPremium = async (): Promise<getVitrineProps[]> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/premium`);
    return response.data;
};

export const getIndependentes = async (): Promise<getVitrineProps[]> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/independentes`);
    return response.data;
};

export const getBombando = async (): Promise<getVitrineProps[]> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/bombando `);
    return response.data;
};
