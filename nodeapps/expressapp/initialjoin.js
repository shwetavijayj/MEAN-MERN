/*
1. This file contains GET, POST, PUT, DELETE APIs along with JWT authentication. 
*/



// 1. load express
var express = require("express");
// 1a. load the 'path' module. This will be used by "static" middleware
// of express. The 'path' is standard node module
var path = require("path");

// 1b. import the data-module
var dataModel = require("./datamodel");
// 1c. load the body-parser
var bodyParser = require("body-parser");

// 1d. loading mongoose driver
var mongoose = require("mongoose");
// 1e. set the global promise to manage all async calls
// made by application using mongoose driver
mongoose.Promise = global.Promise;
// 1f. load cors package
var cors = require("cors");
// 2. define an instance of express

//---->Load jsonwebtokens
var jwt = require("jsonwebtoken");

var instance = express();

// 3. configure all middlewares, call "use()" method on express instance
// 3a. static files
instance.use(
    express.static(path.join(__dirname, "./../node_modules/jquery/dist/"))
);

// 3b. define express-router, for seggrigating
// urls for html page web requests and rest api requests
var router = express.Router();
// 3c. add the router object in the express middleware
instance.use(router);
// 3d. configure the body-parser middleware
// 3d.1 use urlencoded as false to read data from http url
// as querystring,formmodel etc.
instance.use(bodyParser.urlencoded({ extended: false }));
// 3d.2 use the json() parser for body-Parser
instance.use(bodyParser.json());

// 3e. configure cors() for the express
instance.use(cors());
// 4. create web request handlers
// 4a. This will return the home.html from views folder
router.get("/home", function (req, resp) {
    resp.sendFile("home.html", {
        root: path.join(__dirname, "./../views")
    });
});

// 5. Model-Schema-Mapping with collection on Mongo DB and
// establishing collection with it.'
mongoose.connect(
    "mongodb://localhost/ProductsAppDb",
    { useNewUrlParser: true }
);

// 5a. get the connection object
// if dbConnect is not undefined then the connection is successful
var dbConnect = mongoose.connection;
if (!dbConnect) {
    console.log("Sorry Connection is not established");
    return;
}

//creating user schema and creating user by post method
var userSchema = mongoose.Schema({
    UserName: String,
    password: String
})

var userModel = mongoose.model("User", userSchema, "userModel");

instance.get("/api/users", function (request, response) {
    userModel.find().exec(function (err, res) {
        if (err) {
            response.statusCode = 500;
            response.send({ status: response.statusCode, error: err });
        }
        console.log("Res in api", res);
        response.send({ status: 200, data: res });
    });
});



instance.post("/api/users", function (request, response) {

    var user = {
        UserName: request.body.UserName,
        password: request.body.password
    };
    console.log("user is", user);
    userModel.findOne({ UserName: request.body.UserName }, function (err, res) {
        if (err) {
            console.log("error is here::", err);
            response.statusCode = 500;
            response.send({ status: response.statusCode, error: err });
        }
        if (res) {
            response.send({ authenticated: true, message1: 'User already exist', data: res });
        } else {
            userModel.create(request.body, function (error1, res) {
                if (error1) {
                    response.statusCode = 500;
                    response.send({ status: response.statusCode, error: error1 });
                }
                response.send({ status: 200, data: 'user created successfully.' });
            });
        }
    }
    );
});




// instance.post("/api/user/create", function (request, response) {
//     userModel.create(request.body, function (error1, res) {
//         if (error1) {
//             response.statusCode = 500;
//             response.send({ status: response.statusCode, error: error1 });
//         }
//         response.send({ status: 200, data: 'user created successfully.' });
//     });
// })

//--->create secret for JWT
var jwtsettings = {
    jwtSecret: "hellothisismysecretkey"
};

instance.set("jwtSecret", jwtsettings.jwtSecret);
var tokenStore = "";

//--->authenticate user 
instance.post("/api/user/auth", function (request, response) {
    var user = {
        UserName: request.body.UserName,
        password: request.body.password
    };
    console.log("user is", user);
    userModel.findOne({ UserName: request.body.UserName }, function (err, res) {
        if (err) {
            console.log("error is here::", err);
            response.statusCode = 500;
            response.send({ status: response.statusCode, error: err });
        }
        if (!res) {
            console.log("Sorry no response");
            response.send({ status: 404, error: 'Sorry user is not available' });
        }
        else if (res) {
            console.log("we are checking password here");
            console.log(res.password, user.password);
            if (res.password != user.password) {
                response.send({ status: 404, error: 'Sorry password does not match' });
            }
            else {
                var token = jwt.sign({ res }, instance.get("jwtSecret"), { expiresIn: 1800 });
                tokenStore = token;
                console.log("hello we are in jwt");
                console.log("Data is jwt:", token);
                response.send({ authenticated: true, message: 'Login success', data: token });
            }
        }

    });
});



