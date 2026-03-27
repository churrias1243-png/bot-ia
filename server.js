const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/mensaje', async (req, res) => {
  try {
    const userMessage = req.body.text;
    const botReply = await tuFuncionDeIA(userMessage); // tu función de IA
    res.json({ reply: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: 'Error de la IA 😭' });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));