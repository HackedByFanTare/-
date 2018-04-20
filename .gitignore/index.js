var Discord = require("discord.js");
client = new Discord.Client();
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Youtube = require('./commands/youtube')
const Wiki = require('./commands/wiki')
const Docs = require('./commands/docs')
const fs = require('fs');
const config = require("./config.json");
const serverembed = new Discord.RichEmbed()
const bot = new Discord.Client({
  autoReconnect: true
});
const path = require('path')
var commands = new Object();
var prefix = ("d?");
var i = 0;
bot.on('ready', () => {
    console.log("");
    console.log("Connecté en tant que " + bot.user.username + " | Prefix : " + prefix + " | Nombre de Serveurs "+ bot.guilds.size +" | Nombres de channels "+ bot.channels.size +" | Utilisateur totaux "+ bot.users.size +" | Nombre d'emojis totaux "+ bot.emojis.size +'');
});



bot.on('ready',() => {
  
  //invit link 
  bot.guilds.forEach(guild => { 
    var invite = bot.guilds.find("id", guild.id)
    console.log(`Connecté sur : ${guild.name}`);
  })
});
let cache = {
  active_warning: false,
  user_cache: {}
}
let userCache = cache.user_cache
// ---------------------------------------------------
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " jour" : " jours");
  }

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

bot.on('message', msg => {

  if (msg.content === ':arrows_counterclockwise:  Redémarrage en cours...'){
  msg.delete();
    msg.channel.send(":ballot_box_with_check:  Redémarrage terminé !").catch(console.error);
}
if (msg.content === ':ballot_box_with_check:  Redémarrage terminé !'){
  msg.delete()
}
  if (msg.content === 'd?help'){


        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
          
          
              .setTitle("𝔇𝔢𝔞𝔱𝔥 𝔑𝔬𝔱𝔢 - Panel d'aide et d'informations")
              .setThumbnail(sicon)
              .addField("INFORMATION ¬","Un bot Discord de modération 100% français, ainsi qu'un Anti-Spam Integré !", true)
              .addField(":black_small_square: d?bvn","Souhaitez la bienvenue !", true)
              .addField(":black_small_square: d?blague","Tire au hasard une blague parmi plusieurs blagues", true)
              .addField(":black_small_square: d?serverinfo","Affiche les Information du Serveur", true)
              .addField(":black_small_square: d?stats","Affiche les statistiques du bot totaux.", true)
              .addField(":black_small_square: d?doc","Commande qui permet d'obtenir le lien de docs de languages de programmation", true)
              .addField(":black_small_square: d?game","Commence le jeu du vrai ou faux.", true)
              .addField(":black_small_square: d?whois"," Affiche les informations d'un membre.", true)
              .addField(":black_small_square: d?udapte","Les Dernieres MAJ du DeathNote", true)
              .addField(":black_small_square: d?shop","Cette commande montre la vente du développeur.", true)
              .addField(":black_small_square: d?say","Le Death Note répete vos phrases", true)
                            .addField(":black_small_square: d?reload","redémarre le bot", true)
              .addField(":black_small_square: d?uptime","Affiche les statistiques du bot totaux.", true)
              .addField(":black_small_square: d?ping","Calcule le ping entre l'envoi d'un message et sa provenance, ce qui donne une belle latence.", true)
              .addField(":black_small_square: d?invite","Affiche le lien d'invitation du DeathNote directement.", true)
              .addField(":black_small_square: d?quit","Le Death Note quitte le serveur.", true)
              .addField(":black_small_square: d?help","Affiche le panel d'aide en message privé", true)
              .addField(":black_small_square: d?hhelp","Affiche le panel d'aide directement sur le serveur", true)
              .setColor("#320242")
              .setFooter("Développé par DumpMan")
              msg.author.sendEmbed(help_embed).catch(console.error);
      }

if (msg.content === ":black_nib: Un message contenant l'invitation du bot vient d'etre envoyé dans votre message privé !"){
  msg.delete()

}
				      if (msg.content === 'd?update'){
                  msg.delete();

				var embed = new Discord.RichEmbed()
         .setAuthor(bot.user.username, bot.user.avatarURL)
				  .setColor("#320242")
					.setFooter("Demandé par "+ msg.author.username, msg.author.avatarURL)
					.addField("Récente Mise à Jour ¬","Aucune mise à jour n'a été fait pour l'instant !");
			msg.channel.send(embed).catch(console.error)

            }
 
            if (msg.content === 'd?shop'){
        msg.delete();
          msg.channel.send(":shopping_cart: Un message contenant le shop du développeur vous a été envoyé !")
      }
      if (msg.content === ':shopping_cart: Un message contenant le shop du développeur vous a été envoyé !'){
        msg.delete().catch(console.error);
      }

});           

    bot.on('message', msg => {

      if (msg.content === ':round_pushpin: Un message contenant les commandes du bot vous a été envoyé !'){
        msg.delete()
      }




    // -- Met en cache les membres s'ils n'existent pas encore dans le cache --
    if (!(msg.author.id in userCache)) {
        userCache[msg.author.id] = {
            username: msg.author.username,
            identifier: msg.author.toString(),
            last_msg_timestamp: 0
        }
    }
  // ---- Anti spam ----
    if (msg.createdTimestamp - userCache[msg.author.id].last_msg_timestamp <= 200) {
        if(msg.channel.recipient) return
        if (msg.member.hasPermission('MANAGE_MESSAGES')) return
        if (!cache.active_warning) {
            console.info("Rôle Muté" +  " de "  + msg.author.username + " #"+ msg.author.discriminator + " (" + msg.author + ")")
            hook.send(":anger:  **Rôle Muté** - ``" + msg.author.username + " #"+ msg.author.discriminator + "``");
            var RoleMuté = msg.guild.roles.find("name","Muté")
            cache.active_warning = msg.member.addRole(RoleMuté)
              .catch(e  => console.error('Erreur des permissions pour donner le rôle Muté.') + console.error(e))
              .then((msg) => {
                  setTimeout(() => {
                      cache.active_warning = false
                  }, 2000)
              });
        }
        return
    }
      userCache[msg.author.id].last_msg_timestamp = msg.createdTimestamp

  });


  

