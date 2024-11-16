const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html');
const css = fs.readFileSync('./index.css');

const server = http.createServer((req, res) => {
    req.url === '/'
        ? (res.writeHead(200, { 'Content-Type': 'text/html' }), res.write(html))
        : req.url === '/style.css'
        (res.writeHead(200, { 'Content-Type': 'text/css' }), res.write(css))
    res.end();
});
server.listen(5000);