let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fakeImage = 'https://i.ibb.co/sgDvxrK/IMG-20210727-WA1305.jpg'
let safusimage = 'https://i.ibb.co/sgDvxrK/IMG-20210727-WA1305.jpg'
let fakeMessage = 'Team -MA๐ฎ๐ณ'
const { MessageType } = require('@adiwajshing/baileys')
let path = require('path')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let prep = await conn.prepareMessage(m.chat, fs.readFileSync('./fake.jpg'), MessageType.image, {})
let idd = prep.message
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
await conn.fakeReply(m.chat, '*ใ โ ๏ธ ใLoading...*', '0@s.whatsapp.net', '*LIST MENU*', 'status@broadcast', { thumbnail: await (await fetch(safusimage)).buffer()})
    let jam = moment.tz('Asia/Kolkata').format('HH')
    var ucapanWaktu = 'Good Morning ๐'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Good Morning ๐'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Good Afternoon โ๏ธ'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Good eavening ๐'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Good Night ๐'
				} else {
				ucapanWaktu = 'Good Night ๐'
				} 
				   let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'en'
				    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
        let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
       let { exp, limit, registered, regTime, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
       let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
let menu =`
โญโโโโโโโโโโโโโโโโโโโฎ
โ  *โฉ ${ucapanWaktu} โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โฐโโโโโโโโโโโโโโโโโโโฎ
โ *โฉ แดสษชแดษด-แดสาแดโด โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ
โ โข *แดษชแดแด* : ${time}
โ โข *แดแดแดแด* : ${date}
โ โข *แดแดแดษชแดแด* : ${uptime}
โ โข *แดสแดาษชx* : *[Multi Prefix]*
โhttps://chat.whatsapp.com/LOPN0xHy6KRJU1vReO9Nno
โ     โโโโโโโโโโโโโ
โ     โโโโโโโโโโโโโ
โ      ยฉ917012074386
โ
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ user โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ
โ โข *สษชแดษชแด* : ${limit}
โ โข *สแดสแด* : ${role}
โ โข *สแดแด แดส* : ${level}
โ
โฐโโโโโโโโโโโโโโโโโโโฏ

โญโโโโโโโโโโโโโโโโโโโฎ
โ *โฉ     แดแดษชษด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}afk 
โ โข ${usedPrefix}jadian 
โ โข ${usedPrefix}menu
โ โข ${usedPrefix}help
โ โข ${usedPrefix}rules
โ โข ${usedPrefix}donate
โ โข ${usedPrefix}?
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     ษขแดแดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}asahotak
โ โข ${usedPrefix}caklontong
โ โข ${usedPrefix}family100
โ โข ${usedPrefix}math
โ โข ${usedPrefix}siapakahaku
โ โข ${usedPrefix}tebakgambar
โ โข ${usedPrefix}tebakkata
โ โข ${usedPrefix}tebakkimia
โ โข ${usedPrefix}tebaklagu 
โ โข ${usedPrefix}tictactoe 
โ โข ${usedPrefix}ttt 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดxแด&สษชแดษชแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}buy
โ โข ${usedPrefix}buy 
โ โข ${usedPrefix}buyall
โ โข ${usedPrefix}daily
โ โข ${usedPrefix}claim
โ โข ${usedPrefix}leaderboard 
โ โข ${usedPrefix}lb 
โ โข ${usedPrefix}levelup
โ โข ${usedPrefix}limit 
โ โข ${usedPrefix}pay 
โ โข ${usedPrefix}paylimit  
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     sแดษชแดแดแดส     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}attp 
โ โข ${usedPrefix}attp2  
โ โข ${usedPrefix}ctrigger  
โ โข ${usedPrefix}getexif
โ โข ${usedPrefix}semoji 
โ โข ${usedPrefix}stiker 
โ โข ${usedPrefix}stiker 
โ โข ${usedPrefix}stikergif 
โ โข ${usedPrefix}stikergif 
โ โข ${usedPrefix}stikerline  
โ โข ${usedPrefix}stikertelegram  
โ โข ${usedPrefix}stikerly  
โ โข ${usedPrefix}stickfilter  
โ โข ${usedPrefix}stickmaker  
โ โข ${usedPrefix}togif 
โ โข ${usedPrefix}toimg 
โ โข ${usedPrefix}toimg2 
โ โข ${usedPrefix}tovideo 
โ โข ${usedPrefix}ttp 
โ โข ${usedPrefix}ttp2  
โ โข ${usedPrefix}ttpdark  
โ โข ${usedPrefix}wm 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดษขษชแด sสแดสส     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}apakah 
โ โข ${usedPrefix}apakah 
โ โข ${usedPrefix}artinama 
โ โข ${usedPrefix}kapan 
โ โข ${usedPrefix}kapankah 
โ โข ${usedPrefix}kapan 
โ โข ${usedPrefix}kapankah 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     วซแดแดแดแดs     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}bucin
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดแดแดษชษด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}add 
โ โข ${usedPrefix}+ 
โ โข ${usedPrefix}demote 
โ โข ${usedPrefix}member 
โ โข ${usedPrefix}โ 
โ โข ${usedPrefix}kick  
โ โข ${usedPrefix}-  
โ โข ${usedPrefix}demote 
โ โข ${usedPrefix}member 
โ โข ${usedPrefix}โ 
โ โข ${usedPrefix}promote 
โ โข ${usedPrefix}admin 
โ โข ${usedPrefix}^ 
โ โข ${usedPrefix}โ 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     ษขสแดแดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}group *open / close*
โ โข ${usedPrefix}enable
โ โข ${usedPrefix}disable 
โ โข ${usedPrefix}getsider
โ โข ${usedPrefix}infogrup
โ โข ${usedPrefix}leavegc
โ โข ${usedPrefix}leavegcall
โ โข ${usedPrefix}leavegroup
โ โข ${usedPrefix}linkgroup
โ โข ${usedPrefix}here
โ โข ${usedPrefix}listonline
โ โข ${usedPrefix}opengumuman 
โ โข ${usedPrefix}oannounce 
โ โข ${usedPrefix}ohidetag 
โ โข ${usedPrefix}pengumuman 
โ โข ${usedPrefix}announce 
โ โข ${usedPrefix}hidetag 
โ โข ${usedPrefix}revoke
โ โข ${usedPrefix}setpp
โ โข ${usedPrefix}setbye 
โ โข ${usedPrefix}setwelcome 
โ โข ${usedPrefix}simulate  
โ โข ${usedPrefix}totalpesan
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดสแดแดษชแดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ โข
โ โข ${usedPrefix}join 
โ โข
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     ษชษดแดแดสษดแดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}anime 
โ โข ${usedPrefix}brainly
โ โข ${usedPrefix}character 
โ โข ${usedPrefix}covid 
โ โข ${usedPrefix}darkjokes
โ โข ${usedPrefix}fetch 
โ โข ${usedPrefix}get 
โ โข ${usedPrefix}gimage 
โ โข ${usedPrefix}image 
โ โข ${usedPrefix}google 
โ โข ${usedPrefix}googlef 
โ โข ${usedPrefix}epep <id>
โ โข ${usedPrefix}katabijak 
โ โข ${usedPrefix}kbbi 
โ โข ${usedPrefix}lirik
โ โข ${usedPrefix}manga 
โ โข ${usedPrefix}resep 
โ โข ${usedPrefix}masak 
โ โข ${usedPrefix}megumin
โ โข ${usedPrefix}meme
โ โข ${usedPrefix}neko
โ โข ${usedPrefix}pikachu
โ โข ${usedPrefix}pinterest 
โ โข ${usedPrefix}ppcouple
โ โข ${usedPrefix}ppcp
โ โข ${usedPrefix}spotify 
โ โข ${usedPrefix}ss 
โ โข ${usedPrefix}ssf 
โ โข ${usedPrefix}subreddit 
โ โข ${usedPrefix}trendtwit
โ โข ${usedPrefix}trendingtwitter
โ โข ${usedPrefix}unsplash 
โ โข ${usedPrefix}waifu
โ โข ${usedPrefix}wallpaperanime 
โ โข ${usedPrefix}wallpaperq  
โ โข ${usedPrefix}wikipedia 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดษดแดษดสแดแดแดs     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}start
โ โข ${usedPrefix}leave
โ โข ${usedPrefix}next
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดแดแดสแดแดษดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}tahta  
โ โข ${usedPrefix}magernulis1  
โ โข ${usedPrefix}magernulis2  
โ โข ${usedPrefix}magernulis3  
โ โข ${usedPrefix}magernulis4  
โ โข ${usedPrefix}magernulis5  
โ โข ${usedPrefix}magernulis6  
โ โข ${usedPrefix}nulis 
โ โข ${usedPrefix}quotemaker 
โ โข ${usedPrefix}quotemaker2 
โ โข ${usedPrefix}tahta2
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ    แดแดแดกษดสแดแดแดแดส      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}fb 
โ โข ${usedPrefix}ig 
โ โข ${usedPrefix}ighighlight 
โ โข ${usedPrefix}igstalk 
โ โข ${usedPrefix}igstory 
โ โข ${usedPrefix}play  
โ โข ${usedPrefix}play2  
โ โข ${usedPrefix}tiktok 
โ โข ${usedPrefix}twitter  
โ โข ${usedPrefix}ytmp3 
โ โข ${usedPrefix}yta 
โ โข ${usedPrefix}ytmp4 
โ โข ${usedPrefix}ytv 
โ โข ${usedPrefix}yt
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดแดสs     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}aksara 
โ โข ${usedPrefix}base64
โ โข ${usedPrefix}calc
โ โข ${usedPrefix}carigrup 
โ โข ${usedPrefix}caripesan 
โ โข ${usedPrefix}hd
โ โข ${usedPrefix}enhance 
โ โข ${usedPrefix}enphoto  
โ โข ${usedPrefix}gimage 
โ โข ${usedPrefix}image 
โ โข ${usedPrefix}githubsearch 
โ โข ${usedPrefix}hadis
โ โข ${usedPrefix}halah 
โ โข ${usedPrefix}hilih 
โ โข ${usedPrefix}huluh 
โ โข ${usedPrefix}heleh 
โ โข ${usedPrefix}holoh 
โ โข ${usedPrefix}tobraille
โ โข ${usedPrefix}inspect 
โ โข ${usedPrefix}kodepos 
โ โข ${usedPrefix}memeg
โ โข ${usedPrefix}mention 
โ โข ${usedPrefix}nulis2 
โ โข ${usedPrefix}profile 
โ โข ${usedPrefix}qr 
โ โข ${usedPrefix}qrcode 
โ โข ${usedPrefix}readmore 
โ โข ${usedPrefix}spoiler 
โ โข ${usedPrefix}run 
โ โข ${usedPrefix}scan 
โ โข ${usedPrefix}ping
โ โข ${usedPrefix}speed
โ โข ${usedPrefix}style 
โ โข ${usedPrefix}textpro 
โ โข ${usedPrefix}translate  
โ โข ${usedPrefix}tts  
โ โข ${usedPrefix}upload 
โ โข ${usedPrefix}wait 
โ โข ${usedPrefix}yts 
โ โข ${usedPrefix}ytsearch 
โ โข ${usedPrefix}zodiac *2002 02 25*
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     าแดษด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}dare
โ โข ${usedPrefix}jodoh 
โ โข ${usedPrefix}ref
โ โข ${usedPrefix}simi 
โ โข ${usedPrefix}simsimi 
โ โข ${usedPrefix}simih 
โ โข ${usedPrefix}truth
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดแดแดสแดsแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}addvn 
โ โข ${usedPrefix}addmsg 
โ โข ${usedPrefix}addvideo 
โ โข ${usedPrefix}addgif 
โ โข ${usedPrefix}addaudio 
โ โข ${usedPrefix}addimg 
โ โข ${usedPrefix}addsticker 
โ โข ${usedPrefix}delcmd 
โ โข ${usedPrefix}delvn 
โ โข ${usedPrefix}delmsg 
โ โข ${usedPrefix}delvideo 
โ โข ${usedPrefix}delgif 
โ โข ${usedPrefix}delaudio 
โ โข ${usedPrefix}delimg 
โ โข ${usedPrefix}delsticker 
โ โข ${usedPrefix}getvn 
โ โข ${usedPrefix}getmsg 
โ โข ${usedPrefix}getvideo 
โ โข ${usedPrefix}getgif 
โ โข ${usedPrefix}getaudio 
โ โข ${usedPrefix}getimg 
โ โข ${usedPrefix}getsticker 
โ โข ${usedPrefix}infocmd 
โ โข ${usedPrefix}listcmd 
โ โข ${usedPrefix}listvn
โ โข ${usedPrefix}listmsg
โ โข ${usedPrefix}listvideo
โ โข ${usedPrefix}listgif
โ โข ${usedPrefix}listaudio
โ โข ${usedPrefix}listimg
โ โข ${usedPrefix}liststicker
โ โข ${usedPrefix}unlockcmd
โ โข ${usedPrefix}lockcmd
โ โข ${usedPrefix}setcmd 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แด แดแดษชษดษข      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}cekvote
โ โข ${usedPrefix}hapusvote
โ โข ${usedPrefix}mulaivote 
โ โข ${usedPrefix}upvote
โ โข ${usedPrefix}devote
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดสsแดษดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}absen
โ โข ${usedPrefix}cekabsen
โ โข ${usedPrefix}hapusabsen
โ โข ${usedPrefix}mulaiabsen 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดสวซแดสแดษด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}alquran 114 1
โ โข ${usedPrefix}asmaulhusna 
โ โข ${usedPrefix}hadis
โ โข ${usedPrefix}salat 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดษดษดแดแดแดษชแดษด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}getcode
โ โข ${usedPrefix}jadibot 
โ โข ${usedPrefix}listjadibot
โ โข ${usedPrefix}berhenti
โ โข ${usedPrefix}stop
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดกษดแดส     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}whitelist 
โ โข ${usedPrefix}addprem 
โ โข ${usedPrefix}banchat
โ โข ${usedPrefix}ban
โ โข ${usedPrefix}blocklist
โ โข ${usedPrefix}broadcast 
โ โข ${usedPrefix}bc 
โ โข ${usedPrefix}broadcastgroup 
โ โข ${usedPrefix}bcgc 
โ โข ${usedPrefix}clearchat
โ โข ${usedPrefix}clearchat 
โ โข ${usedPrefix}clearchat 
โ โข ${usedPrefix}clearchat 
โ โข ${usedPrefix}deletechat
โ โข ${usedPrefix}deletechat 
โ โข ${usedPrefix}deletechat 
โ โข ${usedPrefix}deletechat 
โ โข ${usedPrefix}mutechat
โ โข ${usedPrefix}mutechat 
โ โข ${usedPrefix}mutechat 
โ โข ${usedPrefix}mutechat
โ โข ${usedPrefix}delprem 
โ โข ${usedPrefix}enable 
โ โข ${usedPrefix}disable 
โ โข ${usedPrefix}premlist
โ โข ${usedPrefix}oadd 
โ โข ${usedPrefix}o+ 
โ โข ${usedPrefix}okick 
โ โข ${usedPrefix}o- 
โ โข ${usedPrefix}opromote 
โ โข ${usedPrefix}oadmin 
โ โข ${usedPrefix}o^ 
โ โข ${usedPrefix}setbotbio
โ โข ${usedPrefix}setbotname
โ โข ${usedPrefix}setbye 
โ โข ${usedPrefix}setmenu 
โ โข ${usedPrefix}setmenubefore 
โ โข ${usedPrefix}setmenuheader 
โ โข ${usedPrefix}setmenubody 
โ โข ${usedPrefix}setmenufooter 
โ โข ${usedPrefix}setmenuafter 
โ โข ${usedPrefix}setwelcome 
โ โข ${usedPrefix}simulate  
โ โข ${usedPrefix}unbanchat
โ โข ${usedPrefix}ban
โ โข ${usedPrefix}upsw  
โ โข ${usedPrefix}upsw 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ    สแดsแด      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}broadcastjadibot 
โ โข ${usedPrefix}bcbot 
โ โข ${usedPrefix}debounce
โ โข ${usedPrefix}update
โ โข ${usedPrefix}update2
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดแด แดษดแดแดแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}wanted
โ โข ${usedPrefix}wasted
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     ษชษดาแด     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}Info
โ โข ${usedPrefix}bannedlist
โ โข ${usedPrefix}owner
โ โข ${usedPrefix}creator
โ โข ${usedPrefix}del
โ โข ${usedPrefix}delete
โ โข ${usedPrefix}donasi
โ โข ${usedPrefix}groups
โ โข ${usedPrefix}grouplist
โ โข ${usedPrefix}bug 
โ โข ${usedPrefix}report 
โ โข ${usedPrefix}ping
โ โข ${usedPrefix}speed
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ    ษดแด แดแดแดแดษขแดสส      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}save 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ    แดแดแดแดส      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}gay
โ โข ${usedPrefix}trigger
โ โข ${usedPrefix}ytcomment 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ    สแดษขษชsแดแดส      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}daftar 
โ โข ${usedPrefix}reg 
โ โข ${usedPrefix}register 
โ โข ${usedPrefix}unreg 
โ โข ${usedPrefix}unregister 
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ    แด ษชแดแดแด แดแดแดแดส      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}shaunthesheep
โ 
โฐโโโโโโโโโโโโโโโโโโโฎ
โญโโโโโโโโโโโโโโโโโโโฏ
โ *โฉ     แดแดแดษชแด แดแดแดสs     โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ 
โ โข ${usedPrefix}tomp3 
โ โข ${usedPrefix}tovn 
โ โข ${usedPrefix}bass 
โ โข ${usedPrefix}blown 
โ โข ${usedPrefix}deep 
โ โข ${usedPrefix}earrape 
โ โข ${usedPrefix}fast 
โ โข ${usedPrefix}fat 
โ โข ${usedPrefix}nightcore 
โ โข ${usedPrefix}reverse 
โ โข ${usedPrefix}robot 
โ โข ${usedPrefix}slow 
โ โข ${usedPrefix}smooth 
โ โข ${usedPrefix}tupai 
โ 
โฐโโโโโโโโโโโโโโโโโโโฏ
${readMore}
โญโโโโโโโโโโโโโโโโโโโฎ
โ *โฉ    แดสแดษดแดs แดแด      โช*
โญโโโโโโโโโโโโโโโโโโโฏ
โ โขโข  sแดาแดกแดษด ษขแดษดแดข
โ โขโข  ษดแดสแดแดแดแดแด
โ โขโข  แดสแดษขแดษด สแดแดแด
โ โขโข  แดแดษช แดาาษชแดษชแดส
โ โขโข  แดแดxษชแด แดสษชแดษด
โ โขโข  สษชแดแดแดแดข
โฐโโโโโโโโโโโโโโโโโโโฏ`.trim()

 const buttons = [{buttonId: 'id1', buttonText: {displayText: 'Nice๐ค'}, type: 1}, {buttonId: '#donate', buttonText: {displayText: '๐ฎDonate'}, type: 1}]
  let id = Object.keys(idd)[0]
  const buttonMessage = {[id]: prep.message[id], contentText: menu, footerText: 'Created By Team Ma official๐ฎ๐ณ', buttons: buttons, headerType: 'IMAGE'}
  conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: {key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { orderMessage: { itemCount: 2021, status: 999, thumbnail: await (await fetch(safusimage)).buffer(), surface: 999, message: 'ะผแช แดาาษชแดษชแดสใ', orderTitle: 'iOfficial', sellerJid: '0@s.whatsapp.net'}}}}, { contextInfo: { mentionedJid: [m.sender]}})


}}
handler.help = ['men', 'hel', '?']
handler.tags = ['main']
handler.command = /^(allmenu|2help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
