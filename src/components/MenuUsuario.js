import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MenuUsuario.css';

function MenuUsuario() {
  const navigate = useNavigate();

  return (
    <div className="menu-usuario-container">
      <h2>Bem-vindo ao Sistema</h2>
      <button onClick={() => navigate('/formulario')}>📄 Preencher Chamado</button>
      <button onClick={() => navigate('/avaliacao/1')}>📋 Ver Chamados Respondidos</button>
    </div>
  );
}

export default MenuUsuario;
