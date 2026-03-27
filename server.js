// server.js
const express = require("express");
const path = require("path");
const app = express();

// Puerto dinámico para Render o fallback a 3000
const PORT = process.env.PORT || 3000;

// API_KEY segura (si la necesitas)
const apiKey = process.env.API_KEY;

// Servir archivos estáticos desde la carpeta "src"
app.use(express.static(path.join(__dirname, "src")));

// Ruta raíz ("/") -> sirve index.html automáticamente gracias a express.static
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Ruta de ejemplo para API (opcional)
app.get("/api", (req, res) => {
  res.json({ message: "¡Bot activo y corriendo! 🚀" });
});

// Escuchar puerto
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});