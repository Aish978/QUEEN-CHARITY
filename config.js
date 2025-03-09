//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "923196093933";
global.owner = process.env.OWNER_NUMBER || "923196093933";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/knhyh3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0UrZklGWEUwT2RxNFNHWVRwZ3Q0cnlDR1huMTR3NUNEbXB4cnJkTkFXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2hPR3hRNGxmc0FEYlZGdUZieHN2RVJ0dU90bDRKZng0NDJBcUlLV2JuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRmFkYWFIL2wrSi9keGdqWlI4cTRlcWo4TVVMTmpWdWlZVVFFSkU4RjI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLbG4xVGtDYWN4SVc1SUN2WGR6UlRqWWhET3hVaXRwM05LZWhMbFoxSEhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKc3ZsbnRvam5oUjROZVlhVjZMcjBOQldBaFlPYkd2VDdBSWdPL1ByWE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVMZnkvbE1XdDA4WVpqUkFXYUY2QzluQmF6TTNhNmNZT2RUSWJzNElta3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0N5NENWcmV4bzlnT09SbHd3Vjk0bjE1YUZydmFaemFyY2hJMkVwdEhYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5TMnZhRXJyOWR3WlByOVhwSzZ6ZmMrWjVZeGprMUtvQ0ZGZEpUaU9BRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlzYkR1UmJUQjREdFpQL3hKT01nem0wMlQ3WGxwMWJUTUpMSVl6WENEN0xGeCtsc2w1bGJUYUpqdS9oajkyR3BXLys2R0Z2cmJMVTVBR0dvOTZUaGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IkU4MW1pMzJFMENyclpjc0UzMWZndFpkZENMR25BOWNYUk9majgvblppT3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTk2MDkzOTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEwNjcyQTI2NjE0QTZDOTRBMUE0OUZCMkRBNEUzMDUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDE1MTc2MDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5NjA5MzkzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QjY3RTFDOTUwNzNGQjkzNTRCNzVBMDBERDUxRTcyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxNTE3NjAyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfelpGbHR6M1RScWVpUWphUWpPSGZnIiwicGhvbmVJZCI6ImVhMDk2YmM1LWMzMDUtNDZlMi1hNTEwLWM5ZTRlNDQ5OTU3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1eUdTWjlmd0FXc0lYTkxkZHBxY2VXbGlpZ0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG03L2ZRQ3d3L08rNFRLRkl1Vk10OHpIRW9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlA0WEI2WEhCIiwibWUiOnsiaWQiOiI5MjMxOTYwOTM5MzM6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+kjSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzN6b3A4REVKTG10YjRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYnkyMmtxQUxzekxRRVY1azJ0OGlPa2ZvbnQ0TS9sTm9DUTFNWXh0Mk9RRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVytZNlUwWTl1dEdYSU1XMTlpOU1JVDhveDhSQkdrTWZhbTZ1WXQyTHBvYkJNaFV1MXduamFYYnZYSGFzOGVvcjN6eHcwQzU0eWNiSS9Mc0daejVtRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InRpMFgwMVNDV0pJbEdvd3pKVVIydXFNNlBIM1o1KzVjbWhZeWpZNjRIUmZsYlRsYUFoQ0VtMFlOSkwvNmpNOGhmbE4xQjN6TVlCRGV0RDEwTkV1dmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTk2MDkzOTMzOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc4dHRwS2dDN015MEJGZVpOcmZJanBINko3ZURQNVRhQWtOVEdNYmRqa0IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE1MTc2MDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2VyIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_CHARITY™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒🫅",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
