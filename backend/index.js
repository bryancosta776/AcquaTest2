const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration for production (Render)
const PORT = process.env.PORT || 5000;

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const upload = multer({ dest: uploadDir });

const USERS = [{ username: 'admin', password: '1234' }];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) return res.json({ success: true, token: 'fake-jwt-token' });
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.post('/consumo', upload.single('foto'), (req, res) => {
  const { litros, leitura } = req.body;
  // Example: base value $5 + $2 per 1000 liters, 10% discount
  const base = 5;
  const valor = base + (Number(litros) / 1000) * 2;
  const desconto = 0.1;
  const valorFinal = valor * (1 - desconto);
  res.json({
    mensagem: 'Bill generated successfully!',
    valorOriginal: valor.toFixed(2),
    desconto: (desconto * 100) + '%',
    valorFinal: valorFinal.toFixed(2),
    foto: req.file ? req.file.filename : null
  });
});

// Health check route for Render
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`)); 