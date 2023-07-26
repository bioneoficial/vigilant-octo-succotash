/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { apiConfig } from './apiConfig';
import { PrivacyItem } from '@/types/types';

export interface getAllPrivacyInterface {
    id: number;
    id_tipo_politica: number;
    nome: string;
    descricao: string;
    versao: number;
    ativo: number;
    data_alteracao: Date ;
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

export async function editPrivacy( token: string, id: number, payload: Partial<PrivacyItem>): Promise<any> {
    const response = await axios.put(`${apiConfig.privacyApiUrl}/${id}`, payload, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

  export interface PrivacyItemPost {
    nome: string;
    id_tipo_politica: number;
    ativo: number;
    descricao: string;
  }

export async function postPrivacy( token: string, newPrivacy: Partial<PrivacyItem>): Promise<any> {
  // newPrivacy.data_inclusao = new Date();
    const response = await axios.post(`${apiConfig.privacyApiUrl}`, newPrivacy, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }