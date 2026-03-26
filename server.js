// server.js
const express = require("express");
const path = require("path");
const app = express();

// Tu API_KEY segura desde Render
const apiKey = process.env.API_KEY;

// Puerto dinámico
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde src/
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

// Ruta del bot
app.get("/mi-bot", (req, res) => {
  res.send(`¡Bot activo y corriendo! 🚀 API_KEY segura: ${apiKey}`);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});