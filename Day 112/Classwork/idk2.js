const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Hello World');
  } else if(req.url === '/about'){
    res.end(`<h1>About us: Hello!</h1>`)
  }
});

const localhost = 3000;

console.log(`Server listen: http://localhost:${localhost}`);
server.listen(localhost);