import { useState } from 'react';
import './RespostaChamado.css';

function RespostaChamado({ problema = "Problema A", formulario = "Formulário A", usuario = "Amanda Costa" }) {
  const [resposta, setResposta] = useState('');
  const [prioridade, setPrioridade] = useState('Urgente');

  const handleSalvar = () => {
    // lógica de envio da resposta
    console.log('Resposta:', resposta);
    console.log('Prioridade:', prioridade);
    alert("Resposta enviada com sucesso!");
  };

  const handleCancelar = () => {
    setResposta('');
    setPrioridade('Urgente');
  };

  return (
    <div className="resposta-container">
      <h2>{problema}</h2>
      <div className="formulario-cabecalho">
        <span className="formulario-icone">📝</span>
        <h3>{formulario}</h3>
        <div className="usuario">{usuario}</div>
      </div>

      <label>Responder Chamado:</label>
      <textarea
        placeholder="Descreva a solução do problema..."
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
      />

      <label>Prioridade:</label>
      <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
        <option value="Urgente">Urgente</option>
        <option value="Alta">Alta</option>
        <option value="Média">Média</option>
        <option value="Baixa">Baixa</option>
      </select>

      <div className="botoes">
        <button className="salvar" onClick={handleSalvar}>Salvar</button>
        <button className="cancelar" onClick={handleCancelar}>Cancelar</button>
      </div>
    </div>
  );
}

export default RespostaChamado;
