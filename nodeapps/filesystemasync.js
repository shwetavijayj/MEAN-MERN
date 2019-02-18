var fs = require("fs");

//1. write file using async call
// fs.writeFile('./firstFile.json', `{"name":"shweta"}`, function (err) {
//     if (err) {
//         console.log("Error", err.message);
//         return
//     }
//     console.log("File written successfully");
// });
// console.log("Done");

// fs.readFile('./firstFile.json', (err, data) => {
//     if (err) {
//         console.log("Error", err.message);
//         return;
//     }

//     console.log("data", JSON.stringify(data.toString()));
//     // console.log(data.name);
//     console.log(Object.keys(JSON.stringify(data.toString())));
// });
// console.log("DATA", data);

// Appending file 
// fs.appendFile('./myAsyncfile.txt', "this is appended text", (err) => {
//     if (err) {
//         console.log("Error in appending", err.message);
//         return;
//     }
//     console.log("File appended successfully");
// })


// Creating directory
// fs.mkdir('../newFolder1', (err) => {
//     if (err) {
//         console.log("Error in mkdir", err.message);
//         return;
//     }
//     console.log("Folder is created");

// })

// removing directory
// fs.rmdir('../newFolder1', (err) => {
//     if (err) {
//         console.log("Error in rmdir", err.message);
//         return;
//     }
//     console.log("Folder is removed");

// })


// fs.access('./myFile.txt', (err) => {
//     if (err) {
//         console.log("Error", err.message);
//         return;
//     }
// })
var jsonData = [{ person: "me", age: "30" }, { person: "you", age: "25" }];

