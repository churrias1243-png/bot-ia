const fetch = require("node-fetch");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "src")));

const DB_FILE = "chat.json";

// leer chat
function leerChat() {
  if (!fs.existsSync(DB_FILE)) return [];
  return JSON.parse(fs.readFileSync(DB_FILE));
}

// guardar chat
function guardarChat(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// IA REAL
app.post("/chat", async (req, res) => {
  const mensaje = req.body.mensaje;

  try {
    const respuestaIA = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Responde como un novio cariñoso, atento, natural y romántico ❤️😏🥺"
          },
          {
            role: "user",
            content: mensaje
          }
        ]
      })
    });

    const data = await respuestaIA.json();

    const respuesta =
      data.choices?.[0]?.message?.content || "Error con la IA 😢";

    const chat = leerChat();
    chat.push({ usuario: mensaje, bot: respuesta });
    guardarChat(chat);

    res.json({ respuesta });

  } catch (error) {
    console.log(error);
    res.json({ respuesta: "Error con la IA 😢" });
  }
});

// obtener historial
app.get("/chat", (req, res) => {
  res.json(leerChat());
});

// iniciar servidor
app.listen(PORT, () => {
  console.log("Servidor con IA 🚀");
});