let handler = async m => m.reply(`


╭─「 Support link」
│ • paytm,Donate [917736308760]
│ • https://github.com/amal-dx/DXTROX-v2
 | • give a star if the project helped u
╰────
`.trim()) // give a star if it helped u
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
