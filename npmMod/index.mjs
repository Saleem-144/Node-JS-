// const validator = require("validator");

// const chalk = require("chalk");
import chalk from "chalk";
import validator from "validator";
let res = validator.isEmail("saleemsohaib092@gmail.com")
console.log(res? chalk.green.inverse(res) : chalk.red.inverse(res));

// console.log(chalk.green.inverse("CORRECT ! HURRAY"))