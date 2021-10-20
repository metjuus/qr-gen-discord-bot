

require("dotenv").config();

const { Client } = require("discord.js"),
    {GCommands} = require("gcommands")
    const express = require('express');
    var app = express()
    app.get('/', async (req, res) => { 
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
            guilds: `${client.guilds.cache.size}`,
            users: `${client.users.cache.size}`,
            channels: `${client.channels.cache.size}`
        })
    })
    app.listen(80);
const client = new Client();


client.on("ready", () => {
      console.log(`| Logged in as: ${client.user.tag}`);
   client.user.setActivity("status", {type:"LISTENING"})
    const gc = new GCommands(client, {
        cmdDir: "commands/",
        language: "english", 
        slash: {
            slash: false,
            prefix: "!"
        }
    })

    gc.on("log", console.log) 
})

client.login(process.env.token)