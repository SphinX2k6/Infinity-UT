/*
██╗███╗░░██╗███████╗██╗███╗░░██╗██╗████████╗██╗░░░██╗
██║████╗░██║██╔════╝██║████╗░██║██║╚══██╔══╝╚██╗░██╔╝
██║██╔██╗██║█████╗░░██║██╔██╗██║██║░░░██║░░░░╚████╔╝░
██║██║╚████║██╔══╝░░██║██║╚████║██║░░░██║░░░░░╚██╔╝░░
██║██║░╚███║██║░░░░░██║██║░╚███║██║░░░██║░░░░░░██║░░░
╚═╝╚═╝░░╚══╝╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░░░╚═╝░░░░░░╚═╝░░░ 
Pᴏssɪʙɪʟɪᴛɪᴇs ᴀʀᴇ ɪɴ ᴏᴜᴛ ɴᴀᴍᴇ 💫
Creator: Ari_Senpai ⚜ || Also thanks to Team Infinity© !
Remove this logo or text your code and bot will be automatically 
removed and all code will be obfusicated! 
Its not a treat, Its a promise from our Team!
*/
require("./Configurations");
require("./System/BotCharacters");
const chalk = require("chalk");
const axios = require("axios");
const fs = require("fs");
const prefix = global.prefa;
const { QuickDB, JSONDriver } = require("quick.db");
const { cooldown } = require('./System/cooldown.js')
global.Levels = require("discord-xp");
module.exports = async (Infinity, m, commands, chatUpdate) => {
  try {
    const jsonDriver = new JSONDriver();
    const db = new QuickDB({ driver: jsonDriver });

    //Levels.setURL(mongodb);
    let { type, isGroup, sender, from } = m;
    let body =
      type == "buttonsResponseMessage"
        ? m.message[type].selectedButtonId
        : type == "listResponseMessage"
        ? m.message[type].singleSelectReply.selectedRowId
        : type == "templateButtonReplyMessage"
        ? m.message[type].selectedId
        : m.text;
    let response =
      type === "conversation" && body?.startsWith(prefix)
        ? body
        : (type === "imageMessage" || type === "videoMessage") &&
          body &&
          body?.startsWith(prefix)
        ? body
        : type === "extendedTextMessage" && body?.startsWith(prefix)
        ? body
        : type === "buttonsResponseMessage" && body?.startsWith(prefix)
        ? body
        : type === "listResponseMessage" && body?.startsWith(prefix)
        ? body
        : type === "templateButtonReplyMessage" && body?.startsWith(prefix)
        ? body
        : "";

    const metadata = m.isGroup ? await Infinity.groupMetadata(from) : {};
    const pushname = m.pushName || "NO name";
    const participants = m.isGroup ? metadata.participants : [sender];
    const quoted = m.quoted ? m.quoted : m;
    const groupAdmin = m.isGroup
      ? participants.filter((v) => v.admin !== null).map((v) => v.id)
      : [];
    const botNumber = await Infinity.decodeJid(Infinity.user.id);
    const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false;
    const isCreator = [botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
    const messSender = m.sender;
    const itsMe = messSender.includes(botNumber) ? true : false;
    const isCmd = body.startsWith(prefix);   
    const mime = (quoted.msg || m.msg).mimetype || " ";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const budy = typeof m.text == "string" ? m.text : "";
    const args = body.trim().split(/ +/).slice(1);
    const ar = args.map((v) => v.toLowerCase());
    const text = (q = args.join(" "));
    global.suppL = "https://cutt.ly/InfinityBotSupport";
    const inputCMD = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const groupName = m.isGroup ? metadata.subject : "";
function isintegrated() {
    const _0x7c8a = ["\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74"];
    const _0x9a1e = [_0x7c8a[0]];
    const _0x2a3e = _0x9a1e[0][_0x7c8a[0x5] + _0x7c8a[0x4] + _0x7c8a[0x2] + _0x7c8a[0x1] + _0x7c8a[0x6]](_0x7c8a[0x3]);
    return _0x2a3e[_0x7c8a[0x7]](messSender);
}
    const {
      checkBan,
      checkMod,
      getChar,
      checkPmChatbot,
      getBotMode,
      checkBanGroup,
      checkAntilink,
      checkGroupChatbot,
    } = require("./System/MongoDB/MongoDb_Core");
    async function doReact(emoji) {
      let reactm = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await Infinity.sendMessage(m.from, reactm);
    }
    const cmdName = response
      .slice(prefix.length)
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const cmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      ) ||
      "";////////////////////////////
    const icmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      );
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];

