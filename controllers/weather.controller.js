import chalk from 'chalk';
import dedent from 'dedent-js';
import { printError } from '../services/log.service.js';
import { getWeather, getWeatherIcon } from '../services/api.service.js';
import { getKeyValue, TOKEN_DICTIONARY } from '../services/storage.service.js';

const printWeather = (res, icon) => {
  console.log(
    dedent`
          ${chalk.bgBlue(' WEATHER ')} Weather in the city ${res.name}
          ${icon}  ${res.weather[0].description}
          Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
          Humidity: ${res.main.humidity}%
          Wind speed: ${res.wind.speed}
      `,
  );
};

const getWeatherController = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const result = await getWeather(city);

    printWeather(result, getWeatherIcon(result.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 401) {
      printError('API token is not valid');
    } else if (error?.response?.status === 404) {
      printError('City is not valid');
    } else {
      printError(e?.message);
    }
  }
};

export { getWeatherController };
