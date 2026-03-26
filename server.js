// server.js
const express = require("express");
const app = express();

// Tu API_KEY segura en Render
const apiKey = process.env.API_KEY;

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------
// Ruta principal para que la página deje de mostrar "Not Found"
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Proyecto Render</title></head>
      <body>
        <h1>Proyecto listo 😎</h1>
        <p>Servidor corriendo y API_KEY segura ✅</p>
      </body>
    </html>
  `);
});

// ---------------------------------------------------
// Aquí va tu lógica del bot
// Ejemplo de ruta para el bot
app.get("/mi-bot", (req, res) => {
  res.send(`Bot activo con key: ${apiKey}`);
});

// ---------------------------------------------------
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
});