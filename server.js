const http = require('http');

server = http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('основы Node.js');
  })
  .listen(3000, () => console.log('сервер работает'));