// 5b. define schema (recommended to have same
// attributes as per the collection)
var productsSchema = mongoose.Schema({
    ProductId: Number,
    ProductName: String,
    CategoryName: String,
    manufacturer: String,
    Price: Number
});

// load the validate module
// var authLogic = require("./validate");

// 5c. map the schema with the collection
//                                name        schema          collection
var productModel = mongoose.model("Products", productsSchema, "Products");

// 6. create rest api request handlers
//--->verify token and provide access
instance.get("/api/products", function (request, response) {
    //read request headers that contains bearer<space><token>
    var tokenReceived = request.headers.authorization.split(" ")[1];
    console.log("in initialjoin token:", tokenReceived);
    //verify the token
    jwt.verify(tokenReceived, instance.get("jwtSecret"), function (err, decode) {
        console.log("in verification phase");
        if (err) {
            console.log(err);
            response.send({ status: 404, error: 'Token verification failed..' });
        }
        else {
            console.log("in success of token verification");
            request.decode = decode;
            productModel.find().exec(function (err, res) {
                if (err) {
                    response.statusCode = 500;
                    response.send({ status: response.statusCode, error: err });
                }
                console.log("Res in api", res);
                response.send({ status: 200, data: res });
            });
        }
    })

});

instance.post("/api/products", function (request, response) {
    var tokenReceived = request.headers.authorization.split(" ")[1];
    //verify the token
    jwt.verify(tokenReceived, instance.get("jwtSecret"), function (err, decode) {
        console.log("in verification phase");
        if (err) {
            console.log(err);
            response.send({ status: 404, error: 'Token verification failed..' });
        }
        else {
            console.log("in success of token verification");
            request.decode = decode;
            // parsing posted data into JSON
            var prd = {
                ProductId: request.body.ProductId,
                ProductName: request.body.ProductName,
                CategoryName: request.body.CategoryName,
                Manufacturer: request.body.manufacturer,
                Price: request.body.Price
            };
            // pass the parsed object to "create()" method
            productModel.create(prd, function (err, res) {
                if (err) {
                    response.statusCode = 500;
                    response.send({ status: 202, message: 'Error in storing data' });
                }
                response.send({ status: 200, data: res });
            });
        }
    })



});

instance.get("/api/products/:id", function (request, response) {

    var tokenReceived = request.headers.authorization.split(" ")[1];
    //verify the token
    jwt.verify(tokenReceived, instance.get("jwtSecret"), function (err, decode) {
        console.log("in verification phase");
        if (err) {
            console.log(err);
            response.send({ status: 404, error: 'Token verification failed..' });
        }
        else {
            console.log("in success of token verification");
            request.decode = decode;
            // use "params" property of request object to read
            // url parameter
            var id = request.params.id;
            console.log("Received id =" + id);

            let id1 = {
                ProductId: id
            }
            productModel.findOne(id1, function (err, res) {
                if (err) {
                    response.send({ status: 202, message: 'Error in storing data' });
                }
                response.send({ status: 200, data: res });

            })
        }
    });
});

instance.put("/api/products/:id", function (request, response) {

    var tokenReceived = request.headers.authorization.split(" ")[1];
    //verify the token
    jwt.verify(tokenReceived, instance.get("jwtSecret"), function (err, decode) {
        console.log("in verification phase");
        if (err) {
            console.log(err);
            response.send({ status: 404, error: 'Token verification failed..' });
        }
        else {
            console.log("in success of token verification");
            request.decode = decode;
            var prd = {
                ProductId: request.body.ProductId,
                ProductName: request.body.ProductName,
                CategoryName: request.body.CategoryName,
                manufacturer: request.body.manufacturer,
                Price: request.body.Price
            };

            let condition = {
                ProductId: request.params.id
            }
            console.log("Data is", prd);
            console.log("Condition is", condition);
            productModel.updateOne(condition, prd, function (error1, res) {
                if (error1) {
                    console.log("Error is:", error1)
                    response.send(err);
                }
                console.log("result is ", res);
                response.send({ status: 200, data: res });
            })
        }
    });
});

instance.delete("/api/products/:id", function (request, response) {

    //read request headers that contains bearer<space><token>
    var tokenReceived = request.headers.authorization.split(" ")[1];
    //verify the token
    jwt.verify(tokenReceived, instance.get("jwtSecret"), function (err, decode) {
        console.log("in verification phase");
        if (err) {
            console.log(err);
            response.send({ status: 404, error: 'Token verification failed..' });
        }
        else {
            console.log("in success of token verification");
            request.decode = decode;
            let condition = {
                ProductId: request.params.id
            }
            // console.log("condition");
            productModel.deleteOne(condition, function (error1, res) {
                if (error1) {
                    console.log("Error is:", error1)
                    response.send(err);
                }
                console.log("result is", res);
                response.send({ status: 200, data: res });
            })
        }
    });
});

// 6. start listening
instance.listen(4070, function () {
    console.log("started listening on port 4070");
});

