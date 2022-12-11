import chalk from 'chalk';
import dedent from 'dedent-js';

const displayHelpController = () => {
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

export { displayHelpController };
