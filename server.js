// server.js
const express = require("express");
const path = require("path");
const app = express();

// Tu API_KEY segura en Render
const apiKey = process.env.API_KEY;

// Servir archivos estáticos desde la carpeta "src"
app.use(express.static(path.join(__dirname, "src")));

// Ruta raíz para que muestre index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

// Ejemplo de endpoint de tu bot (opcional)
app.get("/bot", (req, res) => {
  res.json({ message: "¡Bot activo y corriendo! 🚀" });
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT} 🚀`));