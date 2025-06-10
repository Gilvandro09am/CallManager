import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', 
});

export const login = (data) => api.post('/auth/login', data);
export const criarChamado = (data) => api.post('/tickets/create-ticket', data);
export const listarChamados = () => api.get('/tickets');
export const listarChamadosPorSetor = (sector) => api.get(`/tickets/sector?sector=${sector}`);
export const listarMeusChamados = () => api.get('/tickets/mytickets');
