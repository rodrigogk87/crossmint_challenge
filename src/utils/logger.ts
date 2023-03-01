import pino from "pino";

export const logger = pino({
    name: 'crossmint-challenge',
    level: 'debug'
});