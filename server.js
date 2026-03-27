// server.js
const express = require("express");
const path = require("path");
const app = express();

// Tu API_KEY segura desde Render
const apiKey = process.env.API_KEY;

// Puerto dinámico para Render o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de la carpeta src
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal para confirmar que el bot está corriendo
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Proyecto Render</title></head>
      <body>
        <h1>Proyecto listo 😎</h1>
        <p>Servidor corriendo y API_KEY segura ✅</p>
        <p>Tu bot y web están funcionando.</p>
      </body>
    </html>
  `);
});

// Ruta de ejemplo para tu bot (si quieres agregar endpoints)
app.get("/bot", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});