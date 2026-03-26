// server.js
const express = require("express");
const app = express();

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------
// Ruta principal para que la página deje de mostrar "Not Found"
app.get("/", (req, res) => {
  res.send("¡Bot activo y corriendo! 🚀");
});

// ---------------------------------------------------
// Aquí va tu lógica del bot
// Por ejemplo, si usas alguna API o endpoints, agrégalos aquí
// app.get("/mi-bot", (req, res) => { ... })

// ---------------------------------------------------
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});