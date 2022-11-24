import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";

// ---------------------------example--------------------------------
let answer = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"
}]);

console.log("In " + (60 - answer.age) + " years you will be 60 years old.");
// ---------------------------example--------------------------------