// server.js
const express = require("express");
const path = require("path");
const app = express();

// Puerto dinámico de Render o 3000
const PORT = process.env.PORT || 3000;

// Servir la carpeta 'src' como estática
app.use(express.static(path.join(__dirname, "src")));

// Ruta raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

// Ejemplo de ruta /bot
app.get("/bot", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});