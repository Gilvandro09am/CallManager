import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./FormularioChamado.css";

function FormularioChamado() {
  const [category, setCategory] = useState("TI");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("campus1");
  const [sala, setSala] = useState("sala1");
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/meus-chamados');
  };

  /*const resetForm = () => {
    setCategory("TI");
    setTitle("");
    setDescription("");
    setLocal("campus1");
    setSala("sala1");
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        category: category,
        title: title,
        description: description,
        local: local,
        sala: sala,
        // anexo: arquivo, // Ignorado por enquanto
      };

      const token = localStorage.getItem("token"); // se estiver usando autenticação

      const res = await axios.post("http://localhost:3001/api/tickets/create-ticket", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Chamado criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar chamado:", error.response?.data || error.message);
      alert("Erro ao criar chamado.");
    }
  };

  return (
    <div className="form-container">
      <p className="info-text">Preencha o formulário abaixo</p>
      <h2>Formulário de solicitação para Chamados</h2>

      <form className="chamado-form" onSubmit={handleSubmit}>
        <label>
          Tipo de solicitação:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="TI">Setor TI</option>
            <option value="ADM">Setor Administrativo</option>
          </select>
        </label>

        <label>
          Titulo:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Descrição:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="5" />
        </label>

        <div className="inline-fields">
          <label>
            Local:
            <select value={local} onChange={(e) => setLocal(e.target.value)}>
              <option value="campus1">Campus I</option>
              <option value="campus2">Campus II</option>
            </select>
          </label>

          <label>
            Sala:
            <select value={sala} onChange={(e) => setSala(e.target.value)}>
              <option value="sala1">Sala 101</option>
              <option value="sala2">Sala 202</option>
            </select>
          </label>
        </div>

        <div className="btn-group">
          <button type="submit" className="save-btn" >Salvar</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioChamado;
