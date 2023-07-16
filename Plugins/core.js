const fs = require("fs");
const axios = require("axios");
const path = require("path");

let mergedCommands = [
  "creator",
  "help",
  "h",
  "menu",
  "support",
  "supportgc",
];

module.exports = {
  name: "others",
  alias: [...mergedCommands],
  cooldown: 60 * 1000,
  uniquecommands: ["support", "creator"],
  description: "All miscleaneous commands",
  start: async (Infinity, m, { pushName, prefix, inputCMD, doReact }) => {

    
    switch (inputCMD) {
/*      case "script":
      case "sc":
        await doReact("🧣");
        let repoInfo = await axios.get(
          "https://api.github.com/repos/FantoX001/Infinity-MD"
        );
        let repo = repoInfo.data;
        let txt = `            🧣 *${botName}'s Script* 🧣\n\n*🎀 Total Forks:* ${
          repo.forks_count
        }\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${
          repo.license.name
        }\n*📁 Repo Size:* ${(repo.size / 1024).toFixed(
          2
        )} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${
          repo.html_url
        }\n\n❝ Dont forget to give a Star ⭐ to the repo. It's made with restless hardwork by *Team Infinity*. ❞\n\n*©️ Team Infinity- 2023*`;
        Infinity.sendMessage(m.from, { image: pic, caption: txt }, { quoted: m });
        break;

      case "support":
      case "supportgc":
        
        let txt2 = `              🧣 *Support Group* 🧣\n\n*${botName}* is an open source project, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help inside *Group*.\n\n*Thanks for using Infinity.*`;
        Infinity.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
        break;*/

    case "creator":
          await doReact("💫")
let pp = await Infinity.profilePictureUrl('917044585369@s.whatsapp.net', "image");
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭────[ *The Infinity Bot* ]
│
│ *➤ Hello ${taguser}*
│
│ *=> 🤖 Active Time:* ${uptime}
│ *=> ✅ Bot is active for Public*
│ *=> 👑 Creator: Ari_Senpai*
│ *=> 🔗 Creator ofc:* https://undertaker1.carrd.co/
| *=> 🔗 Youtube:* https://www.youtube.com/@arisenpai_6595
| *=> 🔗 Facebook:* https://www.facebook.com/profile.php?id=100069510794377
│ *=> 🔗 Instagram:* https://www.instagram.com/ari_senpai_01/
│
╰────────────────`

Infinity.sendMessage(m.from, { image: {url:pp}, caption: str }, { quoted: m });
break

        
      case "help":
      case "h":
      case "menu":
        await doReact("☃️");
        await Infinity.sendPresenceUpdate("composing", m.from);
        function readUniqueCommands(dirPath) {
          const allCommands = [];

          const files = fs.readdirSync(dirPath);

          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
              const subCommands = readUniqueCommands(filePath);
              allCommands.push(...subCommands);
            } else if (stat.isFile() && file.endsWith(".js")) {
              const command = require(filePath);

              if (Array.isArray(command.uniquecommands)) {
                const subArray = [file, ...command.uniquecommands];
                allCommands.push(subArray);
              }
            }
          }

          return allCommands;
        }

        function formatCommands(allCommands) {
          let formatted = "";

          for (const [file, ...commands] of allCommands) {
            const capitalizedFile =
              file.replace(".js", "").charAt(0).toUpperCase() +
              file.replace(".js", "").slice(1);

            formatted += `╟   🏮 *${capitalizedFile}* 🏮   ╢\n\n`;
            //formatted += `\`\`\`${commands.join("\n")}\`\`\`\n\n\n`;
            // Adding a - before each command
            formatted += `\`\`\`${commands
              .map((cmd) => `⥼   ${prefix + cmd}`)
              .join("\n")}\`\`\`\n\n\n`;
          }

          return formatted.trim();
        }

        const pluginsDir = path.join(process.cwd(), "Plugins");

        const allCommands = readUniqueCommands(pluginsDir);
        const formattedCommands = formatCommands(allCommands);
        var helpText = `\nKonnichiwa *${pushName}* Senpai,\n\nI am *${botName}*, a WhatsApp bot built to take your boring WhatsApp experience into next level.\n\n*🔖 My Prefix is:*  ${prefix}\n\n${formattedCommands}\n\n\n*©️ Team Infinity- 2023*`;
        await Infinity.sendMessage(
          m.from,
          { video: { url: botVideo }, gifPlayback: true, caption: helpText },
          { quoted: m }
        );

        break;
      default:
        break;
    }
  },
};
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n│ *=> 💥 ` + d, ' Day* ', `\n│ *=> 💫 ` + h, ' Hours* ', `\n│ *=> 💠 ` + m, ' minutes* ', `\n│ *=> ♦ ` + s, ' Sceonds* '].map(v => v.toString().padStart(2, 0)).join('')}