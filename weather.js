#!/usr/bin/env node
import { saveCityController } from './controllers/city.controller.js';
import { saveTokenController } from './controllers/token.controller.js';
import { displayHelpController } from './controllers/help.controller.js';
import { getWeatherController } from './controllers/weather.controller.js';
import { getArgs } from './helpers/args.js';

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return displayHelpController();
  }

  if (args.s) {
    return saveCityController(args.s);
  }

  if (args.t) {
    return saveTokenController(args.t);
  }

  return getWeatherController();
};

initCLI();
