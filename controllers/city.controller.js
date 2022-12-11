import { saveKeyValue } from '../services/storage.service.js';
import { printError, printSuccess } from '../services/log.service.js';

const saveCityController = async city => {
  if (!token.length) {
    return printError('City was not provided');
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('City has been saved');
  } catch (error) {
    printError(error.message);
  }
};

export { saveCityController };
