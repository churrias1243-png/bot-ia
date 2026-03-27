// server.js
const express = require("express");
const path = require("path");
const app = express();

// Tu API_KEY segura desde Render (si la necesitas para el bot)
const apiKey = process.env.API_KEY;

// Puerto dinámico para Render o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de la carpeta src
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal: muestra tu index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Ruta de ejemplo para tu bot
app.get("/bot", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});