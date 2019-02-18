//1.create a file and add data in it.

//2.load the fs module
var fs = require('fs');

//3.write file wih sync call 
fs.writeFileSync('./myFile.txt', "This is my text file");
console.log("File is written");

//4.Read file with sync call
let answer = fs.readFileSync('./myFile.txt');
console.log(answer.toString());