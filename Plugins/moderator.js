const fs = require("fs");
const Jimp = require("jimp");
const moment = require("moment-timezone");
const { botsData, getCharDataById } = require("../System/char-Fetch.js")
const {
  banUser, //----------------------- BAN
  checkBan, // --------------------- CHECK BAN STATUS
  unbanUser, // -------------------- UNBAN
  addMod, // ----------------------- ADD MOD
  checkMod, // --------------------- CHECK MOD STATUS
  delMod, // ----------------------- DEL MOD
  setChar, // ---------------------- SET CHAR ID
  getChar, // ---------------------- GET CHAR ID
  activateChatBot, // -------------- ACTIVATE PM CHATBOT
  checkPmChatbot, // --------------- CHECK PM CHATBOT STATUS
  deactivateChatBot, // ------------ DEACTIVATE PM CHATBOT
  setBotMode, // ------------------- SET BOT MODE
  getBotMode, // ------------------- GET BOT MODE
  banGroup, // --------------------- BAN GROUP
  checkBanGroup, //----------------- CHECK BAN STATUS OF A GROUP
  unbanGroup, // ------------------- UNBAN GROUP
} = require("../System/MongoDB/MongoDb_Core");

const {
  userData,
  groupData,
  systemData,
} = require("../System/MongoDB/MongoDB_Schema.js");

let mergedCommands = [
  "addmod",
  "setmod",
  "delmod",
  "removemod",
  "modlist",
  "mods",
  "ban",
  "banuser",
  "unban",
  "unbanuser",
  "banlist",
  "listbans",
  "charlist",
  "setchar",
  "dmchatbot",
  "pmchatbot",
  "bangroup",
  "bangc",
  "unbangroup",
  "unbangc",
  "setbotmode",
  "mode",
];

