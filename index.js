const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {
	
console.log(`${client.user.username} is online`);
client.user.setActivity("TESTING", {type: "PLAYING"});

});

// Standaard return bericht als hij gemmt wordt

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

// Commands

if (command === `${prefix}Commandname`) {
        
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Text")
        .setDescription("Text")
        .setColor("#E0EAEF")
        .setThumbnail("IMAGE")
        .setFooter("TEXT", "IMAGE")
        .setTimestamp();
    
    return message.channel.send(botEmbed); 
}

if (command === `${prefix}Commandname`) {
        
    var botEmbed = new discord.MessageEmbed()
        .setTitle("text")
        .setDescription("text")
        .setColor("#E0EAEF")
        .setThumbnail("image")
        .setFooter("text", "Image")
        .setTimestamp();
        
    return message.channel.send(botEmbed); 
}

// Another prefixes

if (command === `${prefix}commandname`) {
        
    var botEmbed = new discord.MessageEmbed()
        .setTitle("text")
        .setDescription("Text")
        .setColor("#E0EAEF")
        .addFields(
            {name: "text", value:"text"},
            {name: "text", value:"text"}
        )
        .setThumbnail("image")
        .setFooter("text")
        .setTimestamp();
    
    return message.channel.send(botEmbed); 
}
});