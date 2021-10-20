const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "create",
    description: "create code!",
    aliases: ["create"],
    cooldown: "5s",
    run: async({client, respond, edit}, args) => {
        if(!args[0]) {
   return respond(':x: Please specify the **text/link**!')
}

    if(args[1]) {
return respond(':x: No spaces allowed!')
}

        var qrembed = new MessageEmbed()
        .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${args[0]}`)
        respond(qrembed)
    }
}