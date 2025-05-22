import React, { useState } from 'react';
import './AvaliacaoChamado.css';

function AvaliacaoChamado() {
  const [resolvido, setResolvido] = useState(null);
  const [respostaUsuario, setRespostaUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      resolvido,
      respostaUsuario: resolvido === false ? respostaUsuario : 'Problema resolvido'
    });
    alert('Avaliação enviada com sucesso!');
  };

  return (
    <div className="avaliacao-container">
      <div className="avaliacao-card">
        <h2 className="titulo-problema">Problema A</h2>

        <div className="avaliacao-topo">
          <div className="avaliacao-formulario">
            <span role="img" aria-label="form">📝</span>
            <span className="nome-formulario"><i>Formulário A</i></span>
          </div>

          <div className="avaliacao-perfis">
            <div className="perfil">
                <div className="tecnico-icon">G</div>
                <span>Técnico G</span>
            </div>
                
                <div className="perfil">
                    </div><img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt="Amanda"
                    className="avatar"
                />
                <span>Amanda Costa</span>
            </div>
        </div>


        <form onSubmit={handleSubmit}>
          <div className="linha">
            <label className="label">Resposta do Chamado:</label>
            <textarea
              value="Resolução do problema A ....."
              readOnly
              className="textarea"
            />
            <div className="prioridade-box">
              <label className="label">Prioridade:</label>
              <input
                type="text"
                value="Urgente"
                readOnly
                className="input-urgente"
              />
            </div>
          </div>

          <div className="avaliacao">
            <label className="label">Resolveu o problema?</label>
            <div>
              <button type="button" onClick={() => setResolvido(true)} className="btn-sim">Sim</button>
              <button type="button" onClick={() => setResolvido(false)} className="btn-nao">Não</button>
            </div>
          </div>

          {resolvido === false && (
            <div className="responder-box">
              <label className="label">Responder:</label>
              <textarea
                placeholder="Explique o que não foi resolvido..."
                value={respostaUsuario}
                onChange={(e) => setRespostaUsuario(e.target.value)}
                className="textarea"
              />
            </div>
          )}

          <div className="botoes">
            <button type="submit" className="btn-save">Save</button>
            <button type="button" className="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AvaliacaoChamado;
