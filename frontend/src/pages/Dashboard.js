import { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import WebcamCapture from '../components/WebcamCapture';
import Logo from '../components/Logo';

export default function Dashboard() {
  const [litros, setLitros] = useState('');
  const [leitura, setLeitura] = useState('');
  const [foto, setFoto] = useState(null);
  const [resposta, setResposta] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('litros', litros);
    formData.append('leitura', leitura);

    if (foto) {
      // Converter base64 para Blob
      const res = await fetch(foto);
      const blob = await res.blob();
      formData.append('foto', blob, 'foto.jpg');
    }

    const token = localStorage.getItem('token');
    const config = { headers: { 'Authorization': `Bearer ${token}` } };

    const resp = await axios.post(API_ENDPOINTS.CONSUMO, formData, config);
    setResposta(resp.data);
  };

  return (
    <>
      <Logo />
      <div className="dashboard">
        <h2>Registrar Consumo de Água</h2>
        <form onSubmit={handleSubmit}>
          <WebcamCapture onCapture={setFoto} />
          <input placeholder="Litros consumidos" value={litros} onChange={e => setLitros(e.target.value)} required />
          <input placeholder="Leitura do hidrômetro" value={leitura} onChange={e => setLeitura(e.target.value)} required />
          <button type="submit">Enviar</button>
        </form>
        {resposta && (
          <div className="conta">
            <p>Valor original: R$ {resposta.valorOriginal}</p>
            <p>Desconto: {resposta.desconto}</p>
            <p>Valor final: R$ {resposta.valorFinal}</p>
          </div>
        )}
      </div>
    </>
  );
} 