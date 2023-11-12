/**
 * Very Thanks To Dika Ardnt.
 * Amirul
 * Contact Me on wa.me/6285849261085
 * Original https://github.com/DikaArdnt
 * Remake : Pebri
 */
 
require('@fnc')
require('module-alias/register')
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    downloadContentFromMessage,
    generateWAMessageFromContent,
    proto,
    delay,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const util = require('util')
const path = require('path')
const yts = require("yt-search");
const ytmp4 = require("ytmp4");
const dl = require('@bochilteam/scraper-sosmed');
const JoApi = require('@phaticusthiccy/open-apis')
const axios = require('axios')
const ytdl = require('ytdl-core')
const gugel = require('googlethis')
const fakeyou = require('fakeyou.js')
const cheerio = require('cheerio')
const rmvbg = require('removebg-wrapper')
const translate = require('@vitalets/google-translate-api')
const ms = require("ms")
const os = require("os")
const moment = require("moment-timezone");
const { config, createAudioFromText } = require('tiktok-tts')
const { promisify } = require('util')
const { pipeline } = require('stream')
const { color } = require('./lib/color.js')
const { pinterest, stickersearch, ttdownloader, fbdown, fbDown2, igstalk, igstory, linkwa, styletext } = require("./lib/scraper/nyekrep")
const { vitsUmamusumeVoiceSynthesizer } = require("./lib/scraper/ttswibu")
const { Download } = require("./lib/scraper/download")
const { yanz, check } = require("./lib/scraper/startme")
const { downloadYouTube, starTask, taskStatus } = require("./lib/scraper/youtube")
const { aiovideodl } = require("./lib/scraper/downloader")
const { isTicTacToe, getPosTic } = require("./lib/tictactoe.js");
const { TiktokDL } = require("./lib/scraper/newtt.js");
const { addCommands, checkCommands, deleteCommands } = require("./lib/autoresp.js")
const { upload } = require("./lib/uploads.js")
const { jadianime } = require("./lib/scraper/jadianime.js")
const { youtube, searchResult } = require("./lib/scraper/ytdl.js")
const { TiktokDownloader } = require("./lib/scraper/tiktokdl.js")
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game.js");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance } = require("./lib/limit.js");
const { addPrem, deletePrem, checkPrem} = require("./lib/prem2.js");
const { twitter } = require("./lib/scraper/twitter.js")
const { exec, spawn, execSync } = require("child_process")
const tictac = require("./lib/tictac");
const _prem = require("./lib/premium");
const Replicate = require('replicate')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
  const replicate = new Replicate({
  auth: "r8_IrWhmFuiXDTW4y0ZVXvBB6ODmH56ifn1mTjWa", //Api Gueh
});

//SetGrupBCPOIN
let gcku  = `6281319944917-1610752237@g.us`

//ssession tt
const tiktokresi = "2a78c6d3b550e355dc01cb366b146ab4" //Api Punya Gua anjing

// Game
let soal = [];
let tebakgambar = []
let tebakkata = []
let siapakahaku = []
let caklontong = []
let teki = []
let tod = []
let tebaklagu = []
const { OpenAI } = require("openai");
const openai = new OpenAI({
    apiKey: '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',
  });

const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, otpkode, makeid, getRandom, getGroupAdmins } = require('./lib/function')
const { P } = require('pino')
const { decode } = require('punycode')


/// DATABASE
let daftar = JSON.parse(fs.readFileSync('./assets/db/daftar.json'));
let antilink = JSON.parse(fs.readFileSync('./assets/db/antilink.json'));
let truth = JSON.parse(fs.readFileSync('./assets/db/truth.json'));
let dare = JSON.parse(fs.readFileSync('./assets/db/dare.json'));
let premium = JSON.parse(fs.readFileSync('./assets/db/premium.json'));
let commandsDB = JSON.parse(fs.readFileSync('./assets/db/commands.json'));
let prem2 = JSON.parse(fs.readFileSync('./assets/db/prem2.json'));
let token = JSON.parse(fs.readFileSync('./assets/db/token.json'));
let chatbot = JSON.parse(fs.readFileSync('./assets/db/chatbot.json'));
let limit = JSON.parse(fs.readFileSync('./assets/db/limit.json'));
let balance = JSON.parse(fs.readFileSync('./assets/db/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./assets/db/glimit.json'));


