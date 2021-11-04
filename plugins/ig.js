/*
   Coded by amal-dx
*/
let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(API('Velgrynd', '/api/igdl', { url: args[0] }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { user, medias } = json.result
  for (let i = 0; i < medias.length; i++) {
    let capt = i == 0 ? '*• User:* ' + user.username + '\n*• Followers:* ' + user.followers + '\n*• Media count:* ' + medias.length : ''
    conn.sendFile(m.chat, medias[i].url, '', capt, m)
  }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(ig(dl)?)$/i

module.exports = handler
