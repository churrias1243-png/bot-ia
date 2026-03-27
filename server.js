// server.js
const express = require("express");
const path = require("path");
const app = express();

// Puerto para Render o 3000 local
const PORT = process.env.PORT || 3000;

// 1) Servir todos los archivos estáticos de la carpeta src
app.use(express.static(path.join(__dirname, "src")));

// 2) Página principal (index.html) SIEMPRE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// 3) Endpoint de prueba de bot
app.get("/bot", (req, res) => {
  res.json({ message: "¡Bot activo y corriendo! 🚀" });
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});