module.exports = bob = async (bob, m, chatUpdate, store, welcome, mentioned) => {
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const content = JSON.stringify(m.message)
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const CmD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await bob.decodeJid(bob.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = [botNumber, ...prem2].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
		const Tanggal = moment.tz('Asia/Jakarta').format('DD')
        const isMedia = /image|video|sticker|audio/.test(mime)
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)  

        const chats = m.type === "conversation" && m.message.conversation ? m.message.conversation : m.type === "imageMessage" && m.message.imageMessage.caption ? m.message.imageMessage.caption : m.type === "videoMessage" && m.message.videoMessage.caption ? m.message.videoMessage.caption : m.type === "extendedTextMessage" && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : m.type === "buttonsResponseMessage" && quotedMsg.fromMe && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : 
        m.type === "templateButtonReplyMessage" && quotedMsg.fromMe && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.type === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId : m.type === "listResponseMessage" && quotedMsg.fromMe && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : "";
        const mentionByTag = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionUser = m.type == "extendedTextMessage" ? m.message.extendedTextMessage.contextInfo.mentionedJid || [] : [] 

        // Group
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await bob.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = groupAdmins.includes(m.sender)
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const isToken = token.includes(q) || false
        const DaftarAnjay = daftar.includes(m.sender)
        const isWelcome = m.isGroup ? welcome.includes(m.chat) ? true : false : false
        const isChatBot = chatbot.includes(m.chat) ? true : false




        //Extensi Media Message
        const isImage = (m.mtype == 'imageMessage')
		const isVideo = (m.mtype == 'videoMessage')
		const isSticker = (m.mtype == 'stickerMessage')
		const isAudio = (m.mtype == 'audioMessage')
		const isDocument = (m.mtype == 'documentMessage')
		const isQuotedMsg = (m.mtype == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
    


        // Public & Self
        if (!bob.public) {
            if (!m.key.fromMe) return
        }


        //** cmd
        const CmDPlugins = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null

        //** plugins
        for (let name in plugins) {
            let plugin = plugins[name]
            if (plugin.CmD && plugin.CmD.includes(CmDPlugins)) {
                let turn = plugin.CmD instanceof Array ?
                    plugin.CmD.includes(CmDPlugins) :
                    plugin.CmD instanceof String ?
                    plugin.CmD == CmDPlugins :
                    false
                if (!turn) continue 
                try {
                await plugin.exec(m, bob, quoted, pushname, {
                    args,
                    CmD,
                    text,
                    prefix,
                    command
                })
                } catch (e) {
                   m.reply(util.format(`*(⁠☉⁠｡⁠☉⁠)!* Upss... error pada plugins *_${plugin.CmD}_*\n\n${e}`))
                }
                console.log('pesan melalui plugins sistem')
            }
        }

        		// Premium
		_prem.expiredCheck(bob, premium)


        // function
        async function instagram(url) {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }

         
          
        // Anti link
        if (m.isGroup && !isCreator && isAntiLink && !isGroupAdmins && isBotGroupAdmins){
            if (body.includes(`https://chat.whatsapp.com`)) {
                bob.sendMessage(m.chat, {text: `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`})
                var number = m.sender
      bob.groupParticipantsUpdate(m.chat, [number], "remove")
            }
        }
        const reply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: m})
		}
        const fakereply = (teks) => {
			bob.sendMessage(m.chat, { text: teks }, { quoted: fake})
		}
        const sendbut = (jid, text, pref, textbut, footer) => {
			let buttons = [{ buttonId: pref, buttonText: { displayText: textbut }, type: 1 }]
            let buttonMessage = {text: text, footer: footer, buttons: buttons, headerType: 2 }
            bob.sendMessage(jid, buttonMessage, { quoted: m })
        }
        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function ngetag(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = bob.sendMessage(m.chat, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = bob.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}
        function monospace(string) {
            return '```' + string + '```'
            }
        const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return bob.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}

        async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
        
        const jimp_1 = require('jimp')
        async function pepe(media) {
        const jimp = await jimp_1.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
            preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
        }
    }
    
//fake

