import axios from "axios";
import { apiConfig } from './apiConfig';

export interface Comic {
    id: number;
    nome: string;
    id_conteudo: number;
    id_usuario: number;
    publicado: number;
    data_publicacao: string | null;
    ordem: number;
    premium: number;
    view: number;
    curtida: number;
    id_usuario_operacao: number;
    id_robo: number;
    data_alteracao: string;
    data_exclusao: string | null;
    data_inclusao: string;
    thumb: string;
    release_date: string | null;
    date_format: string;
    released: string | null;
    day_week: string;
    view_open: number;
    view_complete: number;
    is_paid: number | null;
    status: string;
    mature: number;
    paid: number;
    banner: string | null;
    active: number;
    slug: string | null;
  }
  
export const getAllByConteudoId = async (id: string): Promise<Comic[]> => {
    const response = await axios.get(`${apiConfig.episodioApiUrl}/conteudo/${id}`);
    return response.data;
};

export const getAllImagesByEpisodioId = async (id: string): Promise<Comic[]> => {
    const response = await axios.get(`${apiConfig.episodioApiUrl}/${id}`);
    return response.data;
}