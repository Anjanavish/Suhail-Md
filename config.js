const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "🥰" ;  
global.video= "🥰" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="colombo,colombo,Sri lanka"
global.mongodb= process.env.MONGODB_URI || "https://cloud.mongodb.com/v2/65ab956359f550086676f676#/clusters"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Anjana-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029VaKtE6S8KMqi1N5g5m0Z";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029VaKtE6S8KMqi1N5g5m0Z" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file\/6e2537989425a0999f8ca.png" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "94706407195" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94706407195";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'Anjana",


  sessionName:process.env.SESSION_ID|| "SESSION_19_06_03_30_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tPSVZybkJtVWxGbWZmZEhjaWFIUXdqdDE3a2FXVlRFeUl3N3hYaFBtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVovSkFQRUEvbEN1QWh2bDRvcnMwVnd0NTMvUWVmL0kwckNoQVBkVkdYcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUDNBeEdYbTJHb0ZSVnRqdTROT1Bkb3c3VktTV3ptQVBGUktUYkZhZWtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzFJdlVleHZzbnB5eFR5RUxvMzhkR2hjdHJJQnBwVzBzeWtYaUtmR2cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRORjBYUXJvN1pTQnB5elk0UFhsVG83OURic0k1aW9NMldDbWZOOW1sbE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlErUXFGcUJzdEpqb3RVMVNRQlV4UC9xUWwyc2VlSE1LbmJ2dEZwZkRqakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEF1cEJNVU5NODViTkpjckRXN0NEeVhrTkpLVnl1aHBJYThORlEvQmNtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkI3TTBHdEdWOS8vVEFCMThsVWRuZmwyVmV2UUZZTzJBbDI1cUpuSTVHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRwbWxYTGlCL3Z5d2NxdlRIbm0wRTVmODV0UzgwQmJGUm4rZ0M5U3BXc2hhWmlkV2ZNZ2NzWWZNWlp0blJ1cHNYTTdNYWNDY3VyOFFSYmp4dHFBRkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6IkdlbklFS0E5UE1JTWdDMWMreFpOdFA2cDN4ZFRWRE0ycE5xUjJXWWpEYWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdZdXBWVG9FU2xtNlFzWlpGakVnOEEiLCJwaG9uZUlkIjoiYmQyOGQyNzktZGJiNi00ZmZmLTk4MDgtYmFmMmYxODZmYjE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJBVlhxNUdSNUNLVjNqZTh6YkJPR21QWHBSaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTlBTUG9VbU9sdDdCRVkyLy80OW9IeHp3Q289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0VOUUVTWkgiLCJtZSI6eyJpZCI6Ijk0NzA2NDA3MTk1OjUzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdmIzbkVRdmNXaHNBWVlCaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4bDE1U1Uvc1FxeENZQW9HeEJVTUc2OHZqckhOejg3alg0Ny9yaUJHekM4PSIsImFjY291bnRTaWduYXR1cmUiOiJUcytkR0RjNmh3elNKRWZhc0w4aVlhaDk1L2NBVE1tekw1VGlWOGJVZW1aWTR3UCtpWlFIcHphV0tVNmZQemllTVhSMEFWcFR4aDBsSDlJL3FveTJDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibjFPdUNzUmFzSW5VUlQwRzJyYnI1cEdaOVErS3IxUENncm9MaFJic1dsUGlaaVhZdXVBdUUyVVgxT0dNYllXWjgzSUpNYlpjanlnVHE1RnB1NlZsQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNjQwNzE5NTo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjWmRlVWxQN0VLc1FtQUtCc1FWREJ1dkw0Nnh6Yy9PNDErTy82NGdSc3d2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzExODI1NTk5fQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "26eie6g0n5i3oq0imwpji40kctjnunba8fmnem14ea64tv0ea8g4mniupqndbwx8",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "04f3bbc86ab7e92ba5fca80e248d38d5",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "OPENAI API KEY",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ANJANA",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
