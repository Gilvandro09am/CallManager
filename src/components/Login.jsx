import '../styles/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/Api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if (res.status === 200) {
        // Você pode salvar o token, se necessário
        localStorage.setItem('token', res.data.token);
        navigate('/chamados');
      }
    } catch (err) {
      alert('Erro ao fazer login');
    }
  };
  
  return (
    <div className="login-container">
      <header className="login-header">
        <img src="Logocallm.png" alt="UEPB Call Manager" className="logo" />
        <h2>SISTEMA DE CHAMADOS</h2>
      </header>

      <div className="login-box">
        <h3>🔒 Login UEPB</h3>

         <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit">Entrar</button>
         </form>

        <a href="/" className="forgot-password">Esqueci minha Senha</a>
      </div>
    </div>
  );
}

export default Login;