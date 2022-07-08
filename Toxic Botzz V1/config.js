/**
   * Create By Dika Ardnt.
   * Recode By ArieTube
   * Contact Me on wa.me/6285828357727
   * subscribe : https://m.youtube.com/channel/UC0rPHvwr0sJtaccF8Mm1Xng
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'woaibeijingtiananmen',
}

// Configuration BOT

global.owner = ['6285265491405'] //Nomor lu
global.premium = ['6285265491405'] //Nomor lu
global.packname = 'Toxic Botzz ' //Nama bot lu utk wm stiker
global.author = 'Nich' //Nama lu utk wm stiker
global.sessionName = 'session' //Nama session
global.prefa = ['+','$','/'] //Prefix bot serah lo mau ubah atau ga
global.sp = '⭔'
global.mess = {
    success: '✓ Bisa Ya Kack',
    admin: 'Cuma Untuk Grup Deck!',
    botAdmin: 'Jadiin lah gw admin dulu!',
    owner: 'Lu Bukan Owner Gw!!',
    group: 'Just For Grup Bre!',
    private: 'cuma untuk pc kack!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Sabar cukk 🗿',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/arietube.jpg')
global.vitube = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

//Jangan diubah nanti bisa eror nangis
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
