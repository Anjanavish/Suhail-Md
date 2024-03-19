const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
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


  sessionName:process.env.SESSION_ID|| "SUHAIL_11_59_03_18_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVUFQV1Y2STFLQnk0UnhZWWNqTW1PYWczNkZNTFl0TkIxRFQwQzltV3JIbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImZHeGpySVFxRHNOdU9ITFY2elFIOW5iQ1FFeCtCMGFBRWdXZGpXRk0rQVE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUF5L3JyY0VJUzJ0blF4b0tyOVp6blBxaVpFU3h5aE9tWU9TSlYySVBGST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImRGSFZyenF6L1dySzlwWDh1RmQ2cUFiRXlNTGszY29MZDliVml6K0xFZzg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidU1nRjQwWk9hL1Z3QVBwZEJuWmxhcHhjM20vZ1B2cVAvQ0Z5dHNEQVYzVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkYrRlA4bjc3d2hnNTM4Ymhwelh2bmFCbDdncEVGVzdYWVlIMkNWVE8vSHM9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtQWRhcXFONlZxMGc3M2VBREI2MmQxN0tXNWIvQ0lVNEN5bkdzUE9YM1VrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQU9tcjh6TG9pejhSdzV3a3hna05heFMyNHNHN1gxdWMvbGk0c0kyY0ZpST1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJlcms5UUpCNThJc2JqMkxsRWFPK0xKRXU4ZWxSOG0wSVJYaFhuY2Z0SjhKekRUVmVpN3RISzVOb3JoMmlvRzdOeG85QWlrekErMzRJZTJ6ODF2WXREUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTM0LFwiYWR2U2VjcmV0S2V5XCI6XCJJOW14VGdOVEJjcTFYaFlJWmtnRmJGVCt0TWpqeit1OUd2U05pU2N4SjJJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTQ3MDY0MDcxOTVAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMTAyMzkxQjJCOUYwQjQ4NTgzOTY5REZEMUYwQzkxMURcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDc2MzE3OX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIklPZ1ljaThEVHJheDJkMVNVeU5fTHdcIixcInBob25lSWRcIjpcIjlhNzZmM2U2LWQ5ZTYtNDc2Yy04NmJkLTg2YzU3Njc4OGNhYlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMzdZb016bDVSRHpHVGhMOTd4eDhwRFc1d0RZPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsY2ZoUXFMdG9Bc0s1UUFiZTBPUjQxK2o3WEk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0lqYjNuRVFrdG5ncndZWUFTQUFLQUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ4bDE1U1Uvc1FxeENZQW9HeEJVTUc2OHZqckhOejg3alg0Ny9yaUJHekM4PVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiUFh5VVh4aUFxTlVCYVRqSytwYUMwUnhIbzVyVGxOMWFLcER1MGdBVk5uZW5YQlczeVR2Q3FJRm11Tkc4RU95OXhVKzRmRTR2ZnRQSDhxOGhQVS9JRHc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJxOHBmUldDcE81anRnSTAzZU0rYjYrVmxlNTR0Zkc5YU8zQjNMVjFHMkN2bTBveGJjaTdaT2dFeTNWdmZPSWV2K25VTFdPbWlCOFNsbmM0NXkxTmJBQT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiOTQ3MDY0MDcxOTU6MzhAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTgxMDY3NjAwNDE3MDAyOjM4QGxpZFwiLFwibmFtZVwiOlwi4o2j6p6w4barzaLqqp/igoHigoPgvJDJtOG0j+G0m8qPIOG0i8mqybTJouKDnfCfh6bwn4e0XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTQ3MDY0MDcxOTU6MzhAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCY1pkZVVsUDdFS3NRbUFLQnNRVkRCdXZMNDZ4emMvTzQxK08vNjRnUnN3dlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTA3NjMxNzEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTDBuXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDBuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYi9UaEdHY2VmQmtoSE9heGZQczFicmUvdTh5MnhkWW9YU2d6M25STGc2cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzg1Mjk5MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDc2MzE3NTEwNlwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "Xlicon_1da17510-f572-4009-9404-9387d79329e5",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
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
 
