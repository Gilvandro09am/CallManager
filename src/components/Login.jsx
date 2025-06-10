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
        localStorage.setItem('user', JSON.stringify(res.data.user)); 
        navigate('/listar-chamados'); 
      }
    } catch (err) {
      alert('Erro ao fazer login');
    }
  };
  
  return (
   <div class="login-container">
        <header class="login-header">
            <img src="Logocallm.png" alt="UEPB Call Manager" class="logo" />
            <h2>SISTEMA DE CHAMADOS</h2>
        </header>
        
        <div class="login-box">
            <h3>🔒 Login UEPB</h3>
            <form id="loginForm" onSubmit={handleLogin}>
                <div class="form-group">
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email" 
                        placeholder="E-mail institucional"
                        required
                    />
                </div>
                
                <div class="form-group">
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password" 
                        placeholder="Senha"
                        required
                    />
                </div>
                
                <button type="submit" class="login-btn">
                    Entrar
                </button>
            </form>
            
            <a href="#" class="Cadastro">Cadastrar-se</a>
        </div>
    </div>
  );
}

export default Login;