import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

export const login = (data) => api.post('/login', data);
export const criarChamado = (data) => api.post('/chamados', data);
export const listarChamados = () => api.get('/chamados');
export const atualizarChamado = (id, data) => api.put(`/chamados/${id}`, data);
