var http = require('http');
var fs = require('fs');
var filewebmodule = require('./filewebmodule');
//1.create server object with listener

var server = http.createServer(function (request, response) {
    //2.parse the request and read url



    // let ans = filewebmodule.readReqFile(x);
    filewebmodule.readReqFile(request.url, function (err, data) {
        if (data) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        }
        else {
            response.writeHead(401, { "Content-Type": "text/html" });
            response.write("resourse you are looking for is not available");
            response.end();
        }
    });





});

server.listen(8080);
console.log("Server started on port 8080");