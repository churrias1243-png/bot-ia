// server.js
const express = require("express");
const path = require("path");
const app = express();

// Puerto dinámico de Render o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta src
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal que envía index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Ruta de ejemplo para tu bot
app.get("/bot", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT} 🚀`));