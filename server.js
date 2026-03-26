// server.js
const express = require("express");
const app = express();
const path = require("path");

const apiKey = process.env.API_KEY; // tu key segura en Render
const PORT = process.env.PORT || 3000;

// Sirve todos los archivos de la carpeta src como estáticos
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal: index.html de src
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Ruta de prueba del bot o API
app.get("/api", (req, res) => {
  res.json({ status: "Bot activo 🚀", apiKeyPresent: !!apiKey });
});

// Escucha el puerto
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT} 🚀`));