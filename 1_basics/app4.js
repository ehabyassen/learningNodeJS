const fs = require("fs");

fs.writeFile("./resources/testOutput.txt", "This is a test output to a text file.", () => {
    console.log("Content written to the file.");
});

console.log("Writing content to the output file.");