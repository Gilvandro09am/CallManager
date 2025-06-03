import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const usuario = e.target.username.value;
    const senha = e.target.password.value;

    // Simulação de login
    if (usuario === 'tecnico@uepb.com' && senha === '1234') {
      localStorage.setItem('tipo', 'tecnico');
      navigate('/tecnico'); // Redireciona para a tela do técnico
    } else if (usuario === 'usuario@uepb.com' && senha === '1234') {
      localStorage.setItem('tipo', 'usuario');
      navigate('/menu-usuario'); // Redireciona para o menu do usuário
    } else {
      alert('Usuário ou senha inválidos');
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
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />

          <div className="checkbox-area">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Relembre-me</label>
          </div>

          <button type="submit">Acessar</button>
        </form>

        <a href="/alterar-senha" className="forgot-password">Esqueci minha Senha</a>
      </div>
    </div>
  );
}

export default Login;
