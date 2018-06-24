"use strict";

const Discord = require('discord.js');
const config = require('./config.json');
const disco = new Discord.Client();
const prefix = config.prefix;
const allowedUsers = config.allowedUsers;
const roles = config.roleToDisco;

disco.on("message", message => {
    
      function discoRole() {
        let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        roles.forEach((role) => {
          let theRole = message.guild.roles.find("name", role);
          theRole.edit({color: random}).catch(e => {
            return message.channel.sendMessage(":x: **Error:** Belirttiğiniz rol `config.json` bu sunucuda bir rol değil, veya onun sahip olduğum en yüksek rolden daha yüksek bir rolü.");
          });
        });
      }
    
      if(message.content.startsWith(prefix + "startpavyon")) {
        if(allowedUsers.includes(message.author.id)) {
        setInterval(() => { discoRole(); }, config.ms);
        message.channel.sendMessage("```css\nPavyon Başlasın!...```");
        message.channel.sendMessage(" ");
      } else {
        message.reply(` `);
      }
    } else
    
    if(message.content.startsWith(prefix + "stoppavyon")) {
      if(allowedUsers.includes(message.author.id)) {
      message.channel.sendMessage("Pavyon Bitti.");
      setTimeout(() => { console.log(process.exit(0)); }, 300);
    } else {
      message.reply(` `);
      }
    }
    
    });

    disco.login(config.token);
disco.login(config.token);
