const axios = require("axios");
const fetch = require('node-fetch');

let mergedCommands = [ 'why', 'advise',];

module.exports = {
  name: "misc",
  alias: [...mergedCommands],
  uniquecommands: [
     'why',
     'advise',
  ],
  description: "Commands to vanish bordom",
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
      switch(inputCMD) {
        case 'why': case 'Why': case 'why?':
          const { data } = await axios.get('https:/nekos.life//api/v2/why')
            m.reply('```'+data.why+'```')
          break

        case 'advise':
          await axios
            .get(`https://api.adviceslip.com/advice`)
            .then((response) => {
                const text = '```Advise for you:'+response.data.slip.advice+'```'
                m.reply(text)
            })
            .catch((err) => {
                m.reply(`🔍 Error: ${err}`)
            })
          break

          
      }
    
  }
}