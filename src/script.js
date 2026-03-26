function agregarMensaje(texto, tipo) {
  let div = document.createElement("div");
  div.className = "mensaje " + tipo;
  div.innerText = texto;

  document.getElementById("mensajes").appendChild(div);
  div.scrollIntoView();
}

function responder(texto) {
  texto = texto.toLowerCase();

  if (texto.includes("hola")) {
    return "holaa 🥺💗";
  }

  if (texto.includes("te amo")) {
    return "t amo muchísimo mash mi niña hermosa 🥺💗🫶🏻✨";
  }

  if (texto.includes("te extraño")) {
    return "yo más 😭🫂 ya ven conmigo mash 🥺💗";
  }

  if (texto.includes("qué haces") || texto.includes("que haces")) {
    return "pensando en ti 😏💗";
  }

  if (texto.includes("cómo estás") || texto.includes("como estas")) {
    return "bien pero te necesito aquí conmigo 🥺💗🫂";
  }

  if (texto.includes("buenas noches")) {
    return "descansa mi niña hermosa 💗🌃 sueña conmigo 🥺";
  }

  if (texto.includes("buenos días")) {
    return "buenos días mi amor 🥺💗 espero hayas dormido bonito 🫶🏻✨";
  }

  // respuestas random más naturales
  let respuestas = [
    "t amo mucho 🥺💗",
    "no dejo de pensar en ti mash 😭💗",
    "ven dame un abrazo 🫂🥺",
    "mi niña hermosa 😍💗",
    "me encantas demasiado 🫣💗",
    "te necesito conmigo ya 😭🫶🏻",
    "ando bien enamorado de ti 😻💗",
    "no te quiero soltar nunca 🫂💗",
    "me haces demasiado feliz 🥹💗",
    "ven dame besito 😘😚💗",
    "estás bien preciosa 😍🫣💗"
  ];

  return respuestas[Math.floor(Math.random() * respuestas.length)];
}

function enviar() {
  let input = document.getElementById("input");
  let texto = input.value;

  if (!texto) return;

  agregarMensaje(texto, "usuario");

  setTimeout(() => {
    let respuesta = responder(texto);
    agregarMensaje(respuesta, "bot");
  }, 500);

  input.value = "";
}