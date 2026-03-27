const express = require("express");
const path = require("path");
const app = express();

// API_KEY segura
const apiKey = process.env.API_KEY;

// Puerto dinámico
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de src
app.use(express.static(path.join(__dirname, "src")));

// Ruta del bot
app.get("/bot", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// Enviar index.html para cualquier otra ruta que no sea /bot
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});