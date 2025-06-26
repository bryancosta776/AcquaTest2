# AcquaTest - Water Consumption Control System

Complete system with React frontend and Node.js backend for water consumption control.

## 🚀 Deployment

### Frontend (Vercel)

1. **Connect repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Set root directory as `frontend/`

2. **Configure environment variables:**
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com
   ```

3. **Automatic deployment:**
   - Vercel will automatically detect it's a React project
   - Build command: `npm run build`
   - Output directory: `build`

### Backend (Render)

1. **Connect repository to Render:**
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect to GitHub repository
   - Set root directory as `backend/`

2. **Configure the service:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
   - **Plan:** Free

3. **Environment variables (optional):**
   ```
   NODE_ENV=production
   PORT=10000
   ```

## 📁 Project Structure

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

## 🔧 Local Development

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

## 📝 Test Credentials

- **Username:** admin
- **Password:** 1234

## 🔗 Production URLs

After deployment, update the `frontend/vercel.json` file with your backend URL:

```json
{
  "env": {
    "REACT_APP_API_URL": "https://your-backend.onrender.com"
  }
}
```

## 📊 Features

- ✅ User login
- ✅ Webcam photo capture
- ✅ Water consumption registration
- ✅ Automatic bill calculation
- ✅ Responsive interface
- ✅ Automated deployment 