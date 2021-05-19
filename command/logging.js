const winston = require('winston')

module.exports = (message, status) => {
  const { content, author } = message

  const logger  =  winston.createLogger({
    level       : 'info',
    format      : winston.format.json(),
    defaultMeta : { status: `${status}` },
    transports  : [
      new winston.transports.File({ filename: './storage/error.log', level: 'error' }),
      new winston.transports.File({ filename: './storage/combine.log' }),
    ],
  })

  logger.log({
    level   : 'info',
    message : `[${author}][${author.username}][message: ${content}]`
  })

}