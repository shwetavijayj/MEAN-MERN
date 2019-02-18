var util = require('./utilitymodule');

var str = "Hello this is my string";

console.log(`Case with upper for ${str} is    ${util.caseUtility(str, "U")}`);
console.log(`Case with lower for ${str} is     ${util.caseUtility(str, "L")}`);
console.log(`Case with reverse for ==${str}== is   ${util.reverse(str)}`);