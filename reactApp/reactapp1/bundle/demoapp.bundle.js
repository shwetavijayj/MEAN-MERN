"use strict";

function operations() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    if (values.length > 0) {
        for (var i = 0; i < values.length; i++) {
            sum += values[i];
        }
    }
    return sum;
}

console.log(operations(3, 4));
console.log(operations(15, 30, 67));
console.log(operations(34, 54, 12, 87));
