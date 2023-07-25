/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { apiConfig } from './apiConfig';

export interface getAllPrivacyInterface {
    id: number;
    id_tipo_politica: number;
    nome: string;
    descricao: string;
    versao: number;
    ativo: number;
    data_alteracao: string | null;
    data_inclusao: string;
}

export type getAllPrivacyResponse = getAllPrivacyInterface[];


export async function getAllPrivacy( token: string): Promise<getAllPrivacyResponse> {
    const response = await axios.get(`${apiConfig.privacyApiUrl}`, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

export async function delPrivacy( token: string, id: number): Promise<any> {
    const response = await axios.put(`${apiConfig.privacyApiUrl}/delete/${id}`, null, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }