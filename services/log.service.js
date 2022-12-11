import chalk from 'chalk';

const printError = error => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = message => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printWarn = message => {
  console.log(chalk.bgYellow(' WARNING ') + ' ' + message);
};

const printInfo = message => {
  console.log(chalk.bgGray(' INFO ') + ' ' + message);
};

export { printError, printSuccess, printWarn, printInfo };
