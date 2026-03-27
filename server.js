const express = require("express");
const path = require("path");
const app = express();

const apiKey = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de src/
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Ruta de ejemplo del bot
app.get("/bot", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});
