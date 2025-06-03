import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import FormularioChamado from './components/FormularioChamado';
import ChamadosTecnico from './components/ChamadosTecnico';
import RespostaChamado from './components/RespostaChamado';
import AvaliacaoChamado from './components/AvaliacaoChamado';
import AlterarSenha from './components/AlterarSenha';
import MenuUsuario from './components/MenuUsuario';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/formulario" element={<FormularioChamado />} />
        <Route path="/menu-usuario" element={<MenuUsuario />} /> {/* essa aqui */}
        <Route path="/tecnico" element={<ChamadosTecnico />} />
        <Route path="/resposta-tecnico/:id" element={<RespostaChamado />} />
        <Route path="/avaliacao/:id" element={<AvaliacaoChamado />} />
        <Route path="/alterar-senha" element={<AlterarSenha />} />
      </Routes>
    </Router>
  );
}

export default App;
