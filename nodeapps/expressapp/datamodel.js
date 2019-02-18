var Products = [
    { id: 101, name: "p1" },
    { id: 102, name: "p2" }
];
module.exports = {
    getData: function () {
        return Products;
    },
    addData: function (prd) {
        Products.push(prd);
        return Products;
    },
    updateData: function (prd) {

        for (const val of Products) {
            if (val.id == prd.id) {
                val.name = prd.name;
            }
        }
        return Products;
    },
    deleteData: function (id) {
        for (const val of Products) {
            if (val.id == id) {
                Products.pop(val);
            }
        }
        return Products;
    }
};