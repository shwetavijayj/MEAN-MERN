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

var productsSchema = mongoose.Schema({
    ProductId: Number,
    ProductName: String,
    CategoryName: String,
    manufacturer: String,
    price: Number
});


var productModel = mongoose.model("Products", productsSchema, "Products");

module.exports = {
    getData: function (callback) {
        productModel.find().exec(function (err, res) {
            //6b. if error occured the respond error
            if (err) {
                callback(err);
            }
            callback(null, res);
        });
    },
    getDataOne: function (id, callback) {
        let id1 = {
            ProductId: id
        }
        productModel.findOne(id1, function (err, res) {
            if (err) {
                callback(error1);
            }
            console.log("result is", res);
            callback(null, res);
        })
    },
    addData: function (data, callback) {
        productModel.create(data, function (error1, res) {
            if (error1) {
                callback(error1);
            }
            console.log("result is", res);
            callback(null, res);
        });
    },
    updateData: function (data, callback) {
        let condition = {
            ProductId: data.ProductId
        }
        productModel.updateOne(condition, data, function (error1, res) {
            if (error1) {
                console.log("Error is:", error1)
                callback(error1);
            }
            console.log("result is ", res);
            callback(null, res);
        })

    },
    deleteData: function (data, callback) {
        console.log("in delete data", data)
        data1 = {
            ProductId: data
        }
        productModel.deleteOne(data1, function (error1, res) {
            if (error1) {
                console.log("Error is:", error1)
                callback(error1);
            }
            console.log("result is", res);
            callback(null, res);
        })

    }
};