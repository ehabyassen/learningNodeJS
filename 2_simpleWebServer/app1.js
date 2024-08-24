const http = require("http");

const server = http.createServer((request, response) => {
    console.log("A new request received");
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end("Hello from the server...");
});

server.listen(8080, "localhost", () => {
    console.log("Listening on port 8080...");
});