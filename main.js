#! /urs/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!!");
    let ask = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an operation",
            type: "list",
            choices: ["withdraw money", "check your balance", "fast cash"],
        },
    ]);
    if (ask.operation === "check your balance") {
        console.log(`Your Balance is ${myBalance}`);
    }
    else if (ask.operation === "withdraw money") {
        let withdraw = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to withdraw:",
            },
        ]);
        if (myBalance >= withdraw.amount) {
            myBalance = myBalance - withdraw.amount;
            console.log(`Your updated balance is: ${myBalance}`);
        }
        else {
            console.log(`Insufficient Balance, Your Balance is: ${myBalance}`);
        }
    }
    else if (ask.operation === "fast cash") {
        let fastCashOptions = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Choose one:",
                choices: [1000, 2000, 5000, 10000, 15000, 20000],
            },
        ]);
        if (myBalance >= fastCashOptions.option) {
            myBalance = myBalance - fastCashOptions.option;
            console.log(`Your updated balance is: ${myBalance}`);
        }
        else {
            console.log(`Insufficient Balance, Your Balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
