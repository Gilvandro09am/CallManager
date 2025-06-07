import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import AvaliacaoChamado from "./components/AvaliacaoChamado";
import RespostaChamado from './components/RespostaChamado';
import AlterarSenha from "./components/AlterarSenha";
import ChamadosTecnico from './components/ChamadosTecnico';
import FormularioChamado from './components/FormularioChamado';


 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/avaliar-chamado" element={<AvaliacaoChamado />} />
        <Route path="/chamados" element={<ChamadosTecnico/>} />
        <Route path="/resposta-chamado" element={<RespostaChamado />} />
        <Route path="/formulario-chamado" element={<FormularioChamado />} />
        <Route path="/alterar-senha" element={<AlterarSenha />} />
        </Routes>
    </BrowserRouter>
  );
} 

export default App;
