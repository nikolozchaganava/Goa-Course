const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('index.html');
    res.end(data);
})

const portNumber = 3000;
console.log(`Server running at http://localhost:${portNumber}`);