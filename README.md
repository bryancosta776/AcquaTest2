# AcquaTest - Sistema de Controle de Consumo de Água

Sistema completo com frontend React e backend Node.js para controle de consumo de água.

## 🚀 Deploy

### Frontend (Vercel)

1. **Conecte o repositório ao Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Importe o repositório do GitHub
   - Configure o diretório raiz como `frontend/`

2. **Configure as variáveis de ambiente:**
   ```
   REACT_APP_API_URL=https://seu-backend.onrender.com
   ```

3. **Deploy automático:**
   - O Vercel detectará automaticamente que é um projeto React
   - Build command: `npm run build`
   - Output directory: `build`

### Backend (Render)

1. **Conecte o repositório ao Render:**
   - Vá para [render.com](https://render.com)
   - Crie um novo Web Service
   - Conecte ao repositório do GitHub
   - Configure o diretório raiz como `backend/`

2. **Configure o serviço:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
   - **Plan:** Free

3. **Variáveis de ambiente (opcional):**
   ```
   NODE_ENV=production
   PORT=10000
   ```

## 📁 Estrutura do Projeto

```
AcquaTest/
├── frontend/          # React App (Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vercel.json
└── backend/           # Node.js API (Render)
    ├── index.js
    ├── package.json
    └── render.yaml
```

## 🔧 Desenvolvimento Local

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 📝 Credenciais de Teste

- **Usuário:** admin
- **Senha:** 1234

## 🔗 URLs de Produção

Após o deploy, atualize o arquivo `frontend/vercel.json` com a URL do seu backend:

```json
{
  "env": {
    "REACT_APP_API_URL": "https://seu-backend.onrender.com"
  }
}
```

## 📊 Funcionalidades

- ✅ Login de usuário
- ✅ Captura de foto com webcam
- ✅ Registro de consumo de água
- ✅ Cálculo automático de conta
- ✅ Interface responsiva
- ✅ Deploy automatizado 