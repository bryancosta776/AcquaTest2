import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import Logo from '../components/Logo';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_ENDPOINTS.LOGIN, { username, password });
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      }
    } catch {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <>
      <Logo />
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Entrar</button>
        {erro && <p className="erro">{erro}</p>}
      </form>
    </>
  );
} 