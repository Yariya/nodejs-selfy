const Discord = require("discord.js")
const client = new Discord.Client()

//Selfy NodeJS

client.once('ready', () => {
    console.log("Ready!\nCommands: ;ping")

})

client.on("message", message => {

    if (message.content.startsWith(";ping") && message.author == client.user){
        const embed = new Discord.RichEmbed()
            .setDescription("PONG! Latency: " + Math.round(client.ping) + "ms")
            .setFooter("Selfy | Yariya#1234")
        message.channel.send(embed)

    }
    //Add more here


});

client.login("Token Here")
