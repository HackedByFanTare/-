const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Role extends Command {
	static match(message) {
		return message.content.startsWith('d?role')
	}

	static action(message) {

		//Add role
		
		if(message.content.startsWith('d?role -dev')) {

			message.member.addRole(message.member.guild.roles.find('name', '𝑁𝑖𝑛𝑗𝑎 𝐵𝑜𝑡'))	
			message.channel.fetchMessages({limit: 1}).then(
				messages => message.channel.bulkDelete(messages))
				

		} else if(message.content.startsWith('d?role -youtubeur')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Youtubeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Youtubeur", "Role Youtubeur ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role -hacker')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Hacker'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Hacker", "Role Hacker ajouté avec succès")
			message.channel.send(embed)

		}  else if(message.content.startsWith('d?role -graphiste')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Graphiste'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Graphiste", "Role Graphiste ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role -gamer')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Gamer'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Gamer", "Role Gamer ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role -redacteur')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Rédacteur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Rédacteur", "Role Rédacteur ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role -frontend')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Front-end'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Front-end", "Role Front-end ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role -backend')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Back-end'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Back-end", "Role Back-end ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role -fullstack')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Full-stack'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Full-stack", "Role Full-stack ajouté avec succès")
			message.channel.send(embed)

		}


		//Remove role
		if (message.content.startsWith('d?role ---dev')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Développeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Développeur", "Role Développeur retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --youtubeur')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Youtubeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Youtubeur", "Role Youtubeur retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --hacker')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Hacker'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Hacker", "Role Hacker retiré avec succès")
			message.channel.send(embed)

		}  else if(message.content.startsWith('d?role --graphiste')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Graphiste'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Graphiste", "Role Graphiste retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --gamer')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Gamer'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Gamer", "Role Gamer retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --journaliste')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Journaliste'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Journaliste", "Role Journaliste retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --frontend')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Front-end'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Front-end", "Role Front-end retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --backend')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Back-end'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Back-end", "Role Back-end retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith('d?role --fullstack')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Full-stack'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Full-stack", "Role Full-stack retiré avec succès")
			message.channel.send(embed)

		} 


		}
	}
