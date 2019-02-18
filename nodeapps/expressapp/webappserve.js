//1.load express

var express = require('express');

//1a. load the path module. this will be used by static middleware of express. the path is standard node module
var path = require('path');

//1b import the data module
var dataModel = require('./datamodel');
var userModel = require('./usermodel');
var dal = require('./dal');
//1c. load the body-parser
var bodyParser = require("body-parser");
//1d. loading mongoose driver
var mongoose = require('mongoose');
//1e. set the globalpromise to manage all async call madeby application using mongoose driver
mongoose.Promise = global.Promise;

//2. define an instance of express
var instance = express();

//3. configure all middlewares, call "use()" method on express instance
//3a. static files
instance.use(express.static(path.join(__dirname, './../node_modules/jquery/dist/')));
//3b. dfine express-router for seggrigating urls for html page web requests and rest api requests

var router = express.Router();

//3c. add the router object in the express middleware
instance.use(router);
//3d. configure the body-parser middleware
//3d.1 use urlencoded as false to read data from http url as querystring, formmodel etc.
instance.use(bodyParser.urlencoded({ extended: false }));
//3d.2 use the json() parser for body parser
instance.use(bodyParser.json());
//4. create a web request handlers
//4a. this will return home.html from views folder
router.get("/home", function (req, res) {
    res.sendFile("home.html", {
        root: path.join(__dirname, "./../views")
    });
});

//6. create rest api request handlers 
instance.get("/api/products", function (request, response) {
    //6a. make call to db for a collection mapped with model and expect all documents from it.
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];
    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    };
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            console.log("data.newUser" + data.newUser);

            if (!data.newUser) {
                response.send({ status: 500, data: 'Access denied' })
            } else {
                console.log("in if");
                dal.getData(function (err, data1) {
                    if (err) {
                        response.send({ status: 500, data: 'Error in fetching data.' });
                    }
                    else {
                        console.log("No error", data);
                        response.send({ status: 200, data: data1 });
                    }
                })
            }

        }
    });
});

// 
instance.post("/api/products", function (request, response) {
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];

    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    };
    console.log("User:", user);
    var prd = {
        ProductId: request.body.ProductId,
        ProductName: request.body.ProductName,
        CategoryName: request.body.CategoryName,
        manufacturer: request.body.manufacturer,
        price: request.body.price
    }
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            console.log("data.newUser" + data.newUser);

            if (!data.newUser) {
                response.send({ status: 500, data: 'Access denied' })
            } else {
                console.log("in if");
                dal.addData(prd, function (err, data1) {
                    if (err) {
                        response.send({ status: 500, data: 'Error in storing Data.' })
                    }
                    else {
                        console.log("No error", data);
                        response.send({ status: 200, data: 'Data stored successfully.' })
                    }
                })
            }

        }
    });
});


instance.get("/api/products/:id", function (request, response) {

    var id = request.params.id;
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];
    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    };
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            console.log("data.newUser" + data.newUser);

            if (!data.newUser) {
                response.send({ status: 500, data: 'Access denied' })
            } else {
                console.log("in if");
                dal.getDataOne(id, function (err, data1) {
                    if (err) {
                        response.send({ status: 500, data: 'Error in fetching data.' });
                    }
                    else {
                        console.log("No error", data);
                        response.send({ status: 200, data: data1 });
                    }
                })
            }

        }
    });
});

instance.put("/api/products", function (request, response) {
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];

    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    };
    console.log("User:", user);
    var prd = {
        ProductId: request.body.ProductId,
        ProductName: request.body.ProductName,
        CategoryName: request.body.CategoryName,
        manufacturer: request.body.manufacturer,
        price: request.body.price
    }
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            console.log("data.newUser" + data.newUser);

            if (!data.newUser) {
                response.send({ status: 500, data: 'Access denied' })
            } else {
                console.log("in if");
                dal.updateData(prd, function (err, data1) {
                    if (err) {
                        response.send({ status: 500, data: 'Error in updating Data.' })
                    }
                    else {
                        console.log("No error", data);
                        response.send({ status: 200, data: 'Data updated successfully.' })
                    }
                })
            }

        }
    });
});

instance.delete("/api/products/:id", function (request, response) {
    var id = request.params.id;
    console.log("Id is", id);
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];
    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    };
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            console.log("data.newUser" + data.newUser);

            if (!data.newUser) {
                response.send({ status: 500, data: 'Access denied' })
            } else {
                console.log("in if", id);
                dal.deleteData(id, function (err, data1) {
                    if (err) {
                        response.send({ status: 500, data: 'Error in storing Data.' })
                    }
                    else {
                        console.log("No error", data);
                        response.send({ status: 200, data: 'Data deleted successfully.' })
                    }
                })
            }

        }
    });
})

////////////////////////////////////////////////////////////////////--user access and add
instance.post("/api/userModel/add", function (request, response) {
    //parsing posted data in json format
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];
    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    }
    var auser = {
        UserName: request.body.userId,
        password: request.body.password
    }
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            console.log("data.newUser", data.newUser, data.adminFlag1);
            if (data.newUser) {
                console.log("plz create user");
            } else {
                console.log("user already exist");
            }
            // if (!data.newUser) {
            //     response.send({ status: 300, data: 'do not create' });
            // } else {
            //     response.send({ status: 500, data: ' create user' });
            //     // userModel.addUser(auser, function (err, data1) {
            //     //     if (err) {
            //     //         response.send({ status: 500, data: 'Error in storing Data.' })
            //     //     }
            //     //     else {
            //     //         console.log("No error", data);
            //     //         response.send({ status: 200, data: 'New user created successfully.Now you can access Products' })
            //     //     }
            //     // })
            // }

        }
    });
});


instance.post("/api/userModel/validate", function (request, response) {
    var authValues = request.headers.authorization;
    var data = authValues.split(":");
    var adUsername = data[0];
    var adPassword = data[1];
    var user = {
        userId: request.body.userId,
        password: request.body.password,
        adminusername: adUsername,
        adminpassword: adPassword
    }
    var auser = {
        UserName: request.body.userId,
        password: request.body.password
    }
    userModel.validateData(user, function (err, data) {
        if (err) {
            console.log("Error is here");
            return false;
        }
        else {
            if (!data.newUser) {
                response.send({ status: 500, data: 'Access denied' })
            } else {
                console.log("No error", data);
                response.send({ status: 200, data: 'User is valid you can move further' });
            }
        }
    });
});
///////////////////////////////////////////////////////////////////

//6. start listening
instance.listen(4070, function () {
    console.log("Server started on 4070..");
})
