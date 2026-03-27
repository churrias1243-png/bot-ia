// server.js
const express = require("express");
const path = require("path");
const app = express();

// Tu API_KEY segura
const apiKey = process.env.API_KEY;

// Servir archivos estáticos de src
app.use(express.static(path.join(__dirname, "src")));

// Ruta raíz para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

// Endpoint de prueba del bot
app.get("/bot", (req, res) => {
  res.json({ message: "¡Bot activo y corriendo! 🚀" });
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT} 🚀`));