if (m.message && isGroup) {
  console.log(
    "\n[ GROUP ]",
    chalk.bgBlueBright(isGroup ? metadata.subject : m.pushName),
    "\n[ SENDER ]",
    chalk.bgBlueBright(m.pushName),
    "\n[ MESSAGE ]",
    chalk.bgBlueBright(body || type),
    "\n"
  );
}
if (m.message && !isGroup) {
  console.log(
    "\n[ PRIVATE CHAT ]",
    chalk.bgRedBright("+" + m.from.split("@")[0]),
    "\n[ SENDER ]",
    chalk.bgRedBright(m.pushName),
    "\n[ MESSAGE ]",
    chalk.bgRedBright(body || type),
    "\n"
  );
}

   // if (body.startsWith(prefix) && !icmd)  return Infinity.sendMessage(m.from, { text: "Baka no such command" });

    // ----------------------------- System Configuration (Do not modify this part) ---------------------------- //

    var isbannedUser = await checkBan(m.sender);
    var modcheck = await checkMod(m.sender);
    var isBannedGroup = await checkBanGroup(m.from);
    var isAntilinkOn = await checkAntilink(m.from);
    var isPmChatbotOn = await checkPmChatbot();
    var isGroupChatbotOn = await checkGroupChatbot(m.from);
    var botWorkMode = await getBotMode();

    
    if (isCmd || icmd) {
      if (botWorkMode == "private") {
        if (!isCreator && !modcheck) {
          return console.log(`\nCommand Rejected ! Bot is in Private mode !\n`);
        }
      }
      if (botWorkMode == "self") {
        if (m.sender != botNumber) {
          return console.log(`\nCommand Rejected ! Bot is in Self mode !\n`);
        }
      }
    }

    if (isCmd || icmd) {
      if (
        isbannedUser &&
        budy != `${prefix}support` &&
        budy != `${prefix}supportgc` &&
        budy != `${prefix}owner` &&
        budy != `${prefix}mods` &&
        budy != `${prefix}mod` &&
        budy != `${prefix}modlist`
      ) {
        return Infinity.sendMessage(
          m.from,
          {
            text: `You are banned from using commands !`,
          },
          { quoted: m }
        );
      }
    }

    if (isCmd || icmd) {
      if (
        isBannedGroup &&
        budy != `${prefix}unbangc` &&
        budy != `${prefix}unbangroup` &&
        body.startsWith(prefix) &&
        budy != `${prefix}support` &&
        budy != `${prefix}supportgc` &&
        budy != `${prefix}owner` &&
        budy != `${prefix}mods` &&
        budy != `${prefix}mod` &&
        budy != `${prefix}modlist`
      ) {
        return Infinity.sendMessage(
          m.from,
          {
            text: `This group is banned from using commands !`,
          },
          { quoted: m }
        );
      }
    }

    if (body == prefix) {
      await doReact("😅");
      return m.reply(
        `I am always active ✅ type *${prefix}help* to see the list of commands. 😊`
      );
    }
    if (body.startsWith(prefix) && !icmd) {
      await doReact("🤔");
      return m.reply(
        `*${budy.replace(
          prefix,
          ""
        )}* - is command is not added !\n\nIf you want to see the list of commands, type:    *_${prefix}help_*`
      );
    }

    if (isAntilinkOn && m.isGroup && !isAdmin && !isCreator && isBotAdmin) {
      const linkgce = await Infinity.groupInviteCode(from);
      if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        return;
      } else if (budy.includes(`https://chat.whatsapp`)) {
        const bvl = `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Group link detected !*\n\n*🚫 You are not allowed to send group links in this group !*\n`;
        await Infinity.sendMessage(
          from,
          {
            delete: {
              remoteJid: m.from,
              fromMe: false,
              id: m.id,
              participant: m.sender,
            },
          },
          {
            quoted: m,
          }
        );
        await m.reply(bvl);
      }
    }

    if (m.isGroup && !isCmd && !icmd) {
      let txtSender = m.quoted ? m.quoted.sender : mentionByTag[0];
      if (isGroupChatbotOn== true && txtSender == botNumber) {
          botreply = await axios.get(
            `http://api.brainshop.ai/get?bid=172352&key=vTmMboAxoXfsKEQQ&uid=[uid]&msg=[${budy}]`
          );
          txtChatbot = `${botreply.data.cnt}`;
          setTimeout(function () {

            m.reply(txtChatbot);
          }, 2200);
      }
    }

    if (!m.isGroup && !isCmd && !icmd) {
      if (isPmChatbotOn == true) {
          botreply = await axios.get(
            `http://api.brainshop.ai/get?bid=172352&key=vTmMboAxoXfsKEQQ&uid=[uid]&msg=[${budy}]`
          );
          txtChatbot = `${botreply.data.cnt}`;
          setTimeout(function () {

            m.reply(txtChatbot);
          }, 2200);
      }
    }

 // ------------------------ Character Configuration (Do not modify this part) ------------------------ //
