var Discord = require("discord.js");
bot = new Discord.Client();
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Youtube = require('./commands/youtube')
const Role = require('./commands/role')
const Wiki = require('./commands/wiki')
const Docs = require('./commands/docs')
const fs = require('fs');
var perms = ["KICK_MEMBERS","BAN_MEMBERS","ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_CHANNELS","MANAGE_GUILD","ADD_REACTIONS","VIEW_AUDIT_LOG","VIEW_CHANNEL","READ_MESSAGES","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_ROLES_OR_PERMISSIONS","MANAGE_WEBHOOKS","MANAGE_EMOJIS"];
var i = 0;
bot.on('ready',() => {
  bot.user.setGame('*!Help* pour afficher les commandes', 'https://www.twitch.tv/raid')
  //invit link 
  bot.guilds.forEach(guild => { 
    var invite = bot.guilds.find("id", guild.id)
    console.log(`Connecté sur : ${guild.name}`);
  })
});

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}


bot.on('message', msg => {
if (msg.content === "!Lien_Secret") {
  msg.delete();
    msg.author.sendMessage( "@" + msg.author.tag + 
      " Lien: https://discordapp.com/api/oauth2/authorize?client_id=423175159785193492&permissions=0&scope=bot"
    );

  }  

  if (msg.content === "d?avatar") {
    msg.delete();
    msg.channel.send({
      embed: {
        color: 2550255,
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        title: msg.author.id,
        url: msg.author.avatarURL,
        image: {
          url: msg.author.avatarURL
        },
  
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "Voici ton Image de Profil",
         
        }
          }
    });

}

});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur Notre Serveur_' +  member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

bot.on('message', msg => {
   

      if(msg.content === "d?serverinfo"){
        msg.delete();  

        let sicon = msg.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Informations sur le serveur")
        .setColor("#183cdd")
        .setThumbnail(sicon)
        .addField("Nom du serveur", msg.guild.name)
        .addField("Créé le", msg.guild.createdAt)
        .addField("Vous avez rejoint", msg.member.joinedAt)
        .addField("Total des membres", msg.guild.memberCount);
        
    
        return msg.channel.send(serverembed);
      }
  

});    
         

bot.on('message', msg => {

if (msg.content === "d?clear") {
  msg.channel.fetchMessages(
      {limit: 100}).then(
          messages => msg.channel.bulkDelete(messages)
      ); //deletes messages to cover up you did it
}

    if (msg.content === '!Quit') {  
      msg.delete();                  
      msg.guild.leave();

    }

    if(msg.content === "!Del"){
      msg.delete();

      let sicon = msg.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Restriction Du Serveur", msg.guild.name)
      .setColor("#183cdd")
      .setThumbnail(sicon)
      .addField("Nom du serveur", msg.guild.name)
      .addField("Créé le", msg.guild.createdAt)
      .addField("Total des membres", msg.guild.memberCount)
      .addField("ID du Serveur", msg.guild.id)
      .setFooter("Serveur Supprimé Dans 10 Minutes et 53s / Cause : Ne Respecte Pas le TOS");
  
      return msg.channel.send(serverembed);
    }

    if (msg.content === "!4292") {
      msg.delete();
      msg.channel.send({
        embed: {
          color: 2550255,
          author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
          },
          title: "**𝗦𝘁𝗮𝗳𝗳 #4292**",
          url: msg.author.avatarURL,
          image: {
            url: msg.author.avatarURL
          },
  
          timestamp: new Date(),
          footer: {
            icon_url: msg.author.avatarURL,
            text: "𝑴𝒐𝒅𝒆𝒓𝒂𝒕𝒆𝒖𝒓 𝑫𝒊𝒔𝒄𝒐𝒓𝒅"
           
          }
            }
      });
  
  }
  


  });

//Message
bot.on('message', function(message) {

    Blague.parse(message)

  Role.parse(message)
  
  Youtube.parse(message)

  Google.parse(message)

	Docs.parse(message)

	if(message.content === '!Help') {


		var embed = new Discord.RichEmbed()
		.setColor("#226666")
        .addField("Toutes les commandes du Death Note", "d?wiki + Recherche\nJe vous donne les informations de Wikipédia\n\nd?youtube + ID de la vidéo\nJe mets votre vidéo sur le serveur\n\nd?google + Nom de recherche (Faire une recherche google et obtenir le lien de la recherche)\nJe vous donne le lien de votre recherche Google\n\nd?serverinfo\nAffiche les Information du Serveur\n\nd?blague\nJ'affiche une blague\n\nd?game\nCommande pour lancer le jeu vrai ou faux\n\nd?doc\nCommande qui permet d'obtenir le lien de docs de languages de programmation (ou pas\n\nd?avatar\nCommande qui Affiche votre Profil.\n\nd?clear\nSupprime 100 Messages dans le Salon.")
		message.channel.send(embed).catch(console.error)

	} else if(message.content.startsWith('d?game')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Vrai :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Faux :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)
    }
    
    }

});


bot.login('NDIzMTc1MTU5Nzg1MTkzNDky.DYmgGA.cmpvS6dponXfdum002wGdIiBHxA');
