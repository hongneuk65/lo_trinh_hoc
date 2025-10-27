const http = require('http'); // node.js

const hostname = '127.0.0.1'; //localhost
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('hello world\n Nguyen Van Hong');
});

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}`)
});