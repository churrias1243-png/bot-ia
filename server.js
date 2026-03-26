// server.js
const express = require("express");
const path = require("path");
const app = express();

// Tu API key segura (si la usas)
const apiKey = process.env.API_KEY;

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'src'
app.use(express.static(path.join(__dirname, "src")));

// Ruta raíz (opcional, si quieres mensaje aparte)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Aquí puedes agregar más rutas si tu bot necesita endpoints
// app.get("/api", (req, res) => { ... })

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});