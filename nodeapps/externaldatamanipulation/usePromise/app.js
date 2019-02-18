//1.
var callModule = require('./module');

//2.
var serverDetails = {
    host: 'apiapptrainingservice.azurewebsites.net',
    path: '/api/Products',
    method: 'GET'
};

var emp = [];
//3.
callModule.getData(serverDetails).then(function (response) {
    console.log();
    for (var i = 0; i < response.length; i++) {
        console.log(response[i]);

    }
}).catch(function (err) {
    console.log(err);
});

console.log('Done');