const fake2 = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast" //status@broadcast
        } : {})
    },
    message: {
        "extendedTextMessage": {
            "text": `Hallo ${pushname}`,
            "title": `Hmm`,
            'jpegThumbnail': global.thumb
        }
    }
}
const fdoc = {
    key: { participant: "0@s.whatsapp.net" },
    message: { documentMessage: { title: `JOY!`, jpegThumbnail: global.thumb } },
  };

  const ftroli = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
    },
    message: {
      orderMessage: {
        itemCount: prem2.length,
        status: 200,
        thumbnail: fs.readFileSync(`./media/Joy/1.png`),
        surface: 200,
        message: `𝒥𝒪𝒴!`,
        orderTitle: "Arasyaaaaa.",
        sellerJid: "0@s.whatsapp.net",
      },
    },
    contextInfo: { forwardingScore: 999, isForwarded: true },
    sendEphemeral: true,
  };
const fake = {
    key: { 
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "41798898139-1429460331@g.us" } : {}) 
    },
    message: { 
    "extendedTextMessage": {
    "text": `Hallo _*${pushname} 👋*_`,
    "title": `Hmm`,
    'jpegThumbnail': fs.readFileSync('media/logo.png')
    }
    } 
    }

//test
    

    // GAME 
    cekWaktuGame(bob, tebakgambar)
    if (isPlayGame(m.chat, tebakgambar) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakgambar)) {
    var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakgambar)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakgambar`
    bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    tebakgambar.splice(getGamePosi(m.chat, tebakgambar), 1)
    giveLimit(sender, parseInt(`2`), limit)
}
}
cekWaktuGame(bob, tebakkata)
if (isPlayGame(m.chat, tebakkata) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebakkata)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebakkata)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakkata`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        tebakkata.splice(getGamePosi(m.chat, tebakkata), 1)
        giveLimit(sender, parseInt(`2`), limit)
    }
}
cekWaktuGame(bob, siapakahaku)
if (isPlayGame(m.chat, siapakahaku) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, siapakahaku)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, siapakahaku)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /siapakahaku`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        siapakahaku.splice(getGamePosi(m.chat, siapakahaku), 1)
        giveLimit(sender, parseInt(`2`), limit)
    }
}
cekWaktuGame(bob, caklontong)
if (isPlayGame(m.chat, caklontong) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, caklontong)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, caklontong)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /caklontong`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    caklontong.splice(getGamePosi(m.chat, caklontong), 1)
    giveLimit(sender, parseInt(`2`), limit)
}
}
cekWaktuGame(bob, soal)
if (isPlayGame(m.chat, soal) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, soal)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, soal)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /soal`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
    soal.splice(getGamePosi(m.chat, soal), 1)
    giveLimit(sender, parseInt(`2`), limit)
}
}
cekWaktuGame(bob, tebaklagu)
if (isPlayGame(m.chat, tebaklagu) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, tebaklagu)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, tebaklagu)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebaklagu`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        tebaklagu.splice(getGamePosi(m.chat, tebaklagu), 1)
        giveLimit(sender, parseInt(`2`), limit)
        }
    }
cekWaktuGame(bob, teki)
if (isPlayGame(m.chat, teki) ) {
    if (m.text.toLowerCase() == getJawabanGame(m.chat, teki)) {
        var texttg = `*Selamat @${m.sender.split("@")[0]} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(m.chat, teki)}\nKode Game : ${makeid(15)}\n\nIngin bermain lagi? Ketik /tebakkimia`
        bob.sendMessage(m.chat, {text: texttg, mentions: [m.sender]}, {quoted: m}) 
        teki.splice(getGamePosi(m.chat, teki), 1)
        giveLimit(sender, parseInt(`2`), limit)
        }
    }
    //Akhir
    //Auto Respon
    for (var i = 0; i < commandsDB.length ; i++) {
        if (body.toLowerCase() === commandsDB[i].pesan) {
            fakereply(commandsDB[i].balasan)
        }
          }

    // Premium
    _prem.expiredCheck(bob, premium)
    let yutu = `https://youtu${m.text.slice(13)}`

if (m.text.includes(yutu)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = yutu
const streamPipeline = promisify(pipeline);
                        const audioStream = ytdl(yutu, {
                            filter: 'audioonly',
                            quality: 'highestaudio',
                          });
                          const sampah = os.tmpdir();
                          const writableStream = fs.createWriteStream(`${sampah}/${title}.mp3`);
                        
                          await streamPipeline(audioStream, writableStream);
                          bob.sendMessage(m.chat, {audio: {url: `${sampah}/${title}.mp3`}, fileName: title, mimetype: 'audio/mp4'}, {quoted: m})
}
let tt = `https://vt.tiktok${m.text.slice(17)}`

