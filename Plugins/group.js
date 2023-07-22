const fs = require("fs");
const Jimp = require("jimp");
const moment = require("moment-timezone");
const {
  setWelcome, // ------------------- SET WELCOME MESSAGE
  checkWelcome, // ----------------- CHECK WELCOME MESSAGE STATUS
  delWelcome, // ------------------- DELETE WELCOME MESSAGE
  setAntilink, // ------------------ SET ANTILINK
  checkAntilink, // ---------------- CHECK ANTILINK STATUS
  delAntilink, // ------------------ DELETE ANTILINK
  setGroupChatbot, // -------------- SET GROUP CHATBOT
  checkGroupChatbot, // ------------ CHECK GROUP CHATBOT STATUS
  delGroupChatbot,
} = require("../System/MongoDB/MongoDb_Core");
let mergedCommands = [
  "admins",
  "admin",
  "setgcname",
  "delete",
  "antilink",
  "welcome",
  "del",
  "demote",
  "gclink",
  "grouplink",
  "group",
  "gc",
  "groupinfo",
  "gcinfo",
  "hidetag",
  "htag",
  "leave",
  "promote",
  "profile",
  "add",
  "remove",
  "revoke",
  "setgcdesc",
  "setppgc",
  "tagall",
  "chatbotgc",
  "antilink",
  "welcome",
];

