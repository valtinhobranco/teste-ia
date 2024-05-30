import axios from 'axios';

export const getChatbotResponse = async (prompt) => {
  try {
    const response = await axios.post('http://localhost:8081/chat', { prompt }); // Alterar para a nova porta
    console.log('API response from backend:', response.data); // Log the response from the backend
    return response.data;
  } catch (error) {
    console.error('Erro ao obter resposta do backend:', error);
    throw error;
  }
};
