import chalk from 'chalk';
console.log(chalk.blue('Hello npm!'));
const userInfo = require("./userInformation");

console.log(`Hi, my name is ${userInfo.userName}, i'm ${userInfo.age} old and `);
userInfo.displayPassions();