module.exports = {
  name: "groupanagement",
  alias: [...mergedCommands],
  uniquecommands: [
    "admins",
    "setgcname",
    "delete",
    "demote",
    "gclink",
    "antilink",
    "welcome",
    "group",
    "gc",
    "gcinfo",
    "tagall",
    "hidetag",
    "leave",
    "promote",
    "profile",
    "add",
    "remove",
    "revoke",
    "setgcdesc",
    "setppgc",
    "chatbotgc",
  ],
  description: "All Audio Editing Commands",
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
    let messageSender = m.sender;
    let quotedsender = m.quoted ? m.quoted.sender : mentionByTag[0];
    switch (inputCMD) {
      case "admins":
      case "admin":
        if (!isMedia) {
          message = m.quoted ? m.quoted.msg : "『 *Attention Admins* 』";
        } else {
          message =
            "『 *Attention Admins* 』\n\n*🎀 Message:* Check this Out !";
        }
        
        Infinity.sendMessage(
          m.from,
          { text: message, mentions: groupAdmin },
          { quoted: m }
        );
        break;


case 'profile':
					neme = args.join(" ")
					bet = `${messageSender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushName}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*\nBy Team Infinity`
userPfp = await Infinity.profilePictureUrl(m.sender, "image");
Infinity.sendMessage(m.from, { image: { url: userPfp }, caption: profile, mentions: [bet]},{quoted:m})
break

        
      case "setgcname":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        if (!text) {
          
          return m.reply(
            `Please provide a new group name !\n\nExample: *${prefix}setgcname Bot Testing*`
          );
        }
        

        oldGCName = metadata.subject;

        try {
          ppgc = await Infinity.profilePictureUrl(m.from, "image");
        } catch {
          ppgc = botImage1;
        }

        await Infinity.groupUpdateSubject(m.from, text)
          .then((res) =>
            Infinity.sendMessage(
              m.from,
              {
                image: { url: ppgc, mimetype: "image/jpeg" },
                caption: `*『 Group Name Updated 』*\n\n_🔶 Old Name:_\n*${oldGCName}*\n\n_🔷 New Name:_\n*${text}*\n`,
              },
              { quoted: m }
            )
          )
          .catch((err) => replay(jsonformat(err)));
        break;

      case "delete":
      case "del":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!m.quoted) {
          
          return m.reply(`Please *Reply* to a message to delete it !`);
        }
        if (!isBotAdmin) {
          if (!m.quoted.sender.includes(botNumber)) {
            
            return m.reply(
              `Sorry, Without *Admin* permission, I can only delete my own messages !`
            );
          }
          key = {
            remoteJid: m.from,
            fromMe: true,
            id: m.quoted.id,
          };
          
          await Infinity.sendMessage(m.from, { delete: key });
        } else {
          if (!isAdmin) {
            
            return m.reply(
              `Sorry, only *Admins* can delete other's messages !`
            );
          }
          key = {
            remoteJid: m.from,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender,
          };

          await Infinity.sendMessage(m.from, { delete: key });
        }

        break;

      case "demote":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        if (quotedsender.includes(m.sender)) {
          
          return m.reply(`You can't demote yourself !`);
        }
        if (quotedsender.includes(botNumber)) {
          
          return m.reply(`Sorry, I can't demote myself !`);
        }

        if (!text && !m.quoted) {
          
          return m.reply(`Please tag an user to *Demote*!`);
        } else if (m.quoted) {
          mentionedUser = m.quoted.sender;
        } else {
          mentionedUser = mentionByTag[0];
        }

        userId = (await mentionedUser) || m.msg.contextInfo.participant;
        if (!groupAdmin.includes(userId)) {
          return Infinity.sendMessage(
            m.from,
            {
              text: `@${
                mentionedUser.split("@")[0]
              } Senpai is not an *Admin* of this group!`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        }
        
        try {
          await Infinity.groupParticipantsUpdate(m.from, [userId], "demote").then(
            (res) =>
              Infinity.sendMessage(
                m.from,
                {
                  text: `Sorry @${
                    mentionedUser.split("@")[0]
                  } Senpai, you have been *Demoted* by @${
                    messageSender.split("@")[0]
                  } !`,
                  mentions: [mentionedUser, messageSender],
                },
                { quoted: m }
              )
          );
        } catch (error) {
          
          Infinity.sendMessage(
            m.from,
            {
              text: `An error occured while trying to demote @${
                mentionedUser.split("@")[0]
              } Senpai !\n\n*Error:* ${error}`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        }

        break;

      case "gclink":
      case "grouplink":
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        
        let link = await Infinity.groupInviteCode(m.from);
        let linkcode = `https://chat.whatsapp.com/${link}`;

        try {
          ppgc = await Infinity.profilePictureUrl(m.from, "image");
        } catch {
          ppgc = botImage1;
        }

        try {
          await Infinity.sendMessage(
            m.from,
            {
              image: { url: ppgc, mimetype: "image/jpeg" },
              caption: `\n_🎀 Group Name:_ *${metadata.subject}*\n\n_🧩 Group Link:_\n${linkcode}\n`,
            },
            { quoted: m }
          );
        } catch (err) {
          Infinity.sendMessage(
            m.from,
            { text: `${mess.botadmin}` },
            { quoted: m }
          );
        }
        break;

      case "group":
      case "gc":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        

        if (text === "close") {
          await Infinity.groupSettingUpdate(m.from, "announcement").then((res) =>
            m.reply(`Group has been closed!`)
          );
        } else if (text === "open") {
          await Infinity.groupSettingUpdate(m.from, "not_announcement").then(
            (res) => m.reply(`Group has been opened!`)
          );
        } else {
          await Infinity.sendMessage(
            m.from,
            {
              image: { url: botImage2 },
              caption: `\n*「 Group Message Settings 」*\n\nSelect an option below.\n\n*_Usage:_*\n\n*${prefix}group open*\n*${prefix}group close*\n`,
            },
            { quoted: m }
          );
        }

        break;

      case "groupinfo":
      case "gcinfo":
        if (!m.isGroup) {
          
          return m.reply(`This command can only be used in groups!`);
        }
        
        try {
          ppgc = await Infinity.profilePictureUrl(m.from, "image");
        } catch {
          ppgc = botImage1;
        }
        participants = m.isGroup ? await metadata.participants : "";
        groupAdmins = m.isGroup
          ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
          : "";
        groupOwner = m.isGroup ? metadata.owner : "";
        desc = metadata.desc ? metadata.desc : "No Description";
        let txt = `                 *『 Group Info 』*\n\n_🎀 Group Name:_ *${
          metadata.subject
        }*\n\n_🧩 Group Description:_\n${desc}\n\n_👑 Group Owner:_ @${
          metadata.owner.split("@")[0]
        }\n_💫 Group Created on:_ *${moment(`${metadata.creation}` * 1000)
          .tz("Asia/Kolkata")
          .format("DD/MM/YYYY")}*\n_📛 Total Admins:_ *${
          groupAdmins.length
        }*\n_🎈 Total Participants:_ *${metadata.participants.length}*\n`;

        await Infinity.sendMessage(
          m.from,
          {
            image: { url: ppgc, mimetype: "image/jpeg" },
            caption: txt,
            mentions: [metadata.owner],
          },
          { quoted: m }
        );
        break;

      case "hidetag":
      case "htag":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isMedia) {
          message2 = m.quoted
            ? m.quoted.msg
            : args[0]
            ? args.join(" ")
            : "『 *Attention Everybody* 』";
        } else {
          message2 =
            "『 *Attention Everybody* 』\n\n*🎀 Message:* Check this Out !";
        }

        
        Infinity.sendMessage(
          m.from,
          { text: message2, mentions: participants.map((a) => a.id) },
          { quoted: m }
        );
        break;

      case "join":
       if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
    if (!text) return m.reply("🔍 Please provide the group link")
        let result = text[0].split('https://chat.whatsapp.com/')[1]
        m.reply('Chotto Matte!')
    await Infinity.groupAcceptInvite(result)
m.reply(`Joined`).catch((e)=>{
  m.reply('Unknown Error Occured')
})        
break 
        
      case "leave":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        
        await Infinity.sendMessage(m.from, {
          image: { url: "https://wallpapercave.com/wp/wp9667218.png" },
          caption: `I'm Leaving this group on request... \n\nTake care everyone :)`,
          mentions: participants.map((a) => a.id),
          quoted: m,
        }).then(async () => {
          Infinity.groupLeave(m.from).catch((e) => {
            Infinity.sendMessage(
              m.from,
              { text: `An error Occurd !` },
              { quoted: m }
            );
          });
        });
        break;

      case "promote":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        if (quotedsender.includes(m.sender)) {
          
          return m.reply(`You are already an *Admin* of this group!`);
        }
        if (quotedsender.includes(botNumber)) {
          
          return m.reply(`I am already an *Admin* of this group!`);
        }

        if (!text && !m.quoted) {
          
          return m.reply(`Please tag an user to *Promote*!`);
        } else if (m.quoted) {
          mentionedUser = m.quoted.sender;
        } else {
          mentionedUser = mentionByTag[0];
        }

        userId = (await mentionedUser) || m.msg.contextInfo.participant;
        if (groupAdmin.includes(userId)) {
          return Infinity.sendMessage(
            m.from,
            {
              text: `@${
                mentionedUser.split("@")[0]
              } Senpai is already an *Admin* of this group!`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        }
        
        try {
          await Infinity.groupParticipantsUpdate(m.from, [userId], "promote").then(
            (res) =>
              Infinity.sendMessage(
                m.from,
                {
                  text: `Congratulations  @${
                    mentionedUser.split("@")[0]
                  } Senpai 🥳, you have been *Promoted* by @${
                    messageSender.split("@")[0]
                  } !`,
                  mentions: [mentionedUser, messageSender],
                },
                { quoted: m }
              )
          );
        } catch (error) {
          Infinity.sendMessage(
            m.from,
            {
              text: `An error occured while trying to demote @${
                mentionedUser.split("@")[0]
              } Senpai !\n\n*Error:* ${error}`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        }

        break;

      case "add":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (!text ) {
          
          return Infinity.sendMessage(
            m.from,
            { text: `Please add number of a user to *Add* !` },
            { quoted: m }
          );
        }
     try {
        let usersadd = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

        await Infinity.groupParticipantsUpdate(m.from, [usersadd], "add").then(
          (res) =>
              m.reply(`${usersadd} is been added!`)
        );
     } catch(e) {
       try {
const code = await Infinity.groupInviteCode(m.from)
//m.reply("https://chat.whatsapp.com/" + code)
let dm = '📪Sent you the Group Link in personal message.'
let lemo = `*Invite link:* https://chat.whatsapp.com/${code}`
//await Infinity.sendMessage(m.from,{text: `*${pushName}* have a look in your DM`},{quoted:m})
  await Infinity.sendMessage(usersadd,{text:lemo},{quoted:m})
       } catch(e) {
         m.reply('Sorry Failed to Add that User!')
       }
     }
        break;
        
      case "remove":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        if (quotedsender.includes(m.sender)) {
          
          return m.reply(`You cannot *Remove* yourself from this group !`);
        }
        if (quotedsender.includes(botNumber)) {
          
          return m.reply(`I cannot *Remove* myself from this group !`);
        }

        if (!text && !m.quoted) {
          
          return Infinity.sendMessage(
            m.from,
            { text: `Please tag or add number of a user to *Remove* !` },
            { quoted: m }
          );
        } else if (m.quoted) {
          var mentionedUser = m.quoted.sender;
        } else {
          var mentionedUser = mentionByTag[0];
        }

        let users = (await mentionedUser) || m.msg.contextInfo.participant || text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
       
        if (groupAdmin.includes(users)) {
          return Infinity.sendMessage(
            m.from,
            {
              text: `*Command Rejected !* @${
                mentionedUser.split("@")[0]
              } Senpai is an *Admin* of this group so you are not allowed to remove him !`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        }

        await Infinity.groupParticipantsUpdate(m.from, [users], "remove").then(
          (res) =>
            Infinity.sendMessage(
              m.from,
              {
                text: `@${
                  mentionedUser.split("@")[0]
                } has been *Removed* Successfully from *${metadata.subject}*`,
                mentions: [mentionedUser],
              },
              { quoted: m }
            )
        );

        break;

      case "setppgc":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (!/image/.test(mime)) {
          
          return Infinity.sendMessage(
            m.from,
            {
              text: `Send/reply Image With Caption ${
                prefix + "setgcpp"
              } to change the Profile Pic of this group.`,
            },
            { quoted: m }
          );
        }
        

        let quotedimage = await Infinity.downloadAndSaveMediaMessage(quoted);
        var { preview } = await generatePP(quotedimage);

        await Infinity.query({
          tag: "iq",
          attrs: {
            to: m.from,
            type: "set",
            xmlns: "w:profile:picture",
          },
          content: [
            {
              tag: "picture",
              attrs: { type: "image" },
              content: preview,
            },
          ],
        });
        fs.unlinkSync(quotedimage);

        ppgc = await Infinity.profilePictureUrl(m.from, "image");

        Infinity.sendMessage(
          m.from,
          {
            image: { url: ppgc },
            caption: `\nGroup Profile Picture has been updated Successfully by @${
              messageSender.split("@")[0]
            } !`,
            mentions: [messageSender],
          },
          { quoted: m }
        );

        break;

      case "setgcdesc":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (!text && !m.quoted) {
          
          return Infinity.sendMessage(
            m.from,
            { text: `Please provide a new group description !` },
            { quoted: m }
          );
        }

        

        try {
          ppgc = await Infinity.profilePictureUrl(m.from, "image");
        } catch {
          ppgc = botImage1;
        }

        var newGCdesc = m.quoted ? m.quoted.msg : text;

        await Infinity.groupUpdateDescription(m.from, newGCdesc).then((res) =>
          Infinity.sendMessage(
            m.from,
            {
              image: { url: ppgc, mimetype: "image/jpeg" },
              caption: `*『 Group Description Changed 』*\n\n_🧩 New Description:_\n*${newGCdesc}*`,
            },
            { quoted: m }
          )
        );

        break;

      case "revoke":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (m.from == "120363040838753957@g.us") {
          
          return m.reply(
            "Sorry, this command is not allowed in *Infinity Support Group* !\n\nYou are not allowed to change support group link !"
          );
        }
        

        await Infinity.groupRevokeInvite(m.from).then((res) =>
          Infinity.sendMessage(
            m.from,
            { text: `Group link has been *Updated* Successfully!` },
            { quoted: m }
          )
        );

        break;

      case "tagall":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }
        if (!isMedia) {
          var message2 = m.quoted
            ? m.quoted.msg
            : args[0]
            ? args.join(" ")
            : "No message";
        } else {
          message2 = "Check this Out !";
        }

        let mess = `            『 *Attention Everybody* 』
    
*⚜️ Tagged by:* @${m.sender.split("@")[0]}
            
*🧩 Message:* ${message2};
│\n`;
        for (let mem of participants) {
          mess += `┟ @${mem.id.split("@")[0]}\n`;
        }
        mess += `╰────────────⊰\n\n                    *Thank You*\n`;

        
        Infinity.sendMessage(
          m.from,
          { text: mess, mentions: participants.map((a) => a.id) },
          { quoted: m }
        );

        break;

      case "chatbotgc":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }

        if (!text) {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}chatbotgc on`
          );
        }
        chatbotGCStatus = await checkGroupChatbot(m.from);
        if (args[0] == "on") {
          if (chatbotGCStatus) {
            
            return m.reply(`*Group Chatbot* is already *Enabled* !`);
          }
          
          await setGroupChatbot(m.from);
          await m.reply(
            `*Group Chatbot* has been *Enabled* Successfully ! \n\nBot will not reply to messages where bot is mentioned!`
          );
        } else if (args[0] == "off") {
          if (!chatbotGCStatus) {
            
            return m.reply(`*Group Chatbot* is already *Disabled* !`);
          }
          
          await delGroupChatbot(m.from);
          await m.reply(`*Group Chatbot* has been *Disabled* Successfully !`);
        } else {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}chatbotgc on`
          );
        }

        break;

      case "antilink":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (!text) {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}antilink on`
          );
        }
        antilinkStatus = await checkAntilink(m.from);
        if (args[0] == "on") {
          if (antilinkStatus) {
            
            return m.reply(`*Antilink* is already *Enabled* !`);
          }
          
          await setAntilink(m.from);
          await m.reply(
            `*Antilink* has been *Enabled* Successfully ! \n\nBot will remove all links from messages!`
          );
        } else if (args[0] == "off") {
          if (!antilinkStatus) {
            
            return m.reply(`*Antilink* is already *Disabled* !`);
          }
          
          await delAntilink(m.from);
          await m.reply(`*Antilink* has been *Disabled* Successfully !`);
        } else {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}antilink on`
          );
        }

        break;

      case "welcome":
        if (!isAdmin) {
          
          return m.reply(`*You* must be *Admin* in order to use this Command!`);
        }
        if (!isBotAdmin) {
          
          return m.reply(`*Bot* must be *Admin* in order to use this Command!`);
        }

        if (!text) {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}welcome on`
          );
        }
        const welcomeStatus = await checkWelcome(m.from);
        if (args[0] == "on") {
          if (welcomeStatus) {
            
            return m.reply(`*Welcome* is already *Enabled* !`);
          }
          
          await setWelcome(m.from);
          await m.reply(
            `*Welcome/Goodbye* messages are *Enabled* Successfully !`
          );
        } else if (args[0] == "off") {
          if (!welcomeStatus) {
            
            return m.reply(`*Welcome* is already *Disabled* !`);
          }
          
          await delWelcome(m.from);
          await m.reply(
            `*Welcome/Goodbye* messages are *Disabled* Successfully !`
          );
        } else {
          
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}welcome on`
          );
        }

        break;

      default:
        break;
    }
  },
};

async function generatePP(buffer) {
  const jimp = await Jimp.read(buffer);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG),
  };
}
