var Discord = require("discord.js");
bot = new Discord.Client();
client = new Discord.Client();
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Youtube = require('./commands/youtube')
const Role = require('./commands/role')
const Wiki = require('./commands/wiki')
const Docs = require('./commands/docs')
const fs = require('fs');
const config = require("./config.json");
const serverembed = new Discord.RichEmbed()
var i = 0;
bot.on('ready',() => {
  
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
   

      if(msg.content === "d?serverinfo"){
        msg.delete();  

        let sicon = msg.guild.iconURL;
        let serverembed = new Discord.RichEmbed()

        .setTitle("`Information sur le serveur`")
        .setColor("#320242")
        .setThumbnail(sicon)
        .addField("`Nom du serveur ¬`", msg.guild.name)
        .addField("`Créé le ¬`", msg.guild.createdAt)
        .addField("`Total des membres ¬`", msg.guild.memberCount)
        .addField("`ID du Serveur ¬`", msg.guild.id);
        
    
        return msg.channel.send(serverembed).catch(console.error);
      }
  

});    
         
 
bot.on('message', msg => {


if (msg.content === 'd?quit') {  
      msg.delete();
      if(!msg.member.roles.some(r=>["Administrator",].includes(r.name)) )
      msg.channel.send("`C’était un plaisir de vous servir`");            
      msg.guild.leave()
      .catch(console.error);

    }


  
  });


    bot.on('message', msg => {



      if (msg.content === 'd?help'){


        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
          
          
              .setTitle("𝔇𝔢𝔞𝔱𝔥 𝔑𝔬𝔱𝔢 - Panel d'aide et d'informations")
              .setThumbnail(sicon)
              .addField("INFORMATION ¬","Un bot Discord de modération 100% français", true)
              .addField("COMMANDES ¬","                  |                                                                                                                              |", true)
              .addField(":black_small_square: d?bvn","Souhaitez la bienvenue !", true)
              .addField(":black_small_square: d?blague","Je vous propose une blague parmi plusieurs de mes blagues", true)
              .addField(":black_small_square: d?serverinfo","Affiche les Information du Serveur", true)
              .addField(":black_small_square: d?doc","Commande qui permet d'obtenir le lien de docs de languages de programmation", true)
              .addField(":black_small_square: d?game","Commence le jeu du vrai ou faux.", true)
              .addField(":black_small_square: d?userinfo"," Affiche des informations d'un membre.", true)
              .addField(":black_small_square: d?udapte","Les Dernieres MAJ du DeathNote", true)
              .addField(":black_small_square: d?shop","Cette commande montre la vente du développeur.", true)
              .addField(":black_small_square: d?rep","Le Death Note répete vos phrases", true)
              .addField(":black_small_square: d?ping","Calcule le ping entre l'envoi d'un message et son édition, ce qui donne une belle latence.", true)
              .addField(":black_small_square: d?invite","Affiche le lien d'invitation du DeathNote directement.", true)
              .addField(":black_small_square: d?quit","L'Administrateur fait quitter le Death Note.", true)
              .setColor("#320242")
              .setFooter("Développé par DumpMan")
              msg.author.sendEmbed(help_embed).catch(console.error);
      }

      if (msg.content === 'd?help'){
        msg.delete();
          msg.channel.send(":round_pushpin: Un message contenant les commandes du bot vous a été envoyé !").catch(console.error);
      }
      if (msg.content === ':round_pushpin: Un message contenant les commandes du bot vous a été envoyé !'){
        msg.delete().catch(console.error);
      }

 
      if (msg.content === 'd?shop'){
            let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
          
    
              .setTitle("Achat / Vente")
              .setThumbnail(sicon)
              .addField("INFORMATION ¬","Pour toutes achat interessé, Veuillez me repondre en mp : 𝕯𝖚𝖒𝖕𝕸𝖆𝖓#4292", true)
              .addField("VENTES ¬","                 |",true)
              .addField(":black_small_square: Netlfix Standard","3€ | Le forfait Premium vous permet de regarder simultanément sur quatre appareils les séries TV et les films Netflix en haute définition (HD) et ultra-haute définition (UHD), si disponible. Il vous permet également de télécharger des titres sur deux téléphones ou deux tablettes au maximum.", true)
              .addField(":black_small_square: Netlfix Premium","5€ | Le forfait Premium vous permet de regarder simultanément sur quatre appareils les séries TV et les films Netflix en haute définition (HD) et ultra-haute définition (UHD), si disponible. Il vous permet également de télécharger des titres sur quatre téléphones ou quatre tablettes au maximum.", true)
              .addField(":black_small_square: Spotify Premium","1€ | La meilleure façon de profiter de Spotify est de souscrire en Premium.", true)
              .addField(":black_small_square: Deezer Premium","2€ | La musique que vous voulez partout, tout le temps.", true)
              .addField(":black_small_square: Deezer Family","3€ | Avec un compte Deezer Familly, vous pouvez écouter ce que vous voulez, quand vous le voulez, sans être interrompu par la publicité", true)
              .addField(":black_small_square: WWE","2€ | Regarde ton catch préféré!", true)
              .addField(":black_small_square: SFRSport","10€ | Pack SFR Sport ", true)
              .addField(":black_small_square: Ubisoft","X€ | Pour l'achat d'un compte Envoyez-moi un message avec les jeux que vous souhaiter avoir,je vous répondrai si j'ai le compte qu'il vous faut ou de reformuler une autre demande.", true)
              .addField(":black_small_square: Origin","X€ | Pour l'achat d'un compte Envoyez-moi un message avec les jeux  que vous souhaiter avoir,je vous répondrai si j'ai le compte qu'il vous faut ou de reformuler une autre demande.", true)
              .addField(":black_small_square: MyCanal","10€ | Ce Compte contient le pack: Canal+ Essentiel/Les Chaines Sport - Bein Sport", true)
              .addField(":black_small_square: ZenMateVPN","3€ | C’est un VPN facile à utiliser, que je conseille à toutes les personnes qui ne veulent pas se prendre la tête. Il est de bonne facture, protégera votre connexion et vous permettra de regarder des vidéos en streaming (Netflix US, TV française hors Canal+). Le tout sans aucun paramétrage.", true)
              .addField(":black_small_square: NordVPN","3€ | NordVPN est le service VPN parfait pour tout internaute désireux de devenir anonyme de façon certaine et complète. Les mécanismes de chiffrement et d’anonymisation renforcés couplés à une politique no log rendent impossible qui que ce soit de découvrir une identité réelle derrière un serveur NordVPN. Même si une requête judiciaire venait à être traitée par NordVPN, plusieurs utilisateurs utilisent les mêmes adresses IP et aucune information d’identification ne peut définir qui utilisait quoi et quand car il n’y en a pas.", true)
              .addField(":black_small_square: HideMyHassVPN","3€ | Le fournisseur de VPN HideMyAss a été élu meilleur VPN de l'année en 2012 et 2013. Il est sans doute l'un des VPN les plus côtés sur le Net actuellement. Supportant les protocoles PPTP, L2TP et OpenVPN, il fonctionne avec la plupart des systèmes d'exploitation et des périphériques.", true)
              .addField(":black_small_square: Express Vpn","2€ | ExpressVPN vous donne le choix entre 148 villes dans 94 pays. Grâce à un débit illimité et des changements de serveurs à l'infini, vous pouvez vous connecter où que vous soyez dans le monde.", true)
              .addField(":black_small_square: Minecraft Premium","2€ | Minecraft est un jeu qui consiste à placer des blocs et à partir à l'aventure. Achetez-le ici,pour etre premium facilement et pouvoir y jouer et les incroyables créations de la communauté!", true)
              .addField(":black_small_square: FreeWifi","1€ | Profitez d'internet illimité avec FreeWifi sur smartphone ou PC !", true)
              .addField(":black_small_square: SfrWifi","1€ | Profitez d'internet illimité avec SFR Wifi sur smartphone ou PC !", true)
              .addField(":black_small_square: OrangeWifi","1€ | Profitez d'internet illimité avec SFR Wifi sur smartphone ou PC !", true)
              .addField(":black_small_square: Anime Digital Network","3€ | Anime Digital Network c'est le meilleur de l'animé en direct du Japon ! Découvrez en streaming tout Naruto Shippuden, Fairy Tail, Hunter x Hunter, Blue Exorcist, Code Geass, Vampire Knight, etc.", true)
              .addField(":black_small_square: ICoyote","5€ | Profitez d'un Compte Coyote pour smartphone ou Iphone pour 5€", true)
              .addField(":black_small_square: Service de DDOS","3€ | Ce Service est pour cibler la personne de votre choix(Via Discord ou Skype, Facebook...),ensuite de l'attaquer sur son Pc et voir les conséquences. Une fois le payement effectué, envoyer moi des informations concernant la personne que vous souhaiter le DDOS.Pour plus d'information Contacter moi", true)
              .addField(":black_small_square: P*rnHub Premium","3€ | Avec P*rnHub Premium, rentrer dans la catégorique Special que seuls les Premium pourront y accéder.", true)
              .addField(":black_small_square: Crunchyroll Premium","2€ | Visionnez toutes les séries sans pubs en HD sur tous les matériels disponibles Accédez à tous les animés et les mangas", true)
              .setColor("#320242")
              .setFooter("Garantie 3 mois = 2€")
              msg.author.sendEmbed(help_embed).catch(console.error)
          
      }

      if (msg.content === 'd?shop'){
        msg.delete();
          msg.channel.send(":shopping_cart: Un message contenant le shop du développeur vous a été envoyé !")
      }
      if (msg.content === ':shopping_cart: Un message contenant le shop du développeur vous a été envoyé !'){
        msg.delete().catch(console.error);
      }
      if (msg.content === "d?bvn") {
        msg.delete();
        msg.channel.send({
          embed: {
            color: 595959,
            author: {
              name: (msg.author.username,'Vous souhaite la bienvenue ! 🎉'),
              icon_url: msg.author.avatarURL,
            },
           
    
            footer: {
              text: "👉 Astuce : Vous aussi souhaitez la bienvenue avec d?bvn"
             
            }
              }
        });
       
    }


  if (msg.content === 'd?invite'){

    const sicon = bot.user.displayAvatarURL
    let serverembed = new Discord.RichEmbed()
    .setTitle(">>> Ajouter le DeathNote <<<")
    .addField(bot.user.username,"`En réalité je te soupçonne... d'être Kira lui-même. Libre à toi maintenant de me demander ce que tu veux.`")
    .setColor("#320242")
    .setThumbnail(sicon)
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=423175159785193492&permissions=8&scope=bot')
    .setFooter("Pour toutes Information au sujet du DeathNote, contacter le développeur")

 msg.author.send(serverembed).catch(console.error);
  
}
if (msg.content === 'd?invite'){
  msg.delete();
    msg.channel.send(":black_nib: Un message contenant l'invitation du DeathNote vous a été envoyé !").catch(console.error);
}
if (msg.content === ":black_nib: Un message contenant l'invitation du DeathNote vous a été envoyé !"){
  msg.delete().catch(console.error);
}

  });

  bot.on("message", async message => {
    let member = message.mentions.members.first();
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "?userinfo") {
      message.delete();
      let member = message.mentions.members.first();
    if(!member)
      return message.reply("Veuillez mentionner un membre valide de ce serveur");
      const sicon = member.displayAvatarURL
      let serverembed = new Discord.RichEmbed()      
       .setTitle(member.username,'test')
      .addField("Nom du Membre ¬", member.username,false)
      .addField("Compte créé le ¬", member.createdAt,false)
      .addField("Identification ¬", member.id,false)
      .addField("Discriminateur ¬", member.discriminator,false)
      .addField("Selfbot ¬", member.bot,false)
      .setThumbnail(sicon)
      .setColor("#320242")
      .setFooter("demandé par", message.author.username)
  
      return message.channel.send(serverembed).catch(console.error);
  
    } 
 
  });
//Message
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


bot.on('disconnect', function() {
  console.log('Reconnection du bot ...');
  bot.connect();
});
bot.on('first', function() {
  console.log('Fix').catch(console.error);
});

bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot est demarré, il y a ${client.users.size} utilisateurs, et ${client.channels.size} channels puis ${client.guilds.size} serveurs.[${client.guilds.size}, ${client.users.size}]`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  bot.user.setGame(`d?help | 1765 serveurs | 20.456 joueurs`, 'https://www.twitch.tv/DeathNote');
});


bot.on("message", async message => {
  let member = message.mentions.members.first();
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "?ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! La latence est ${m.createdTimestamp - message.createdTimestamp}ms. La latence de l'API est ${Math.round(client.ping)}ms`).catch(console.error);
  }
  
  if(command === "?rep") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage).catch(console.error);
  }
  
  
});

bot.login(config.token);
