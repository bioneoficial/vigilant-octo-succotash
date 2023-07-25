/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { apiConfig } from './apiConfig';

interface Coupon {
    id: number;
    nome: string;
    codigo: string;
    limite_uso: number;
    qtd_usado: number | null;
    qtd_dias: number;
    data_validade: string;
    ativo: number;
    id_usuario_operacao: number;
    data_alteracao: string | null;
    data_exclusao: string | null;
    data_inclusao: string;
  }

export interface PostCupom {
    nome: string;
    codigo: string;
    limite_uso: number;
    qtd_dias: number;
    data_validade: string | Date;
    ativo: number;
  }
  
export type getAllCouponResponse = Coupon[];

export interface UpdateCupomPayload {
    nome?: string;
    codigo?: string;
    limite_uso?: number;
    qtd_dias?: number;
    data_validade?: string |Date;
    ativo?: number;
    id_usuario_operacao?: number;
    data_alteracao?: Date;
    data_exclusao?: Date;
    qtd_usado?: number;
  }

export async function getAllCoupon( token: string): Promise<getAllCouponResponse> {
    const response = await axios.get(`${apiConfig.couponApiUrl}`, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

export async function updateCoupon( token: string, id:number, coupon: UpdateCupomPayload): Promise<any> {
    const response = await axios.put(`${apiConfig.couponApiUrl}/${id}`, coupon, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }

export async function createCoupon(token: string, coupon: PostCupom): Promise<any> {
    const response = await axios.post(`${apiConfig.couponApiUrl}`, coupon, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }