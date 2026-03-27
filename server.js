const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "src")));

const DB_FILE = "chat.json";

function leerChat() {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE));
}

function guardarChat(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

app.post("/chat", (req, res) => {
  const mensaje = req.body.mensaje.toLowerCase();

  let respuesta = "Me gusta hablar contigo 💖";

  if (mensaje.includes("hola")) respuesta = "Holaa mi amor 😍";
  else if (mensaje.includes("te amo")) respuesta = "Yo más ❤️";
  else if (mensaje.includes("extraño")) respuesta = "Yo también te extraño 🥺";
  else if (mensaje.includes("qué haces")) respuesta = "Pensando en ti 😏";

  const chat = leerChat();
  chat.push({ usuario: mensaje, bot: respuesta });
  guardarChat(chat);

  res.json({ respuesta });
});

app.get("/chat", (req, res) => {
  res.json(leerChat());
});

app.listen(PORT, () => {
  console.log("Servidor corriendo 🚀");
});