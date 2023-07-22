const axios = require("axios");
const fetch = require('node-fetch');
const cooldownManager = require('../System/cooldown.js');

let mergedCommands = ['why', 'advise', 'ping', 'mcstat'];

module.exports = {
  name: "misc",
  alias: [...mergedCommands],
  cooldown: 5000, // Default cooldown time in milliseconds (1 minute)
  uniquecommands: ['why', 'advise', 'ping', 'mcstat'],
  description: "Commands to vanish boredom",
  start: async (
    Infinity,
    m,
    {
      inputCMD,
      text,
      prefix,
      doReact,
      args,
      itsMe,
      pushName,
      participants,
      metadata,
      mentionByTag,
      mime,
      isMedia,
      quoted,
      botNumber,
      isBotAdmin,
      groupAdmin,
      isAdmin,
    }
  ) => {
    if (cooldownManager.checkCooldown(inputCMD, module.exports.cooldown) > 0) {
      return m.reply(`Command is on cooldown. Please wait ${module.exports.cooldown / 1000} seconds.`);
    }

    switch (inputCMD) {
      case 'why':
      case 'Why':
      case 'why?':
        const { data } = await axios.get('https://nekos.life/api/v2/why');
        m.reply('```' + data.why + '```');
        break;

      case 'ping':
        const start = new Date().getTime();
        await m.reply("```Ping!```");
        const end = new Date().getTime();
        m.reply("*Pong!*\n ```" + (end - start) + "``` *ms*");
        break;

      case 'advise':
        await axios
          .get(`https://api.adviceslip.com/advice`)
          .then((response) => {
            const text = '```Advice for you:' + response.data.slip.advice + '```';
            m.reply(text);
          })
          .catch((err) => {
            m.reply(`🔍 Error: ${err}`);
          });
        break;

      case 'mcstat':
        const timeStart = Date.now();
        //If you are a minecraft player // U can join our serevr .!
        const infoip = (await axios.get(`https://api.mcsrvstat.us/2/bbn.one:30642`)).data;

        m.reply(`======${(Date.now()) - timeStart}ms=====
          🗺️Java: bbn.one:30642
          🏳️Bedrock: bbn.one
          🎊Port: 30642
          🕋Server Status: ${infoip.online}
          ⛱️Version: ${infoip.version}
        `);
        break;
    }
  }
};
