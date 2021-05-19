const { prefix } = require('./../config/config.json')
const logging    = require('./logging')

module.exports = (client, collect) => {
  client.on('message', message => {
    const { content, author, guild } = message
    const alias = content.slice(prefix.length).trim().split(' ')
    const cmd   = `${prefix}${alias[0]}`

    if (guild && !author.bot && collect.has(alias[0]) && (content.startsWith(`${cmd} `) || content === cmd)) {
      logging(message, 'run command')
      collect.get(alias[0]).execute(message, alias)
    }
    
  })

}