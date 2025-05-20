import { useState } from 'react';

const AlterarSenha = () => {
  const [usuario, setUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [captcha, setCaptcha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
      alert('Por favor, marque o reCAPTCHA.');
      return;
    }
    // Aqui você pode enviar os dados para o backend
    console.log('Usuário ou CPF:', usuario);
    console.log('Nova Senha:', novaSenha);
    alert('Senha alterada com sucesso!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>🔑 Alterar Senha</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Usuário ou CPF:</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Informe a sua matrícula ou CPF"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>Nova Senha:</label>
            <input
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                checked={captcha}
                onChange={(e) => setCaptcha(e.target.checked)}
              />
              {' '}Não sou um robô
            </label>
          </div>
          <button type="submit" style={styles.button}>Salvar</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px',
  },
  box: {
    width: '500px',
    padding: '40px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px #ccc',
    borderRadius: '8px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#1a8f3c',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AlterarSenha;
