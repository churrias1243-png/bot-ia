const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Sirve index.html automáticamente

// Ruta de API para mensajes
app.post('/mensaje', async (req, res) => {
  try {
    const userMessage = req.body.text;

    // === Tu función de IA ===
    // Reemplaza esta línea con tu función real de IA
    const botReply = await tuFuncionDeIA(userMessage); 

    res.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Error de la IA 😭' });
  }
});

// Inicia el servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));