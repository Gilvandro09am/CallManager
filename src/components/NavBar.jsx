/* import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <nav>
      <ul>
        {user?.role !== 'staff' && (
          <li><Link to="/criar-chamado">Criar Chamado</Link></li>
        )}
        <li><Link to="/alterar-senha">Alterar Senha</Link></li>
        <li><button onClick={() => {
          localStorage.removeItem('user');
          window.location.href = "/";
        }}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar; */

// src/components/Navbar.jsx
 import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Arquivo de estilo (opcional)

function Navbar( { user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/Logocallm.png" alt="Logo" height="80" />
      </div>
      <ul>
        {user?.role !== 'staff' && (
        <li><Link to="/criar-chamado">Criar Chamado</Link></li>
        )}
        <li><Link to="/alterar-senha">Alterar Senha</Link></li>
        <li><button onClick={() => {
          localStorage.removeItem('user');
          window.location.href = "/";
        }}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
