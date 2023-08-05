import axios from "axios";
import { apiConfig } from './apiConfig';
import { ContentHomeResponse } from "@/types/types";

export const getContentHome = async (): Promise<ContentHomeResponse> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/home`);
    return response.data;
};

export const getByNome = async (): Promise<ContentHomeResponse> => {
    const response = await axios.get(`${apiConfig.contentApiUrl}/vitrine`);
    // reeceber payload com {nome: string}
    return response.data;
};

export interface getVitrineProps {
    conteudo_nome: string;
  conteudo_id: number;
  imagem_banner: string;
  imagem_capa: string;
}

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
