const example = require('./../execute/example')

module.exports = {
  name: 'example',
	description: 'Replay Message',
	execute(message, alias) { example(message, alias) },
}