import http from 'http';

let app = (port, host) =>
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, host);

module.exports = app;
