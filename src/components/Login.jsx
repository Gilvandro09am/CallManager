import '../styles/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/Api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, senha });
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

        <form>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />

          <div className="checkbox-area">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Relembre-me</label>
          </div>

          <button type="submit">Acessar</button>
        </form>

        <a href="/" className="forgot-password">Esqueci minha Senha</a>
      </div>
    </div>
  );
}

export default Login;