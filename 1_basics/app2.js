//import a module to read and write to file system
const fs = require('fs');

const content = fs.readFileSync("./resources/input.txt", "utf-8");

console.log(content);

fs.writeFileSync("./resources/output.txt", `This is a test output text at ${new Date()}`);