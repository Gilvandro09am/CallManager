import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

// Interceptador para adicionar o token automaticamente
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (data) => api.post('/auth/login', data);
export const listarChamadosPorSetor = () => api.get('/tickets/by-sector');
export const criarChamado = (data) => api.post('/tickets/create-ticket', data);
export const listarChamados = () => api.get('/tickets');
export const listarMeusChamados = () => api.get('/tickets/meus-chamados');
