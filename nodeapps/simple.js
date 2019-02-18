console.log("Node.js");
var Employee = {
    EmpNo: 101,
    EmpName: "Abc"
}
console.log(Employee);
console.log(JSON.stringify(Employee));

function add(x, y) {
    var res = parseInt(x) + parseInt(y);
    console.log(res);
}
add(3, 5);