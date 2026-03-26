const http = require("http");

const apiKey = process.env.API_KEY; // tu key segura en Render

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head><title>Proyecto Render</title></head>
        <body>
          <h1>Proyecto listo 😎</h1>
          <p>Servidor corriendo y key segura ✅</p>
        </body>
      </html>
    `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo 🚀"));