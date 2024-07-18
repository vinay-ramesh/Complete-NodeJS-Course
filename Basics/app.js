const readline = require("readline");
// const fs = require("fs")

// #4 Taking Input/Output from users using readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name : ", (name) => {
  console.log(`My name is ${name}`);
  rl.close(); //helps to close the interface
});

// .on --> is the eventListner for close event
rl.on("close", () => {
  console.log("Interface closed");
  process.exit(0);
});

// const textIn = fs.readFileSync("./Files/input.txt", "utf-8")
// console.log(textIn)

// const content = `Content from input file is: ${textIn} \nCreated at ${new Date()}`
// fs.writeFileSync("./Files/output.txt", content)
