const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { botName: 'Mi amoor😻💗🥺' });
});

app.post('/mensaje', async (req, res) => {
  const userMessage = req.body.text;
  const botReply = "Hola 😻💗, recibí tu mensaje: " + userMessage;
  res.json({ reply: botReply });
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));