//Mi primer hola munod node.js + hola mundo full uwu
console.log('hola mundo');

const http = require('http');

const host = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'Text/plain')
    res.end("Hola mundo uwu")
});

server.listen(port, host, ()=> {
    console.log("Server encendio en: " + host + "/" + port)
    //http://localhost:3000/
});