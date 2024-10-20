import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pela URL do seu backend se estiver hospedado
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