var http = require('http');
var fs = require('fs');

var emp = [];

//2.
var extServerOptions = {
    host: 'apiapptrainingservice.azurewebsites.net',
    path: '/api/Products',
    method: 'GET'
};
//3.
function get() {
    http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            emp = JSON.parse(data);
            console.log(emp);
        });

    }).end();
};



console.log("Doing the Post Operations....");
//4
var product = JSON.stringify({
    "ProductRowId": 10,
    "ProductId": 101,
    "ProductName": "Desktop",
    "Manufacturer": "Ram ent.",
    "CategoryName": "Electronics",
    "Description": "Dell",
    "BasePrice": 4000

});


//5
var extServerOptionsPost = {
    host: 'apiapptrainingservice.azurewebsites.net',
    path: '/api/Products',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': product.length
    }
};



//6
var reqPost = http.request(extServerOptionsPost, function (res) {
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
        console.log('Posting Result:\n');
        process.stdout.write(data);
        console.log('\n\nPOST Operation Completed');
    });
});

// 7
reqPost.write(product);
reqPost.end();
reqPost.on('error', function (e) {
    console.error(e);
});

get();

var productPage = fs.readFileSync('./postdata.html');
//3.
var server = http.createServer(function (req, resp) {
    //4.
    if (req.method === "GET") {
        get();
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.end(productPage);
    }
    //5.
    if (req.method === "POST") {
        var productData = '';
        //6.
        req.on('data', function (prd) {
            productData += prd;
        }).on('end', function () {
            console.log('The received data is ' + productData.toString());
            resp.end('Data received  from you is ' + productData.toString());
        });
    }
});
server.listen(5050);
console.log('Server started on  5050');