if (m.text.includes(tt)) {
                    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
                var url = tt
                try {
                TiktokDL(url).then ( data => {
                bob.sendMessage(m.chat, {video: {url: data.result.video[1]}}, {quoted: m})
                })
                } catch (e) {
                console.log(`Eror kak, Coba pakai server 2 ketik ${prefix}tiktok2 ${q} `)
                }
}
let tt2 = `https://www.tiktok.com/${m.text.slice(23)}`

if (m.text.includes(tt2)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = tt2
try {
    TiktokDL(url).then ( data => {
    bob.sendMessage(m.chat, {video: {url: data.result.video[1]}}, {quoted: m})
    })
    } catch (e) {
    console.log(`Eror kak, Coba pakai server 2 ketik ${prefix}tiktok2 ${q} `)
    }
}
let tt3 = `https://vm.tiktok${m.text.slice(17)}`

if (m.text.includes(tt3)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = tt3
try {
    TiktokDL(url).then ( data => {
    bob.sendMessage(m.chat, {video: {url: data.result.video[1]}}, {quoted: m})
    })
    } catch (e) {
    console.log(`Eror kak, Coba pakai server 2 ketik ${prefix}tiktok2 ${q} `)
    }
}
let fbdl = `https://www.facebook.com/${m.text.slice(25)}`

