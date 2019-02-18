function operations(...values) {
    let sum = 0;
    if (values.length > 0) {
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
    }
    return sum;
}

console.log(operations(3, 4));
console.log(operations(15, 30, 67));
console.log(operations(34, 54, 12, 87))