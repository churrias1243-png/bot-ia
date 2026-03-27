// server.js
const express = require("express");
const path = require("path");
const app = express();

// Puerto dinámico de Render
const PORT = process.env.PORT || 3000;

// Servir la carpeta src como archivos estáticos
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal (opcional, redirige al index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Ruta de prueba para bot (puedes cambiar esto después)
app.get("/bot", (req, res) => {
  res.json({ mensaje: "¡Bot activo y corriendo! 🚀" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});