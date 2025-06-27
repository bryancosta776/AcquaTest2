import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';
import Logo from '../components/Logo';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErro('');
    
    try {
      console.log('Tentando login em:', API_ENDPOINTS.LOGIN);
      const res = await axios.post(API_ENDPOINTS.LOGIN, { username, password });
      console.log('Resposta do login:', res.data);
      
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setErro('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setErro('Erro de conexão. Verifique se o backend está funcionando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Logo />
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input 
          placeholder="Usuário" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required 
          disabled={loading}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
        {erro && <p className="erro">{erro}</p>}
      </form>
    </>
  );
} 