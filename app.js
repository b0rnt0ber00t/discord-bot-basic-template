// Local module
const cmdHandler = require('./command/handler')
const { token }  = require('./config/config.json')

// Core module
const fs = require('fs')

// Third Party module Discord
const discord = require('discord.js')
const client  = new discord.Client()
const collect = new discord.Collection()

// load files
const cmdFile = fs.readdirSync('./script').filter(file => file.endsWith('.js'))

// singgle file load
for (const file of cmdFile) {
  const cmd = require(`./script/${file}`)
  collect.set(cmd.name, cmd)
}

// bot on ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)

  // handling command
  cmdHandler(client, collect)

})

client.login(token)