module.exports = {
  name: "moderators",
  alias: [...mergedCommands],
  uniquecommands: [
    "addmod",
    "delmod",
    "mods",
    "ban",
    "unban",
    "banlist",
    "charlist",
    "setchar",
    "pmchatbot",
    "bangroup",
    "unbangroup",
    "mode",
  ],
  description: "All Moderator/Owner Commands",
  start: async (
    Infinity,
    m,
    {
      inputCMD,
      text,
      mods,
      isCreator,
      banData,
      prefix,
      db,
      isintegrated,
      doReact,
      args,
      itsMe,
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
      pushName,
      groupName,
    }
  ) => {
   isUsermod = await checkMod(m.sender);
        if (!isCreator && !isintegrated && !isUsermod) {
          
          return m.reply(
            "Sorry, only my *Mods* can use this command !"
          );
        }
    switch (inputCMD) {
      case "addmod":
      case "setmod":
        if (!text && !m.quoted) {
          
          return m.reply(`Please tag a user to make *mod*!`);
        }
         mentionedUser = m.quoted ? m.quoted.sender : mentionByTag[0];
        userId = mentionedUser;
        isUsermod = await checkMod(userId);
        if (!isCreator && !isintegrated && isUsermod) {
          
          return m.reply(
            "Sorry, only my *Owner* can use this command ! *Added Mods* does not have this permission."
          );
        }
        if (!userId) return m.reply("Please mention a valid user to ban!");

        try {
          if (isUsermod) {
            
            return Infinity.sendMessage(
              m.from,
              {
                text: `@${userId.split("@")[0]} is already registered as a mod`,
                mentions: [userId],
              },
              { quoted: m }
            );
          }

          // Add user to the mods list and save to the database
          
          await addMod(userId)
            .then(() => {
              Infinity.sendMessage(
                m.from,
                {
                  text: `@${
                    userId.split("@")[0]
                  } is successfully registered to mods`,
                  mentions: [userId],
                },
                { quoted: m }
              );
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
        break;

      case "delmod":
      case "removemod":
        // Check if a user is mentioned
        if (!text && !m.quoted) {

          return m.reply(`Please tag a user to remove from *mod*!`);
        }
        mentionedUser = m.quoted ? m.quoted.sender : mentionByTag[0];
        userId = mentionedUser;
        isUsermod = await checkMod(userId);
        if (!isCreator && !isintegrated && isUsermod) {
          
          return m.reply(
            "Sorry, only my *Owner* can use this command ! *Added Mods* does not have this permission."
          );
        }
        if (!userId) return m.reply("Please mention a valid user to ban!");

        try {
          if (!isUsermod) {
            
            return Infinity.sendMessage(
              m.from,
              {
                text: `@${userId.split("@")[0]} is not registered as a mod !`,
                mentions: [userId],
              },
              { quoted: m }
            );
          }

          await delMod(userId)
            .then(() => {
              Infinity.sendMessage(
                m.from,
                {
                  text: `@${
                    userId.split("@")[0]
                  } is successfully removed to mods`,
                  mentions: [userId],
                },
                { quoted: m }
              );
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
        break;

      case "modlist":
      case "mods":
        
        try {
          var modlist = await userData.find({ addedMods: "true" });
          var modlistString = "";
          var ownerList = global.owner;
          modlist.forEach((mod) => {
            modlistString += `\n@${mod.id.split("@")[0]}\n`;
          });
          var mention = await modlist.map((mod) => mod.id);
          let xy = modlist.map((mod) => mod.id);
          let yz = ownerList.map((owner) => owner + "@s.whatsapp.net");
          let xyz = xy.concat(yz);

          ment = [ownerList.map((owner) => owner + "@s.whatsapp.net"), mention];
          let textM = `    🧣  *${botName} Mods*  🧣\n\n`;

          if (ownerList.length == 0) {
            textM = "*No Mods Added !*";
          }

          textM += `\n〽️ *Owners* 〽️\n`;

          for (var i = 0; i < ownerList.length; i++) {
            textM += `\n〄  @${ownerList[i]}\n`;
          }

          if (modlistString != "") {
            textM += `\n🧩 *Added Mods* 🧩\n`;
            for (var i = 0; i < modlist.length; i++) {
              textM += `\n〄  @${modlist[i].id.split("@")[0]}\n`;
            }
          }

          if (modlistString != "" || ownerList.length != 0) {
            textM += `\n\n📛 *Don't Spam them to avoid Blocking !*\n\n🎀 For any help, type *${prefix}support* and ask in group.\n\n*💫 Thanks for using ${botName}. 💫*\n`;
          }

          Infinity.sendMessage(
            m.from,
            {
              video: { url: botVideo },
              gifPlayback: true,
              caption: textM,
              mentions: xyz,
            },
            { quoted: m }
          );
        } catch (err) {
          console.log(err);
          
          return Infinity.sendMessage(
            m.from,
            { text: `An internal error occurred while fetching the mod list.` },
            { quoted: m }
          );
        }

        break;

      case "ban":
      case "banuser":
        if (!text && !m.quoted) {
          
          return Infinity.sendMessage(
            m.from,
            { text: `Please tag a user to *Ban*!` },
            { quoted: m }
          );
        } else if (m.quoted) {
          var mentionedUser = m.quoted.sender;
        } else {
          var mentionedUser = mentionByTag[0];
        }
        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          
          return Infinity.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }
        userId = (await mentionedUser) || m.msg.contextInfo.participant;
        chechBanStatus = await checkBan(userId);
        checkUserModStatus = await checkMod(userId);
        userNum = userId.split("@")[0];
        globalOwner = global.owner;
        if (checkUserModStatus == true || globalOwner.includes(userNum)) {
          
          return m.reply(`Sorry, I can't ban an *Owner* or *Mod* !`);
        }
        if (chechBanStatus) {
          
          return Infinity.sendMessage(
            m.from,
            {
              text: `@${mentionedUser.split("@")[0]} is already *Banned* !`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        } else {
          banUser(userId).then(async () => {
            
            await Infinity.sendMessage(
              m.from,
              {
                text: `@${
                  mentionedUser.split("@")[0]
                } has been *Banned* Successfully by *${pushName}*`,
                mentions: [mentionedUser],
              },
              { quoted: m }
            );
          });
        }

        break;

      case "unban":
      case "unbanuser":
        if (!text && !m.quoted) {
          
          return m.reply(`Please tag a user to *Un-Ban*!`);
        } else if (m.quoted) {
          var mentionedUser = m.quoted.sender;
        } else {
          var mentionedUser = mentionByTag[0];
        }
        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          
          return Infinity.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }
        userId = (await mentionedUser) || m.msg.contextInfo.participant;
        chechBanStatus = await checkBan(userId);
        if (chechBanStatus) {
          unbanUser(userId).then(async () => {
            
            await Infinity.sendMessage(
              m.from,
              {
                text: `@${
                  mentionedUser.split("@")[0]
                } has been *Un-Banned* Successfully by *${pushName}*`,
                mentions: [mentionedUser],
              },
              { quoted: m }
            );
          });
        } else {
          
          return Infinity.sendMessage(m.from, {
            text: `@${mentionedUser.split("@")[0]} is not *Banned* !`,
            mentions: [mentionedUser],
            quoted: m,
          });
        }
        break;
/////////////////////////Chars//////////////////////////
case "setchar":
  const { botIDs } = await botsData();
  try {
    if (!text) {
      await doReact("❌");
      return Infinity.sendMessage(
        m.from,
        { text: `Please enter a character number between 0-${botIDs.length - 1} to set!` },
        { quoted: m }
      );
    }

    const intinput = parseInt(text);
    if (isNaN(intinput) || intinput < 0 || intinput > botIDs.length - 1) {
      await doReact("❌");
      return Infinity.sendMessage(
        m.from,
        { text: `Please enter a valid character number between 0-${botIDs.length - 1} to set!` },
        { quoted: m }
      );
    }

    const CData = await getCharDataById(intinput);
   // console.log(CData)
    checkChar = await getChar();
    if (checkChar === intinput) {
      await doReact("♻");
      return Infinity.sendMessage(
        m.from,
        {
          image: { url: CData.charLogo },
          caption: `Character number *${intinput}* - *${CData.charName}* is already the default!`,
        },
        { quoted: m }
      );
    }

    await doReact("✅");
    await setChar(intinput);
   // await Infinity.updateProfilePicture(botNumber, { url: CData.charLogo })
    await Infinity.sendMessage(
      m.from,
      {
        image: { url: CData.charLogo },
        caption: `Character number *${intinput}* - *${CData.charName}* has been set successfully by *${pushName}* 💫`,
      },
      { quoted: m }
    );
  } catch (e) {
    m.reply('Got some issue when changing chars, so I set it to default value !')
    await setChar('0');
    
  }
  break;

      case "charlist":
      case "charecterlist":
      const { botNames, BotIDs } = await botsData();
        
  await doReact("♦")  
  let teks = `Hello, ${pushName}\nThank you for using Infinity-UT\n\nHere all all charecter list:\n
  `
  botNames.forEach((botNames, index) => {
    teks += `${botNames} || ID: ${index}\n`;
  });      
        
   Infinity.sendMessage(
          m.from,
          { video: { url: 'https://graph.org/file/be0f916d2d520c76fc671.mp4' }, gifPlayback: true, caption: teks },
          { quoted: m }
        );
break;
        
/////////////////////////////////////////////////////////////////////////
      case "dmchatbot":
      case "pmchatbot":
        if (!text) {        
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}pmchatbot on`
          );
        }
        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          
          return Infinity.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }
        pmChatBotStatus = await checkPmChatbot();
        if (args[0] === "on") {
          if (pmChatBotStatus) {
            
            return Infinity.sendMessage(m.from, {
              text: `Private Chatbot is already *Enabled* !`,
              quoted: m,
            });
          } else {
            await activateChatBot();
            await m.reply(
              `*PM Chatbot* has been *Enabled* Successfully ! \n\nBot will reply to all chats in PM !`
            );
          }
        } else if (args[0] === "off") {
          if (!pmChatBotStatus) {
            
            return Infinity.sendMessage(m.from, {
              text: `Private Chatbot is already *Disabled* !`,
              quoted: m,
            });
          } else {
            await deactivateChatBot();
            await m.reply(`*PM Chatbot* has been *Disabled* Successfully !`);
          }
        } else {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}pmchatbot on`
          );
        }

        break;

      case "bangroup":
      case "bangc":
        if (!m.isGroup) {
          
          return m.reply(`This command can only be used in groups !`);
        }

        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          
          return Infinity.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }

        groupBanStatus = await checkBanGroup(m.from);
        if (groupBanStatus) {
          
          return Infinity.sendMessage(m.from, {
            text: `This group is already *Banned* !`,
            quoted: m,
          });
        } else {

          await banGroup(m.from);
          await m.reply(`*${groupName}* has been *Banned* Successfully !`);
        }

        break;

      case "unbangroup":
      case "unbangc":
        if (!m.isGroup) {
          
          return m.reply(`This command can only be used in groups !`);
        }

        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          
          return Infinity.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }

        groupBanStatus = await checkBanGroup(m.from);
        if (!groupBanStatus) {
          
          return Infinity.sendMessage(m.from, {
            text: `This group is not banned !`,
            quoted: m,
          });
        } else {
          
          await unbanGroup(m.from);
          await m.reply(`*${groupName}* has been *Unbanned* Successfully !`);
        }

        break;

      case "setbotmode":
      case "mode":
        if (!text) {
          
          return m.reply(
            `Please provide *Self / Private / Public* mode names !\n\n*Example:*\n\n${prefix}mode public`
          );
        }

        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          
          return Infinity.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }

        chechbotMode = await getBotMode();

        if (args[0] == "self") {
          if (chechbotMode == "self") {
            
            return m.reply(
              `Bot is already in *Self* mode !\n\nOnly *Bot Hoster (Bot number)* can use bot.`
            );
          } else {
            
            await setBotMode("self");
            await m.reply(`Bot has been set to *Self* mode Successfully !`);
          }
        } else if (args[0] == "private") {
          if (chechbotMode == "private") {
            
            return m.reply(
              `Bot is already in *Private* mode !\n\nOnly bot *Owners / Mods* can use bot.`
            );
          } else {
            
            await setBotMode("private");
            await m.reply(`Bot has been set to *Private* mode Successfully !`);
          }
        } else if (args[0] == "public") {
          if (chechbotMode == "public") {
            
            return m.reply(
              `Bot is already in *Public* mode !\n\nAnyone can use bot.`
            );
          } else {
            
            await setBotMode("public");
            await m.reply(`Bot has been set to *Public* mode Successfully !`);
          }
        } else {
          
          return m.reply(
            `Please provide *Self / Private / Public* mode names !\n\n*Example:*\n\n${prefix}mode public`
          );
        }

        break;

      default:
        break;
    }
  },
};
