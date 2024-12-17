import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;

// custorm format for console logging with colors
const consoleLogFormat = combine(
    format.colorize(),
    format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level}: ${message}`
    })
);

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(),
        colorize()
    ),
    transports: [
        new transports.Console({
            format: consoleLogFormat
        }),
        new transports.File({ filename: 'app.log' })
    ]
});

export default logger;