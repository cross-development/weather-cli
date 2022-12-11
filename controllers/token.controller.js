import { printError, printSuccess } from '../services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from '../services/storage.service.js';

const saveTokenController = async token => {
  if (!token.length) {
    return printError('Token was not provided');
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token has been saved');
  } catch (error) {
    printError(error.message);
  }
};

export { saveTokenController };
