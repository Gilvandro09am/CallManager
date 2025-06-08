import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', 
});

export const login = (data) => api.post('/auth/login', data);
export const criarChamado = (data) => api.post('/chamados', data);
export const listarChamados = () => api.get('/tickets');
export const listarUsuarios = () => api.get('/usuarios');
export const atualizarChamado = (id, data) => api.put(`/chamados/${id}`, data);
