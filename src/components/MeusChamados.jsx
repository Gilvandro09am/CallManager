import React, { useEffect, useState } from 'react';
import { listarMeusChamados } from '../services/Api';
import { listarChamadosPorSetor } from '../services/Api';
import Navbar from './NavBar';

const MeusChamados = () => {
    const [chamados, setChamados] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
  
   useEffect(() => {
    const fetchChamados = async () => {
      try {
        if (user?.role === 'staff') {
          const resposta = await listarChamadosPorSetor();
          setChamados(resposta.data);
        } else if (user?.role === 'student') {
          const resposta = await listarMeusChamados();
          setChamados(resposta.data);
        }
      } catch (erro) {
        console.error('Erro ao buscar chamados:', erro);
      }
    };
    fetchChamados();
  }, [user?.role, user?.sector, user?.id]);

  return (
   <>
      <Navbar user={user} />
      <div className="tecnico-container">
        <input className="barra-busca" placeholder="buscar..." />
        <div className="botoes-categorias">
          <button className="btn-atribuidos">
            CHAMADOS ATRIBUÍDOS 
            <span>({chamados.filter(c => c.status === 'aberto').length})</span>
          </button>
          <button className="btn-respondidos">
            CHAMADOS RESPONDIDOS 
            <span>({chamados.filter(c => c.status === 'resolvido').length})</span>
          </button>
          <button className="btn-espera">
            CHAMADOS EM ESPERA 
            <span>({chamados.filter(c => c.status === 'andamento').length})</span>
          </button>
          <button className="btn-solucionados">
            CHAMADOS SOLUCIONADOS 
            <span>({chamados.filter(c => c.status === 'resolvido').length})</span>
          </button>
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
    </>
  );
};
export default MeusChamados;