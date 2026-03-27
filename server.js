// server.js
const express = require("express");
const path = require("path");

const app = express();

// Tu API_KEY segura
const apiKey = process.env.API_KEY;

// Puerto dinámico para Render o 3000 por defecto
const PORT = process.env.PORT || 3000;

// Sirve archivos estáticos de la carpeta 'src'
app.use(express.static(path.join(__dirname, "src")));

// Ruta raíz para mostrar un mensaje simple
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Proyecto Render</title></head>
      <body>
        <h1>Proyecto listo 😎</h1>
        <p>Servidor corriendo y API_KEY segura ✅</p>
        <p><a href="/index.html">Abrir proyecto web</a></p>
      </body>
    </html>
  `);
});

// Ruta opcional para verificar la API_KEY
app.get("/api", (req, res) => {
  res.json({ message: "API corriendo 🚀", apiKey: apiKey ? "✅" : "❌" });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});