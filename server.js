const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Para servir archivos HTML/JS/CSS

// Ruta de API para mensajes
app.post('/mensaje', async (req, res) => {
  try {
    const userMessage = req.body.text;

    // Llama a tu función de IA
    const botReply = await tuFuncionDeIA(userMessage); // deja tu lógica igual

    res.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Error de la IA 😭' });
  }
});

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));