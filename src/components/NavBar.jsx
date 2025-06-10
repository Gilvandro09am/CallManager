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
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user }) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/Logocallm.png" alt="Logo" height="40" />
        </div>
        
        <ul className="navbar-links">
          {user?.role !== 'staff' && (
            <li>
              <Link to="/criar-chamado" className="nav-link">
                <span className="nav-icon">+</span>
                Criar Chamado
              </Link>
            </li>
          )}
          <li>
            <Link to="/alterar-senha" className="nav-link">
              <span className="nav-icon">🔒</span>
              Alterar Senha
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="nav-button logout-btn">
              <span className="nav-icon">⚡</span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;