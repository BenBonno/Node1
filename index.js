// import chalk from 'chalk';
// console.log(chalk.blue('Now, just say Hello npm!'));

const userInfo = require("./userInformation");
// import packageMain from 'commonjs-package';

console.log(`Hi, my name is ${userInfo.userName}, i'm ${userInfo.age} old and `);
userInfo.displayPassions();

