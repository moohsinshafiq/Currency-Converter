import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 10,
        "GBP": 5,
        "PKR": 1
    },
    "GBP": {
        "USD": 50,
        "PKR": 150,
        "GBP": 1
    },
    "USD": {
        "PKR": 100,
        "GBP": 50,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
