module.exports.config = {
  name: "ad",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "",
  description: "",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("ad")==0 || (event.body.indexOf("Ad")==0) || event.body.indexOf("khanh")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
        "https://i.imgur.com/3ngcgvN.mp4",
        "https://i.imgur.com/uubCDXG.mp4",//vd ngvanchien
          ];
     var callback = () => api.sendMessage({body:`===== [𝙵𝚋 𝙰𝚍𝚖𝚒𝚗] =====\n━━━━━━━━━━━━━━━━━━\n\n→ [🧸]:Fb:fb.me//lekhanhhihi\n→ [💤] 𝐀𝐝𝐦𝐢𝐧 𝐂𝐡𝐮̛𝐚 𝐍𝐠𝐲 𝐍𝐡𝐚𝐚𝐚 =))\n ━━━━━━━━━━━━━━━━━━\n\n→ [🍓] 𝐘𝐞̂𝐮 𝐌𝐚̂́𝐲 𝐁𝐚̣𝐧 𝐍𝐡𝐢𝐞̂̀𝐮 <𝟑`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };