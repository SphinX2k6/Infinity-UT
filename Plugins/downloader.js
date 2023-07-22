const axios = require("axios");
const fetch = require('node-fetch');
const fbdll = require("@ruhend/facebook");
const cooldownManager = require('../System/cooldown.js');
const { igdl, savefrom, InfFb, mediafireDl } = require('../System/Scrapers.js')
let turl = require("turl");

let mergedCommands = [
  "igdl",
  "instadl",
  "fbdl",
  "facebookdl",
  "mediafiredl",
  "mediafire",
  "soundcloud",
];

module.exports = {
  name: "downloader",
  alias: [...mergedCommands],
  cooldown: 10000,
  uniquecommands: ["igdl", "fbdl", "mediafiredl","soundcloud",],
  description: "All file dowloader commands",
  start: async (Infinity, m, { inputCMD, text, doReact, prefix, pushName }) => {
    
 if (cooldownManager.checkCooldown(inputCMD, module.exports.cooldown) > 0) {
      return m.reply(`Command is on cooldown. Please wait ${module.exports.cooldown / 1000} seconds.`);
    }
    
switch (inputCMD) {
    
case "igdl":
if (!text) m.reply(`Please provide a valid instagram Reel/Video link !\n\nExample: *${prefix}igdl https://www.instagram.com/p/CP7Y4Y8J8ZU/*`)     
m.reply(`*Please wait your video is downloading*`)  
try {
let igvid = await igdl(text)

let dllink = await turl.shorten(igvid.url[0].url)
if (!igvid) { m.reply('Failed to fetch video!') }
Infinity.sendMessage(
            m.from,
            {
              video: { url: igvid.url[0].url },
              caption: `Downloaded by: *${botName}* \n\n_*🎀 Powered by:*_ *Ari_Senpai*\n\n_*🧩 Downlaod URl:*_ ${dllink} \n`,
            },
            { quoted: m }
          ); 
} catch(e) {
  let igvid2 = await savefrom(text)
   console.log(igvid2)
  let dllink2 = await turl.shorten(igvid2.url[0].url)
  if (!igvid2) { m.reply('Failed to fetch video!') }
Infinity.sendMessage(
            m.from,
            {
              video: { url: igvid2.url[0].url },
              caption: `Downloaded by: *${botName}* \n\n_*🎀 Powered by:*_ *Ari_Senpai*\n\n_*🧩 Downlaod URl:*_ ${dllink2} \n`,
            },
            { quoted: m }
          ); 
  
}
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
           let fbdllink = await turl.shorten(fbvid.url[0].url)
          Infinity.sendMessage(
            m.from,
            {
              video: { url: fbvid.url[0].url },
              caption: `Downloaded by: *${botName}* \n\n_*🎀 Powered by: *Ari_Senapi*\n\n_\n_${fbvid.meta.source}_\nDownload Link: ${fbdllink}`,
            },
            { quoted: m }
          );
        } catch(e1) {
      console.log('Error 1 at fbdl:'+ e1)    
try {        
const res = await fbdll(text)
   let fbdllink2 = await turl.shorten(res.hd)        
    Infinity.sendMessage(
            m.from,
            {
              video: { url: res.hd },
              caption: `*Title:${res.title}*\n*Downloaded by:* *${botName}* \n\n_*🎀 Powered by:* *Ari_Senapi*\n\n_\n*Download Link:* ${fbdllink2}`,
            },
            { quoted: m }
          )      
          
        } catch(e2) {
          console.log('Error 2 at fbdl:'+ e2)
          await m.reply(
            `Video access denied ! It's private or only owner's friends can view it.`
          );
}}
break;

case "soundcloud":
if (!text) m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Please put a text to search!*`)
try {
  await doReact('🎧')
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `❒═══❬ 𝐒𝐎𝐔𝐍𝐃𝐂𝐋𝐎𝐔𝐃 ❭═══╾❒
┬
├‣✨ *𝚃𝚒𝚝𝚕𝚎:* ${json.title}
┴
┬
├‣💚 *𝗗𝗶𝗿𝗲𝗰𝘁 𝗨𝗥𝗟:* ${shortUrl}
┴
┬
├‣ *- 𝘌𝘮𝘦𝘳𝘨𝘦 𝘪𝘯𝘵𝘰 𝘮𝘶𝘴𝘪𝘤...*
┴
┬
├ _﹫BY: Ari_Senpai_
┴`
await Infinity.sendMessage(
          m.from,
          {
            image: { url: json.thumb },
            caption: soundcloudt,
          },
          { quoted: m }
        );    
   Infinity.sendMessage(
       m.from,
     {
       audio: { url: json.link },
       mimetype: "audio/mpeg",
       ptt: true,
     })
                  
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] Error, Please provide more info! Or the song is invalid!*')
  console.log(e)
}
break

      default:
        break;
    }
  },
};
