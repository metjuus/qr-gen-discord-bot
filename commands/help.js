module.exports = {
    name: "help",
    description: "commands",
    aliases: ["help"],
    cooldown: "1s",
    run: async({client, respond, edit}, args) => {
        respond(`  \`!create <link>\` - Create a qr code. \n\` `)
    }
};