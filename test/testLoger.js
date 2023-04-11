import logger from '../utils/Logger.js';
import dateFormat from 'dateformat';
import { exit } from 'process';
//const logger = require('../utils/Logger')

console.log(dateFormat((new Date()),'yyyy-mm-dd HH-mm-ss'))
//exit

logger.error('error message');
logger.warn('warn message');
logger.info('info message');
logger.verbose('verbose message');
logger.debug('debug message');
logger.silly('silly message');