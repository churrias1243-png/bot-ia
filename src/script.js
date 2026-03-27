function enviar() {
  const input = document.getElementById("input");
  const mensajes = document.getElementById("mensajes");

  if (input.value.trim() === "") return;

  const mensajeUsuario = document.createElement("div");
  mensajeUsuario.textContent = "Tú: " + input.value;
  mensajeUsuario.className = "usuario";
  mensajes.appendChild(mensajeUsuario);

  const respuesta = document.createElement("div");
  respuesta.textContent = "Bot: Estoy aprendiendo 😎";
  respuesta.className = "bot";

  setTimeout(() => {
    mensajes.appendChild(respuesta);
  }, 500);

  input.value = "";
}