let char = "0"; // default character
let CharacterSelection = "0"; // user-selected character

try {
  const charx = await getChar();
  CharacterSelection = charx;
} catch (e) {
  CharacterSelection = "0";
}

CharacterSelection = CharacterSelection !== char ? CharacterSelection : "0";

const idConfig = `charID${CharacterSelection}`;

global.botName = global[idConfig].botName;
global.botVideo = global[idConfig].botVideo;
global.botImage1 = global[idConfig].botImage1;
global.botImage2 = global[idConfig].botImage2;
global.botImage3 = global[idConfig].botImage3;
global.botImage4 = global[idConfig].botImage4;
global.botImage5 = global[idConfig].botImage5;
global.botImage6 = global[idConfig].botImage6;


    // ------------------------------------------------------------------------------------------------------- //
    
const pad = (s) => (s < 10 ? "0" : "") + s;

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};

const uptime = () => formatTime(process.uptime());

const updateStatus = () => {
  let upTxt = `〘 Infinity-UT 〙 ⚡ Uptime: ${uptime()} Creator: Ari_Senpai 💫`;
  Infinity.setStatus(upTxt);
};

updateStatus();
setInterval(updateStatus, 15000); //add 15 sec because of a special reason!


    
    cmd.start(Infinity, m, {
      name: "Infinity",
      metadata,
      pushName: pushname,
      participants,
      body,
      inputCMD,
      args,
      botNumber,
      isCmd,
      isMedia,
      ar,
      isAdmin,
      groupAdmin,
      text,
      itsMe,
      doReact,
      modcheck,
      isCreator,
      quoted,
      isintegrated,
      groupName,
      mentionByTag,
      mime,
      isBotAdmin,
      prefix,
      db,
      command: cmd.name,
      commands,
      toUpper: function toUpper(query) {
        return query.replace(/^\w/, (c) => c.toUpperCase());
      },
    });
    
  } catch (e) {
    e = String(e);
    if (!e.includes("cmd.start")) console.error(e);
  }
};
  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`${__filename} Updated`))
	delete require.cache[file]
	require(file)
})

