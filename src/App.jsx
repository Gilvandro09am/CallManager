import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import AvaliacaoChamado from "./components/AvaliacaoChamado";
import RespostaChamado from './components/RespostaChamado';
import CadastrarUsuario from "./components/CadastrarUsuario";
import ChamadosTecnico from './components/ChamadosTecnico';
import FormularioChamado from './components/FormularioChamado';

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/avaliar-chamado" element={<AvaliacaoChamado />} />
        <Route path="/listar-chamados" element={<ChamadosTecnico/>} />
        <Route path="/resposta-chamado" element={<RespostaChamado />} />
        <Route path="/criar-chamado" element={<FormularioChamado />} />
        <Route path="/cadastrar-usuario" element={<CadastrarUsuario/>} />
        </Routes>
    </BrowserRouter>
    
  );
}


export default App;
