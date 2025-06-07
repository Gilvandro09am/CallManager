import React from 'react';
import './ChamadosTecnico.css';
import { useEffect, useState } from 'react';
import { listarChamados } from '../services/Api';

const ChamadosTecnico = () => {
  
    const [chamados, setChamados] = useState([]);
  
    useEffect(() => {
      const fetchChamados = async () => {
        try {
          const resposta = await listarChamados(); // chamada à API
          setChamados(resposta.data); // atualiza o estado com os dados
        } catch (erro) {
          console.error('Erro ao buscar chamados:', erro);
        }
      };
    
      fetchChamados();
    }, []);

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
        <button className="btn-atribuidos">CHAMADOS ATRIBUÍDOS <span>{chamados.filter(c => c.status === 'aberto').length}</span></button>
        <button className="btn-respondidos">CHAMADOS RESPONDIDOS <span>{chamados.filter(c => c.status === 'resolvido').length}</span></button>
        <button className="btn-espera">CHAMADOS EM ESPERA <span>{chamados.filter(c => c.status === 'andamento').length}</span></button>
        <button className="btn-solucionados">CHAMADOS SOLUCIONADOS <span>{chamados.filter(c => c.status === 'resolvido').length}</span></button>
      </div>

      <div className="cards-chamados">
        {chamados.map((item, index) => (
          <div className="card-chamado" key={index}>
            <span className={`prioridade prioridade-${item.category?.toLowerCase()}`}>
              {item.category}
            </span>
            <h3>{item.title}</h3>
            <p><span role="img" aria-label="form">📄</span> {item.description}</p>
            <div className="usuario">
              <img src="/perfil.png" alt={item.name} className="perfil-img" />
                <span>{item.student?.name || 'Aluno(a)'}</span>
            </div>
            <span className={`estrela estrela-${item.cor || 'default'}`}>★</span>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default ChamadosTecnico;
