import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = error => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = message => {
  console.log(chalk.bgGreen(' SUCCESS ' + ' ' + message));
};

const printHelp = () => {
  console.log(
    dedent`
        ${chalk.bgCyan(' HELP ')}
        Without params - to display weather
        -s [CITY] - to set up a city
        -h - to display help
        -t - [API_KEY] - to save api token
    `,
  );
};

export { printError, printSuccess, printHelp };
