module.exports.config = {
  name: ":(",
  version: "1.0.1",
  hasPermssion: 0,
  credits: ":(",
  description: "",
  commandCategory: "Media",
  usages: ":(",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }};
module.exports.handleEvent = async ({ api, event, Threads }) => {
if (event.body.indexOf("buồn")==0 || event.body.indexOf("😞")==0 || event.body.indexOf("Buồn")==0 || event.body.indexOf("nản")==0 || event.body.indexOf("Sad")==0 || event.body.indexOf("sad")==0 || event.body.indexOf(":(")==0) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
api.sendMessage("Hình như bạn đang buồn :(\nChờ mình một chút nha.", event.threadID, event.messageID);
var link = [
  "https://i.imgur.com/26tBGNz.mp4",
  "https://i.imgur.com/bKahRyR.mp4",
  "https://i.imgur.com/nsAeBu9.mp4",
  "https://i.imgur.com/YBEqu4T.mp4",
  "https://i.imgur.com/Zq5iniZ.mp4",
  "https://i.imgur.com/eAue5PQ.mp4",
  "https://i.imgur.com/p0uF1JZ.mp4",
  "https://i.imgur.com/c9d9k8V.mp4",
  "https://i.imgur.com/Q7k7En2.mp4",
  "https://i.imgur.com/17QK9Ym.mp4",
  "https://i.imgur.com/RgXyYf6.mp4",
  "https://i.imgur.com/TPCfN2n.mp4",
  "https://i.imgur.com/5wFRzh6.mp4",
  "https://i.imgur.com/eKg22cS.mp4",
  "https://i.imgur.com/jPRR3s6.mp4",
  "https://i.imgur.com/LfW7EHr.mp4",
  "https://i.imgur.com/zy7sr6N.mp4",
  "https://i.imgur.com/jaKWRn4.mp4",
  "https://i.imgur.com/92xJwzd.mp4",
  "https://i.imgur.com/bVJ4yC4.mp4",
  "https://i.imgur.com/7u6af0D.mp4",
  "https://i.imgur.com/77oeeE4.mp4",
  "https://i.imgur.com/VeJ3zDB.mp4",
  "https://i.imgur.com/5FhXcVw.mp4",
  "https://i.imgur.com/B2r0tYc.mp4",
  "https://i.imgur.com/iw6PY5X.mp4",
  "https://i.imgur.com/QEBRyDq.mp4",
  "https://i.imgur.com/vPpNlRG.mp4",
  "https://i.imgur.com/Exllcgj.mp4",
  "https://i.imgur.com/WDfWuLH.mp4",
  "https://i.imgur.com/nPzjEX0.mp4",
  "https://i.imgur.com/xNu8rSP.mp4",
  "https://i.imgur.com/yxltQSw.mp4",
  "https://i.imgur.com/S7eLwqN.mp4",
  "https://i.imgur.com/AKDOJ5T.mp4",
  "https://i.imgur.com/AZqvQIP.mp4",
  "https://i.imgur.com/mYId3EQ.mp4",
  "https://i.imgur.com/yBPHxYI.mp4",
  "https://i.imgur.com/7aXlLQn.mp4",
  "https://i.imgur.com/vThFklM.mp4",
  "https://i.imgur.com/e804r9x.mp4",
  "https://i.imgur.com/PMJeRQ6.mp4",
  "https://i.imgur.com/1HgV6uk.mp4",
  "https://i.imgur.com/DwgSaps.mp4",
  "https://i.imgur.com/WXQhDi5.mp4"
];
var callback = () => api.sendMessage({body:`Số video hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/vdsad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/vdsad.mp4"), event.messageID);  
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/vdsad.mp4")).on("close",() => callback());}}
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {};