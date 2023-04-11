'use strict';

// const { createLogger, format, transports } = require('winston');
// require('winston-daily-rotate-file');
// const fs = require('fs');
// const path = require('path');
import pkg from 'app-root-path';

import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import dateFormat from 'dateformat';
import fs from 'fs';
import path from 'path';

const { require } = pkg;
const env = process.env.NODE_ENV || 'development';
const logDir = 'logs';

//console.log(require.main.filename)


// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: 'YYYY-MM-DD',
  format: format.json(),
    // format: format.combine(
        
    //     format.printf(
    //       info =>
    //         `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
    //     )
    //   )
    
});

//const filename = path.join(logDir, 'results.log');

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'production' ? 'info' : 'debug',
//format: format.json(),

    
  format: format.combine(

//    format.label({ label: path.basename(process.mainModule.filename) }),
//    format.label({ label: path.basename(require.main.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      
  ),
    

  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
//            info =>`${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
            info =>`time:${info.timestamp}, ${info.level} : ${info.message}`
        )
      )
    }),
      dailyRotateFileTransport
      /*
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          info =>
            `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
        )
      )
    }) */
      
  ]
});


export default logger