bot.on('message', function(message) {

    Blague.parse(message)

  Role.parse(message)
  
  Youtube.parse(message)

  Google.parse(message)

	Docs.parse(message)

  if(message.content.startsWith('d?game')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Vrai :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Faux :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)
    }
    
    }

});

bot.on("ready", () => {

  bot.user.setGame(`d?help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`, 'https://www.twitch.tv/DeathNote');
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Nouveau serveur rejoins: ${guild.name} (id: ${guild.id}). Dans ce serveur il y a ${guild.memberCount} membres! [${client.guilds.size}, ${client.users.size}]`);
  bot.user.setGame(`d?help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`, 'https://www.twitch.tv/DeathNote');
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Un Serveur à fait quitter le DeathNote: ${guild.name} (id: ${guild.id})[${client.guilds.size}, ${client.users.size}]`);
  bot.user.setGame(`d?help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`, 'https://www.twitch.tv/DeathNote');
});

  bot.on('message', message => {

  	/* DÉTECTION SI LE MESSAGE EST UNE COMMANDE */
	if (message.content.startsWith(prefix)) {
		if(message.author.bot) return; // Empêcher les bots de réaliser des commandes
		try {
			var splited_message = message.content.slice(prefix.length).split(" ");
			var command = splited_message[0];
			var parameters = splited_message.slice(1)
		} catch (error) {
			return
		};
        
        /* LISTE DES COMMANDES */
        try {
			
			if (["stats"].includes(command)) {
               message.delete();

				var embed = new Discord.RichEmbed()

            .setTitle('Stats - 𝔇𝔢𝔞𝔱𝔥 𝔑𝔬𝔱𝔢')
            .setDescription("Voici les statistiques à propos du Shard `#0` sur 0 ."+ "\n" + "Le bot est divisé en plusieurs morceaux nommés shard afin qu'il soit plus optimisé et qu'il soit plus agréable à l'utilisation. Vous ne verrez donc plus les stats dans sa globalité.") 
            .setThumbnail(bot.user.displayAvatarURL)
          	.addField("Développeur ¬" ,"𝕯𝖚𝖒𝖕𝕸𝖆𝖓#1748")
						.addField("Language - librairie ¬" , "NodeJS - discord.js")
						.addField(	"Serveurs ¬ " ,  bot.guilds.size)
            .addField(	"Utilisateurs ¬" , bot.users.size)
            .addField(	"Emojis totaux ¬" , bot.emojis.size)
            .addField(	"Channels totaux ¬" , bot.channels.size)
            .addField(	"Usage mémoire ¬" , + Math.floor(bot.ping) + " Mo ")
            .addField(	"Nombre de Shards ¬" , "1")
            .addField(	"Version Discord.js ¬" , "11.3.2")
            .addField(	"Version du Death Note ¬" , "1.5.0")
            .addField(	"Uptime ¬" , (Math.round(bot.uptime / (1000 * 60 * 60))) + 'h  ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + 'min ' + (Math.round(bot.uptime / 1000) % 60) + 's')
					.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
            .setColor("#320242");

				message.channel.send("", {embed}).catch(console.error);
			}
			
			
			else if (["say"].includes(command)) {
				var toRepeat = parameters.join(" ");
				if (toRepeat === "") {
					return message.channel.send("❌   **Utilisation:** "+prefix+"say <message>")
				};
				toRepeat = toRepeat	.replace("@everyone", "@𝅳everyone")
									.replace("@here", "@𝅳here");
            
				message.channel.send(toRepeat).catch(console.error);
				message.delete().catch() // Capture l'erreur si jamais une erreur se présente. (aka: manque de permissions)
			}
			
			else if (["whois"].includes(command)) {
                message.delete();
				var member = message.author;
				if (parameters.length > 0) { // Recherche d'utilisateurs mentionnés
					let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
					if (member_got != undefined) {
						var member = member_got.user
					}
				};
				var champ_additions = [];
				var champ_permissions = [];
				var date = member.createdAt;
				var embed = new Discord.RichEmbed()
 
					.setColor("#320242")
					.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
					.setThumbnail(member.displayAvatarURL)
					.setAuthor(member.username, member.avatarURL)				
					.addField("Pseudo ¬", member.username, true)
					.addField("Création du compte ¬", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
          .addField("Identification ¬", member.id,true)
          .addField("Discriminateur ¬", member.discriminator,true);

		
				if (member.bot) {
					champ_additions[champ_additions.length] = "Robot"
				} else if (member.id === "428600229533843458" || member.id === "215634007306534912") {
					champ_additions[champ_additions.length] = "<:developper:416265704996601876> Apprentisage programation\n Permissions : Administrateur"
				};
				
				if (member.bot) {
					champ_additions[champ_additions.length] = " "				} else if (member.id === "370612786906267660" || member.id === "215634007306534912") {
					champ_additions[champ_additions.length] = ":bank: Rôle Développeur • Créateur\n :trident: Permissions : Administrateur"
				};
				
				if (champ_additions.length > 0) {
					embed.addField("Suplémentaire :", champ_additions.join("\n")) 
				};
				message.channel.send("", {embed}).catch(console.error);
			}
	else if (["hhelp"].includes(command)) {


        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
          
          
              .setTitle("𝔇𝔢𝔞𝔱𝔥 𝔑𝔬𝔱𝔢 - Panel d'aide et d'informations")
              .setThumbnail(sicon)
              .addField("INFORMATION ¬","Un bot Discord de modération 100% français, ainsi qu'un Anti-Spam Integré !", true)
              .addField(":black_small_square: d?bvn","Souhaitez la bienvenue !", true)
              .addField(":black_small_square: d?blague","Tire au hasard une blague parmi plusieurs blagues", true)
              .addField(":black_small_square: d?serverinfo","Affiche les Information du Serveur", true)
              .addField(":black_small_square: d?stats","Affiche les statistiques du bot totaux.", true)
              .addField(":black_small_square: d?doc","Commande qui permet d'obtenir le lien de docs de languages de programmation", true)
              .addField(":black_small_square: d?game","Commence le jeu du vrai ou faux.", true)
              .addField(":black_small_square: d?whois"," Affiche les informations d'un membre.", true)
              .addField(":black_small_square: d?udapte","Les Dernieres MAJ du DeathNote", true)
              .addField(":black_small_square: d?reload","Redémarre le bot", true)
              .addField(":black_small_square: d?shop","Cette commande montre la vente du développeur.", true)
              .addField(":black_small_square: d?ping","Calcule le ping entre l'envoi d'un message et sa provenance, ce qui donne une belle latence.", true)
              .addField(":black_small_square: d?say","Le Death Note répete vos phrases", true)
              .addField(":black_small_square: d?invite","Affiche le lien d'invitation du DeathNote directement.", true)
              .addField(":black_small_square: d?quit","Le Death Note quitte le serveur.", true)
              .addField(":black_small_square: d?help","Affiche le panel d'aide en message privé", true)
              .addField(":black_small_square: d?hhelp","Affiche le panel d'aide directement sur le serveur", true)
              .setColor("#320242")
              .setFooter("Développé par DumpMan")
             message.channel.sendEmbed(help_embed).catch(console.error);
      }

	else if (["help"].includes(command)) {
        message.delete();
          message.channel.send(":round_pushpin: Un message contenant les commandes du bot vous a été envoyé !").catch(console.error);
      }
      	else if (["ping"].includes(command)) {
        message.delete();
  

          var help_embed = new Discord.RichEmbed()
          
          

              .setAuthor(bot.user.username, bot.user.avatarURL)	
              .addField("Pong !",`La latence est de ${Math.round(bot.ping)} ms`, true)
              .setColor("#320242")
					.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }

  


 
	else if (["shop"].includes(command)) {

    
           let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()

    
              .setTitle("Achat / Vente")
              .setThumbnail(sicon)
              .addField("INFORMATION ¬","Pour toutes achat interessé, Veuillez me repondre en message privé"   + "\n" + "***?€ = Dépend des options pris par l'acheteur***" + "\n" + " `Garantie 3 mois = 2€`", true)
              .addField("VENTES ¬",":shopping_cart: ",true)
              .addField(":black_small_square: Netlfix Standard","3€ | Le forfait Premium vous permet de regarder simultanément sur quatre appareils les séries TV et les films Netflix en haute définition (HD) et ultra-haute définition (UHD), si disponible. Il vous permet également de télécharger des titres sur deux téléphones ou deux tablettes au maximum.", true)
              .addField(":black_small_square: Netlfix Premium","5€ | Le forfait Premium vous permet de regarder simultanément sur quatre appareils les séries TV et les films Netflix en haute définition (HD) et ultra-haute définition (UHD), si disponible. Il vous permet également de télécharger des titres sur quatre téléphones ou quatre tablettes au maximum.", true)
              .addField(":black_small_square: Spotify Premium","1€ | La meilleure façon de profiter de Spotify est de souscrire en Premium.", true)
              .addField(":black_small_square: Deezer Premium","2€ | La musique que vous voulez partout, tout le temps.", true)
              .addField(":black_small_square: WWE","2€ | Regarde ton catch préféré!", true)
              .addField(":black_small_square: SFR ","?€ | Pack SFR + options", true)
              .addField(":black_small_square: OCS ","?€ | Pack Ocs + options", true)
              .addField(":black_small_square: Canal +","?€ | Pack Canal + options", true)
              .addField(":black_small_square: Ubisoft","?€ | Pour l'achat d'un compte Envoyez-moi un message avec les jeux que vous souhaiter avoir, je vous répondrai si j'ai le compte qu'il vous faut ou de reformuler une autre demande.", true)
              .addField(":black_small_square: Origin","?€ | Pour l'achat d'un compte Envoyez-moi un message avec les jeux que vous souhaiter avoir, je vous répondrai si j'ai le compte qu'il vous faut ou de reformuler une autre demande.", true)
              .addField(":black_small_square: MyCanal","10€ | Ce Compte contient le pack: Canal+ Essentiel/Les Chaines Sport - Bein Sport", true)
              .addField(":black_small_square: ZenMateVPN","3€ | C’est un VPN facile à utiliser, que je conseille à toutes les personnes qui ne veulent pas se prendre la tête. Il est de bonne facture, protégera votre connexion et vous permettra de regarder des vidéos en streaming (Netflix US, TV française hors Canal+). Le tout sans aucun paramétrage.", true)
              .addField(":black_small_square: VyprVPN","4€ | VyprVPN est le VPN le plus puissant au monde, avec des fonctionnalitéss exclusives, une technologie propriétaire et des milliers d'utilisateurs.", true)
              .addField(":black_small_square: NordVPN","3€ | NordVPN est le service VPN parfait pour tout internaute désireux de devenir anonyme de façon certaine et complète. Les mécanismes de chiffrement et d’anonymisation renforcés couplés à une politique no log rendent impossible qui que ce soit de découvrir une identité réelle derrière un serveur NordVPN. Même si une requête judiciaire venait à être traitée par NordVPN, plusieurs utilisateurs utilisent les mêmes adresses IP et aucune information d’identification ne peut définir qui utilisait quoi et quand car il n’y en a pas.", true)
              .addField(":black_small_square: HideMyHassVPN","3€ | Le fournisseur de VPN HideMyAss a été élu meilleur VPN de l'année en 2012 et 2013. Il est sans doute l'un des VPN les plus côtés sur le Net actuellement. Supportant les protocoles PPTP, L2TP et OpenVPN, il fonctionne avec la plupart des systèmes d'exploitation et des périphériques.", true)
              .addField(":black_small_square: Express Vpn","2€ | ExpressVPN vous donne le choix entre 148 villes dans 94 pays. Grâce à un débit illimité et des changements de serveurs à l'infini, vous pouvez vous connecter où que vous soyez dans le monde.", true)
              .addField(":black_small_square: Minecraft Premium","2€ | Minecraft est un jeu qui consiste à placer des blocs et à partir à l'aventure. Achetez-le ici,pour etre premium facilement et pouvoir y jouer et les incroyables créations de la communauté!", true)
              .addField(":black_small_square: FreeWifi","1€ | Profitez d'internet illimité avec FreeWifi sur smartphone ou PC !", true)
              .addField(":black_small_square: Anime Digital Network","3€ | Anime Digital Network c'est le meilleur de l'animé en direct du Japon ! Découvrez en streaming tout Naruto Shippuden, Fairy Tail, Hunter x Hunter, Blue Exorcist, Code Geass, Vampire Knight, etc.", true)
              .addField(":black_small_square: Icoyote","5€ | Profitez d'un Compte Coyote pour smartphone ou Iphone", true)
              .addField(":black_small_square: P*rnHub Premium","3€ | Avec P*rnHub Premium, rentrer dans la catégorique Special que seuls les Premium pourront y accéder.", true)
              .addField(":black_small_square: Brazzers Premium","4€ | Avec Brazzers Premium, rentrer dans la catégorique Special que seuls les Premium pourront y accéder mais en version US.", true)
              .addField(":black_small_square: Crunchyroll Premium","2€ | Visionnez toutes les séries sans pubs en HD sur tous les matériels disponibles Accédez à tous les animés et les mangas", true)
              .setColor("#320242")
              .setFooter("Vendeur : 𝕯𝖚𝖒𝖕𝕸𝖆𝖓#1748")
              message.author.sendEmbed(help_embed).catch(console.error)
          
      }
          

	else if (["shop"].includes(command)) {
        message.delete();
          message.channel.send(":shopping_cart: Un message contenant le shop du développeur vous a été envoyé !")
      }

	else if (["bvn"].includes(command)) {
        message.delete();
        message.channel.send({
          embed: {
            color: 595959,
            author: {
              name: (message.author.username + ' vous souhaite la bienvenue ! 🎉'),
              icon_url: message.author.avatarURL,
              
            },
           
    
            footer: {

              text: "👉 Astuce : Vous aussi souhaitez la bienvenue avec d?bvn"
             
            }
              }
        });
       
    }

	else if (["invite"].includes(command)) {

    const sicon = bot.user.displayAvatarURL
          var help_embed = new Discord.RichEmbed()

    .setTitle(">>> Ajouter le DeathNote <<<")
    .addField("`En réalité je te soupçonne... d'être Kira lui-même. Libre à toi maintenant de me demander ce que tu veux.`",":skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: :skull_crossbones: ")
    .setColor("#320242")
    .setImage('https://media0.giphy.com/media/o2KLYPem407CM/giphy.gif')
    .setThumbnail(sicon)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=423175159785193492&permissions=8&scope=bot')
    .setFooter("Contacter mon créateur pour savoir des informations precises sur moi",bot.user.displayAvatarURL);

  message.author.sendEmbed(help_embed).catch(console.error)

}

	else if (["serverlist"].includes(command)) {
        message.delete();
        if(message.author.id !== "427874353590304789","") {
					return message.channel.send("❌  Cette commande est interdit pour le bien du développeur")
				};
  
  bot.guilds.forEach(guild => { 
    var invite = bot.guilds.find("id", guild.id)
    message.author.send(`Connecté sur :${guild.name} | ${guild.memberCount} membres`).catch(console.error);
  }).catch(console.error)
  }
	else if (["invite"].includes(command)) {
  message.delete();
    message.channel.send(":black_nib: Un message contenant l'invitation du bot vient d'etre envoyé dans votre message privé !").catch(console.error);
}


      else if (["serverinfo"].includes(command)) {
        message.delete();  

        let sicon = message.guild.iconURL;
      	var date = message.guild.createdAt;
        let serverembed = new Discord.RichEmbed()
					
        .setTitle("𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗱𝘂 𝘀𝗲𝗿𝘃𝗲𝘂𝗿")
        .setColor("#320242")
        .setThumbnail(sicon)
        .addField("`Nom du serveur ¬`", message.guild.name, true)
        .addField("`ID du Serveur ¬`", message.guild.id, true)
        .addField("`Createur du Serveur ¬`", message.guild.owner, true)
        .addField("`Serveur créé le ¬`", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
        .addField("`Utilisateurs ¬`", message.guild.memberCount, true)
        .addField("`Région ¬`", "Europe de l'Ouest", true)
        .addField("`Level de vérification ¬`", message.guild.verificationLevel, true)
					.setFooter("Demandé par "+ message.author.username, message.author.avatarURL)
        
        message.channel.send(serverembed).catch(console.error);
      }
              	else if (["reload"].includes(command)) {
              message.delete();
				 if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("❌   Vous n'avez pas la permission d'utiliser cette commande.")
        message.channel.send(":arrows_counterclockwise:  Redémarrage en cours...");
			}



		else if (["quit"].includes(command)) {
              message.delete();
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("❌  Vous n'avez pas la permission d'utiliser cette commande.")
      let args = message.content.split(' ')
      args.shift()
      message.channel.send("`C’était un plaisir d'être dans votre serveur`")
      message.edit("ツ")           
      message.guild.leave().catch(console.error);
    
    } 
			
			else {
				console.log("[LOG] ["+message.author.tag+"] La commande "+command+" a été éxécutée.")
			}
        } 	

      	catch (error) {
          console.log("[ERREUR] ["+message.author.tag+"] "+message.content)
          console.log(error) // Capturer les erreurs pour garder le bot en ligne 
        }
        
  }
	
});

bot.login(config.token);
