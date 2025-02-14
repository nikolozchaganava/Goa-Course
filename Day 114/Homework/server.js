const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Internal Server Error');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});