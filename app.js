const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
