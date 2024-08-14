require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "94755024175"
global.namaowner = "DanuXzz ジ"

//======== Setting Bot & Link ========//
global.namabot = "⚡𝐒𝐏𝐘-𝐗 𝐦𝐝" 
global.namabot2 = "⚡𝐒𝐏𝐘-𝐗 𝐦𝐝"
global.foother = "© 𝐒𝐏𝐘-𝐗 𝐦𝐝 𝐂𝐫𝐞𝐚𝐭𝐞𝐫ᶜʸᵇᵉʳˢᵖᵒʳᵗ"
global.idsaluran = "-"
global.linkgc = 'https://chat.whatsapp.com/KU0JoMjxgzxB3bMMuVeKCl'
global.linksaluran = "https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27"
global.linkyt = 'https://youtube.com/@danuxzz?si=G01y6Bc59PyYb5Wz'
global.linktele = "t.me/DanuXzzz"
global.packname = "Danu.Xz..."
global.author = "DanuXzz ジ"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url photo =========//
//See more Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://nixajaa.kangpanel.biz.id"
global.apikey = "ptla_x03INq0DcCtKe2j9prk5G91x12GoGVqnqNjj8HzjNJC"
global.capikey = "ptlc_x7LWoNNwQWDB67JOzzpYye1PcjMgh28URsgwoWi9eKM"

//========= Setting Payment =========//
//Payment Settings list
global.dana = "0774500937"
global.gopay = "0774500937"
global.ovo = ""
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "-"
global.apitoken1 = "---"
global.tld1 = "-"

//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";

//========= Setting Message =========//
global.msg = {
"error": "Error translations case solution",
"done": "Done ✅", 
"wait": "Bot Sending soon wait wait . . .", 
"group": "*• Group Only* Bot working Group only!", 
"private": "*• Private Chat* Bot working Private only!", 
"admin": "*• Admin Only* Give the Admin For Bot Owner!", 
"adminbot": "*• Bot Admin* Give the Admin For Bot And Bot is working Good", 
"owner": "*• Owner Only* Bot is Working For Owner Only!", 
"developer": "*• Developer Only* Bot is Working For Devoloper Only"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})