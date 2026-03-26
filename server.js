const express = require("express");
const path = require("path");
const app = express();

// --------------------
// Servir archivos estáticos desde la carpeta 'src'
app.use(express.static(path.join(__dirname, "src")));

// Ruta principal "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// --------------------
// Aquí puedes agregar endpoints de tu bot
// Ejemplo:
// app.get("/mi-bot", (req, res) => {
//   res.send("Bot activo 🚀");
// });

// --------------------
// Puerto dinámico para Render o 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT} 🚀`));