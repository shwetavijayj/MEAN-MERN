var http = require('http');

var data = [{ id: 1, name: "A" },
{ id: 2, name: "B" },
{ id: 3, name: "C" },
{ id: 4, name: "D" }
];

//1.Create server
var server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(data));
    response.end();
});
//2.listen on port
server.listen(4050);
console.log("Server started on port 4050...");