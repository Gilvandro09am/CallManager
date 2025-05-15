import '../styles/Login.css';

function Login() {
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