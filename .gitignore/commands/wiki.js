var Discord = require('discord.js');
const Command = require('./command')

module.exports = class Wiki extends Command {

	static match(message) {
		return message.content.startsWith('d?wiki')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.reply('Voici le résultat de votre recherche https://fr.wikipedia.org/wiki/' + args.join('_'))
	}
}