//import the readline module to be able to read from the standard input
const readline = require("readline");

//declare the interface to be used to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
});

//prompt the user to enter a name and print it
rl.question("Please enter your name: ", (name) => {
    console.log(name)
    //close the interface when done
    rl.close();
});

//listen to the interface close method call and log some info
rl.on("close", () => {
    console.log("interface closed");
    process.exit(0);
});