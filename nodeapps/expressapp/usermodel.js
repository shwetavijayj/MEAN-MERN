//1d. loading mongoose driver
var mongoose = require('mongoose');
//1e. set the globalpromise to manage all async call madeby application using mongoose driver
mongoose.Promise = global.Promise;

//5. Model-schema-mapping with collection on Mongo DB and esablishing connection with it.
mongoose.connect(
    "mongodb://localhost/ProductsAppDb",
    { useNewUrlParser: true }
);

var dbConnect = mongoose.connection;
if (!dbConnect) {
    console.log("Sorry connection failed with db");
    return;
}

var userSchema = mongoose.Schema({
    UserName: String,
    password: String
});


var userModel = mongoose.model("userModel", userSchema, "userModel");

module.exports = {
    validateData: function (prd, callback) {
        let i = 1;
        let adminFlag = false;
        let userFlag = false;

        userModel.find().exec(function (err, res) {
            if (err) {
                response.statusCode = 500;
                callback(err)
            }
            for (let record of res) {
                if (i === 1) {
                    if (record.UserName == prd.adminusername && record.password == prd.adminpassword) {
                        adminFlag = true;
                    }

                }
                if (record.UserName == prd.userId) {
                    userFlag = true;
                    console.log("match found");
                    break;
                }
                i++;
            }
            if (adminFlag === true && userFlag === false) {
                console.log("access ok");
                let newUserFlag = {
                    adminFlag1: 'true',
                    newUser: 'true'
                }
                callback(null, newUserFlag);
            } else if (adminFlag === true && userFlag === true) {
                let newUserFlag = {
                    adminFlag1: 'true',
                    newUser: 'false'
                }
                callback(null, newUserFlag);
            }
            else {
                let newUserFlag = {
                    adminFlag1: 'false',
                    newUser: 'false'
                }
                callback(null, newUserFlag);
            }
        });
    },
    addUser: function (prd, callback) {
        userModel.create(prd, function (error1, res) {
            if (error1) {
                callback(error1);
            }
            callback(null, res);
        });
    }
}