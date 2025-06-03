import React from "react";
import { useNavigate } from "react-router-dom";
import "./FormularioChamado.css";

function FormularioChamado() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode capturar os dados se quiser
    // const dados = new FormData(e.target);

    alert("Formulário enviado com sucesso!");
    navigate("/menu-usuario"); // Redireciona após envio
  };

  const handleCancel = () => {
    navigate("/menu-usuario"); // Volta sem enviar
  };

  return (
    <div className="form-container">
      <p className="info-text">Preencha o formulário abaixo</p>
      <h2>Formulário de solicitação para Chamados</h2>

      <form className="chamado-form" onSubmit={handleSubmit}>
        <label>
          Tipo de solicitação:
          <select name="setor">
            <option value="ti">Setor TI</option>
            <option value="adm">Setor Administrativo</option>
          </select>
        </label>

        <label>
          Tema:
          <input type="text" name="tema" required />
        </label>

        <label>
          Detalhes do Chamado:
          <textarea name="detalhes" rows="5" required />
        </label>

        <label className="file-label">
          Anexos:
          <input type="file" name="anexo" />
        </label>

        <div className="inline-fields">
          <label>
            Local:
            <select name="local">
              <option value="campus1">Campus I</option>
              <option value="campus2">Campus II</option>
            </select>
          </label>

          <label>
            Sala:
            <select name="sala">
              <option value="sala1">Sala 101</option>
              <option value="sala2">Sala 202</option>
            </select>
          </label>
        </div>

        <div className="btn-group">
          <button type="submit" className="save-btn">Enviar</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioChamado;
