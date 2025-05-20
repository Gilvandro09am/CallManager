import React from 'react';
import './ChamadosTecnico.css';

const chamados = [
  {
    prioridade: 'Urgente',
    titulo: 'Problema A',
    formulario: 'Formulário A',
    nome: 'Amanda Costa',
    cor: 'green',
  },
  {
    prioridade: 'Médio',
    titulo: 'Problema B',
    formulario: 'Formulário B',
    nome: 'Amanda Costa',
    cor: 'blue',
  },
  {
    prioridade: 'Médio',
    titulo: 'Problema C',
    formulario: 'Formulário C',
    nome: 'Amanda Costa',
    cor: 'blue',
  },
  {
    prioridade: 'Urgente',
    titulo: 'Problema D',
    formulario: 'Formulário D',
    nome: 'Amanda Costa',
    cor: 'green',
  },
  {
    prioridade: 'Urgente',
    titulo: 'Problema H',
    formulario: 'Formulário H',
    nome: 'Amanda Costa',
    cor: 'blue',
  },
  {
    prioridade: 'Alto',
    titulo: 'Problema G',
    formulario: 'Formulário G',
    nome: 'Amanda Costa',
    cor: 'blue',
  },
  {
    prioridade: 'Urgente',
    titulo: 'Problema F',
    formulario: 'Formulário F',
    nome: 'Amanda Costa',
    cor: 'red',
  },
  {
    prioridade: 'Médio',
    titulo: 'Problema E',
    formulario: 'Formulário E',
    nome: 'Amanda Costa',
    cor: 'gray',
  },
];

const ChamadosTecnico = () => {
  return (
    <div className="tecnico-container">
      <header className="header">
        <img src="/logo.png" alt="UEPB Call Manager" className="logo" />
        <div className="tecnico-info">
          <div className="foto-perfil"></div>
          <span>Técnico G</span>
        </div>
      </header>

      <input className="barra-busca" placeholder="buscar..." />

      <div className="botoes-categorias">
        <button className="btn-atribuidos">CHAMADOS ATRIBUÍDOS <span>4</span></button>
        <button className="btn-respondidos">CHAMADOS RESPONDIDOS <span>2</span></button>
        <button className="btn-espera">CHAMADOS EM ESPERA <span>1</span></button>
        <button className="btn-solucionados">CHAMADOS SOLUCIONADOS <span>1</span></button>
      </div>

      <div className="cards-chamados">
        {chamados.map((item, index) => (
          <div className="card-chamado" key={index}>
            <span className={`prioridade prioridade-${item.prioridade.toLowerCase()}`}>
              {item.prioridade}
            </span>
            <h3>{item.titulo}</h3>
            <p><span role="img" aria-label="form">📄</span> {item.formulario}</p>
            <div className="usuario">
              <img src="/perfil.png" alt="Amanda Costa" className="perfil-img" />
              <span>{item.nome}</span>
            </div>
            <span className={`estrela estrela-${item.cor}`}>★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChamadosTecnico;
