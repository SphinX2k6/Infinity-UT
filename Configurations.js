require("dotenv").config();
const fs = require("fs");

let gg = process.env.MODS;
if (!gg) {
  gg = "917044585369";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://arisenpai:vxZEYWkWyRdscX9A@infinity-bot.ursqr7a.mongodb.net/?retryWrites=true&w=majority";
global.mainlogo = fs.readFileSync("./Assets/inflogo.jpg");
global.sessionId = process.env.SESSION_ID || "AriSenpai550318972";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Infinity Bot`;
global.author = process.env.AUTHOR || "by: Team Infinity";
global.port = process.env.PORT || "0";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
