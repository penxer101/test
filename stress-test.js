const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You hit the /test route!');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('loaderio-45f20bb88980b932fc608c1fe1133627');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});