/*
   Coded by amal-dx
*/
let handler = async m => m.reply(`


π£οΈOwner commandsπ£οΈ

π *Command :* addprem
*Usage :* add User to premium 

π*Command :* Broadcast [text]
*Usage :* Broadcast a messages 
*alternative :* bc

π *Command :* broadcastgroup
*Usage :* Broadcast to all grps
*Alternative :* bcgc

π *Command :* deletechat group 
*Usage :* destroys the group
*Alternative :* deletechat group , deletechat all

π *Command :* mutechat
*Usage :* Mute the chat / Group only admins
*Alternative :* mutechat all mutechat group

π *Command :* enable/disable [option]
*Usage :* Toggle between events 

_O stands for owner_

π *Command :* oadd @mention 
*Usage :* adds the user
*Alternative :* o+ @mention

π*Command :* okick @mention
*Usage :* kick the mentioned user
*alternative :* o- @mention

π *Command :* oannouncement [text]
*Usage :* Tag all users
*Alternative :* ohidetag [text] 

π *Command :* opromote @mention
*Usage :* Promotes the following user
*alternative :* oadmin @mention , o^ @mention



`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-4|helpowner)$/i
module.exports = handler
