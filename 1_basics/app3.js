const fs = require('fs');

fs.readFile("./resources/longText.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log("Reading the long file...");