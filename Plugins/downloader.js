const axios = require("axios");
const fetch = require('node-fetch');
const { Infigmp4, savefrom, InfFb, mediafireDl } = require('../System/Scrapers.js')

let mergedCommands = [
  "igdl",
  "instadl",
  "fbdl",
  "facebookdl",
  "mediafiredl",
  "mediafire",
];

module.exports = {
  name: "downloader",
  alias: [...mergedCommands],
  uniquecommands: ["igdl", "fbdl", "mediafiredl"],
  description: "All file dowloader commands",
  start: async (Infinity, m, { inputCMD, text, doReact, prefix, pushName }) => {
    switch (inputCMD) {
  
case "igdl":
if (!text) m.reply(`Please provide a valid instagram Reel/Video link !\n\nExample: *${prefix}igdl https://www.instagram.com/p/CP7Y4Y8J8ZU/*`)
m.reply(`*Please wait your video is downloading*`)  
let igvid = await Infigmp4(text)
if (!igvid) { m.reply('Failed to fetch video!') }
let shortUrl222 = await (await fetch(`https://tinyurl.com/api-create.php?url=${igvid.url[0].url}`)).text()
Infinity.sendMessage(
            m.from,
            {
              video: { url: igvid.url[0].url },
              caption: `Downloaded by: *${botName}* \n\n_*🎀 Powered by:*_ *Ari_Senpai*\n\n_*🧩 Downlaod URl:*_ ${shortUrl222} \n`,
            },
            { quoted: m }
          );  
break;      

      case "mediafiredl":
      case "mediafire":
        if (!text) {
          return m.reply(
            `Please provide a valid Mediafire link !\n\nExample: *${prefix}mediafire put_link*`
          );
        }
        if (!text.includes("mediafire.com")) {
          return m.reply(
            `Please provide a valid Mediafire link !\n\nExample: *${prefix}mediafire put_link*`
          );
        }

        const MDF = await mediafireDl(text);
        if (MDF[0].size.split("MB")[0] >= 100)
          return m.reply("File is too large in size!");

        let txt = `        *『 Mediafire Downloader 』*
        
*🎀 File Name* : ${MDF[0].nama}
*🧩 File Size* : ${MDF[0].size}
*📌 File Format* : ${MDF[0].mime}

Downloading...`;

        await doReact("📥");
        await m.reply(txt);

        Infinity.sendMessage(
          m.from,
          {
            document: { url: MDF[0].url },
            mimetype: MDF[0].mime,
            fileName: MDF[0].nama,
          },
          { quoted: m }
        );
        break;

      case "fbdl":
      case "facebookdl":
        if (!text) {
          return m.reply(
            `Please provide a valid Facebook link !\n\nExample: *${prefix}fbdl put_link*`
          );
        }
        if (!text.includes("fb") && !text.includes("facebook")) {
          return m.reply(
            `Please provide a valid Facebook link !\n\nExample: *${prefix}fbdl put_link*`
          );
        }

        await doReact("📥");
        await m.reply(`Please wait, I'm downloading your video...`);
        try {
          let fbvid = await InfFb(text)
          if (!fbvid) { m.reply('Failed to fetch video!') }

          Infinity.sendMessage(
            m.from,
            {
              video: { url: fbvid.url[0].url },
              caption: `Downloaded by: *${botName}* \n\n_*🎀 Powered by: *Ari_Senapi*\n\n_\n_${fbvid.meta.source}_`,
            },
            { quoted: m }
          );
        } catch(e) {
          await m.reply(
            `Video access denied ! It's private or only owner's friends can view it.`
          );
        }

        break;

      default:
        break;
    }
  },
};
