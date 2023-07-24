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
  
export type getAllCouponResponse = Coupon[];

export async function getAllCoupon( token: string): Promise<getAllCouponResponse> {
    const response = await axios.get(`${apiConfig.couponApiUrl}`, { headers: { 'Authorization': `Bearer ${token}` }});
    return response.data;
  }