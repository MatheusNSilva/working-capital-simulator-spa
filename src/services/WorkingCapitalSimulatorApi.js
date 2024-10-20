import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_API_URL || 'http://localhost:3000/api'
});

export const calculateInstallments = async (data) => {
  try {
    const response = await api.post('/calculate-installments', data);
    return response.data;
  } catch (error) {
    console.error('Erro, não foi possível calcular as parcelas:', error);
    throw error; 
  }
};