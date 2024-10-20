import axios from 'axios';

const apiURL = process.env.NODE_API_URL || 'http://localhost:3000'; 

export const calculateInstallments = async (data) => {
  try {
    const response = await axios.post(`${apiURL}/api/calculate-installments`, data);
    return response.data;
  } catch (error) {
    console.error('Erro, não foi possível calcular as parcelas:', error);
    throw error; 
  }
};