if (m.text.includes(fbdl)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = fbdl
dl.savefrom(url).then ( data => {
reply(`*[ FACEBOOK ]*\n\nTitle : ${ data[0].meta.title}\nSize : HD\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data[0].hd.url}, caption: data[0].meta.title})
})
}
let igdl = `https://www.instagram.com/${m.text.slice(26)}`

if (m.text.includes(igdl)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = igdl
instagram(url).then( data => {
for ( let i of data ) {
if (i.type === "video") {
bob.sendMessage(m.chat, {video: {url: i.url}}, {quoted: m})
} else if (i.type === "image") {
bob.sendMessage(m.chat, {image: { url: i.url }})
}
}
}).catch(() => reply(`Eror mas. P in owner coba`))
}

let twt = `https://twitter.com/${m.text.slice(20)}`

if (m.text.includes(twt)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = twt
dl.savefrom(url).then( data => {
reply(`*[ TWITTER ]*\n\nTitle : ${data[0].meta.title}\n\n_Wait A Minute._`)
if (data[0].url[1].type === "mp4") {
bob.sendMessage(m.chat, {video: {url: data[0].url[1].url}})
} else if (data[0].url[1].type === "jpg") {
bob.sendMessage(m.chat, {image: { url: data[0].url[1].url }})
}
}).catch(() => reply(`Eror mas. P in owner coba`))
}

let cp = `https://www.capcut.com/${m.text.slice(23)}`

if (m.text.includes(cp)) {
    if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return console.log(`Limit beliau sudah habis jir`)
                    limitAdd(sender, limit)
var url = cp
capcut(url).then ( data => {
reply(`*[ CAPCUT ]*\n\nUsername : ${data.nama}\nUsed : ${data.used} Pemakai\n\n_Wait A Minute._`)
bob.sendMessage(m.chat, {video: {url: data.video}, caption: `${data.used} Telah Di Pakai`})
} )
}

    
var premi = 'User'
if (isCreator) {
premi = '*_OWNER BOT_*'
} else if ( isPremium ) {
    premi = "*Premium User*"
}
var regis = '*X*'

async function loading() {
    const { key } = await bob.sendMessage(m.chat, {text: '*== [ STATUS ] ===*\n\n「▱▱▱▱▱▱▱▱▱▱」Loading...'}, { quoted: m });
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▱▱▱▱▱▱▱▱」20%', edit: key})
         await delay(400);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▱▱▱▱▱▱」40%', edit: key})
         await delay(400);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▱▱▱▱」60%', edit: key})
         await delay(400);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▱▱」80%', edit: key})
         await delay(400);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%', edit: key})
         await delay(1000);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading .', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ..', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ...', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ....', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading .....', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ......', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading .', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ..', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ...', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ....', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading .....', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ......', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading .', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ..', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ...', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ....', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading .....', edit: key})
         await delay(600);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nLoading ......', edit: key})
         await delay(500);
         await bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nSedang Menunggu...', edit: key})
         await delay(3000);
        bob.sendMessage(m.chat, { text: '*== [ STATUS ] ===*\n\n「▰▰▰▰▰▰▰▰▰▰」100%\nNama Bot : JOY!\nStatus : Sukses Start', edit: key})
        bob.sendMessage(m.chat, {audio: fs.readFileSync('./media/Joy/audii/1.mp3'), ptt: true, mimetype: 'audio/mp4'})
      }
function randomNomor(min, max = null) {
    if (max !== null) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
    return Math.floor(Math.random() * min) + 1
    }
    }
        // Push Message To Console && Auto Read
        if (m.message) {
            addBalance(m.sender, randomNomor(60), balance)
            bob.readMessages([m.key])           
        }
        ///START MENU
const start_menu = `
╔═⧎ *${global.botName.toUpperCase()}* ⧎═
║
╠═⧎ Hallo *${pushname}*
║
╠═⧎ Aku Adalah *${global.botName}*
║ Silahkan Kirim .joy 
║ Untuk Melihat Daftar Menu.
║
╠═⧎ *Harap Daftar Terlebih*
║ *Dahulu Sebelum Memulai* 
║ *${global.botName} Untuk Mendapatkan*
║ *Limit Dan Balance!*
║
╚═⧎ Thanks For Using ${global.botName}\n❋─────────────────❋

「 *${tgl}* 」\n「 *${jam}* 」`
/// LIST MENU
const list_menu = `${ucapanWaktu} @${sender.split("@") [0]} 👋

Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB

_Ada Bug? Ketik ${prefix}report Bug mu_
${readmore}
*( ♻️ )  Random Menu*
≻ ${prefix}quotes
≻ ${prefix}gombalan
≻ ${prefix}katagalau
≻ ${prefix}cecan
≻ ${prefix}cogan
≻ ${prefix}naruto
≻ ${prefix}loli
≻ ${prefix}waifu
≻ ${prefix}husbu
≻ ${prefix}darkjokes

*( 🪀 )  Menu Lain Nya*
≻ ${prefix}pinterest <Querry>
> ${prefix}tourl
> ${prefix}removebg

*( 👥 )  Group Menu*
≻ ${prefix}linkgrup
≻ ${prefix}setppgrup
≻ ${prefix}setnamegc
≻ ${prefix}setdesc
≻ ${prefix}group <Open/Close>
≻ ${prefix}revoke
≻ ${prefix}hidetag <Text>
≻ ${prefix}tagall <Text>
≻ ${prefix}kick <@tag>
≻ ${prefix}add <@tag>
≻ ${prefix}promote <@tag>
≻ ${prefix}demote <@tag>
≻ ${prefix}listadmin <Pesan>
≻ ${prefix}infogc
≻ ${prefix}antilink on/off

*( ⌛ )  Downloader*
≻ ${prefix}igmp3 <LinkIG>
≻ ${prefix}igdl <LinkIG>
≻ ${prefix}play <Querry>
≻ ${prefix}ytmp4 <LinkYt>
≻ ${prefix}ytmp3 <LinkYt>
≻ ${prefix}tiktok <LinkTt>
≻ ${prefix}tiktokmp3 <LinkTt>`
        
         if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))
        switch (command) {
    ///ALAT MENU
    case 'menu':{
        reply(`Yah maaf kak, Joy hanya bisa menggunakan ${prefix}start bukan ${CmD} :(`)
    }
    break
    case 'start':{
    bob.sendMessage(m.chat, {image: fs.readFileSync(`./media/Joy/1.png`), caption: start_menu, mention: sender.split("@")[0]}, {quoted: ftroli})
    }
    break
    case 'start-on':{
        if (!isCreator) return
        loading()
    }
    break
    case 'joy':{
        reply(`Coming Soon! 😉`)
    }
    break
    //LIST FITUR
    case 'quotes':{
        if (isLimit(m.sender, isCreator, isPremium, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek Point Yang Tersedia`)
        limitAdd(sender, limit)
        var kotes2 = JSON.parse(fs.readFileSync('./assets/quotes.json'))
        var hasil = pickRandom(kotes2)
        var tekes = `*== [ QUOTES ] ===*\n${hasil.quotes}\n\n~ ${hasil.author}`
        bob.sendMessage(m.chat, {text: hasil.quotes + `\n\n` + `~ ${hasil.author}`}, {quoted: m})
    }
    break
                    default:
                if (budy.startsWith('x')) {
                    if (!isCreator) return reply(mess.owner)
                    
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(2)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }
                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }

        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})