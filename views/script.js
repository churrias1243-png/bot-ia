const input = document.getElementById('input');
const send = document.getElementById('send');
const messages = document.getElementById('messages');

async function enviarMensaje() {
  const text = input.value.trim();
  if(!text) return;

  messages.innerHTML += `<div class="message user">Tú: ${text}</div>`;
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  const typing = document.createElement('div');
  typing.className = 'message bot';
  typing.textContent = 'Mi amoor😻💗🥺 está escribiendo...';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  try {
    const res = await fetch('/mensaje', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await res.json();
    typing.textContent = `Mi amoor😻💗🥺: ${data.reply}`;
    messages.scrollTop = messages.scrollHeight;
  } catch(e) {
    typing.textContent = 'Mi amoor😻💗🥺: Error de la IA 😭';
    messages.scrollTop = messages.scrollHeight;
  }
}

send.addEventListener('click', enviarMensaje);
input.addEventListener('keydown', e => { if(e.key === 'Enter') enviarMensaje(); });