import chalk from 'chalk';
console.log(chalk.blue('Now, just say Hello npm!'));

import * as monBeauModule from './userInformation.js'

// const userInfo = require("./userInformation");
// import packageMain from 'commonjs-package';

console.log(`Hi, my name is ${monBeauModule.userName}, i'm ${monBeauModule.age} old and `);
monBeauModule.displayPassions();

