import React from "react";
import "./FormularioChamado.css";

function FormularioChamado() {
  return (
    <div className="form-container">
      <p className="info-text">Preencha o formulário abaixo</p>
      <h2>Formulário de solicitação para Chamados</h2>

      <form className="chamado-form">
        <label>
          Tipo de solicitação:
          <select>
            <option value="ti">Setor TI</option>
            <option value="adm">Setor Administrativo</option>
          </select>
        </label>

        <label>
          Tema:
          <input type="text" />
        </label>

        <label>
          Detalhes do Chamado:
          <textarea rows="5" />
        </label>

        <label className="file-label">
          Anexos:
          <input type="file" />
        </label>

        <div className="inline-fields">
          <label>
            Local:
            <select>
              <option value="campus1">Campus I</option>
              <option value="campus2">Campus II</option>
            </select>
          </label>

          <label>
            Sala:
            <select>
              <option value="sala1">Sala 101</option>
              <option value="sala2">Sala 202</option>
            </select>
          </label>
        </div>

        <div className="btn-group">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioChamado;
