async function enviar() {
  const input = document.getElementById("input");
  const mensajes = document.getElementById("mensajes");

  const texto = input.value;
  if (!texto) return;

  const msgUser = document.createElement("div");
  msgUser.textContent = "Tú: " + texto;
  msgUser.className = "usuario";
  mensajes.appendChild(msgUser);

  const res = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ mensaje: texto })
  });

  const data = await res.json();

  const msgBot = document.createElement("div");
  msgBot.textContent = "Bot: " + data.respuesta;
  msgBot.className = "bot";
  mensajes.appendChild(msgBot);

  input.value = "";
}

async function cargarChat() {
  const mensajes = document.getElementById("mensajes");

  const res = await fetch("/chat");
  const data = await res.json();

  data.forEach(m => {
    const u = document.createElement("div");
    u.textContent = "Tú: " + m.usuario;
    u.className = "usuario";

    const b = document.createElement("div");
    b.textContent = "Bot: " + m.bot;
    b.className = "bot";

    mensajes.appendChild(u);
    mensajes.appendChild(b);
  });
}

window.onload = cargarChat;