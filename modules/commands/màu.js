  module.exports.config = {
	name: "màu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "hoàng",
	description: "nói ít thôi dùng được dùng không cút bố m đéo cần m dùng",
	commandCategory: "giải trí",
	usages: "mò đi đéo có đâu mà xem",
	cooldowns: 0,
   dependencies: {}
};
module.exports.run = async function ({event, api, args, Currencies, __GLOBAL }) {
	             var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (100000 > moneyUser) return api.sendMessage("đéo đủ tiền cút alo!", event.threadID, event.messageID);
	            var color = args.join("") 
				var check = (num) => (num == 0) ? '💙' : (num % 2 == 0 && num % 6 != 0 && num % 10 != 0) ? '♥️' : (num % 3 == 0 && num % 6 != 0) ? '💚' : (num % 5 == 0 && num % 10 != 0) ? '💛' : (num % 10 == 0) ? '💜' : '🖤️';
				let random = Math.floor(Math.random() * 50);
				if (color == "e" || color == "blue") color = 0;
				else if (color == "r" || color == "red") color = 1;
				else if (color == "g" || color == "green") color = 2;
				else if (color == "y" || color == "yellow") color = 3;
				else if (color == "v" || color == "violet") color = 4;
				else if (color == "b" || color == "black") color = 5;
				else return api.sendMessage("Bạn chưa nhập thông tin cá cược!, black [100] , red [200] , green [70] , yellow [50] , violet [150], blue [180],", event.threadID, event.messageID);
				
				if (color == 0 && check(random) == '💙') api.sendMessage(`Bạn đã chọn màu 💙, bạn đã thắng và được + 180000$\nSố tiền hiện tại của bạn là: ${moneyUser + 180000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 180000}),event.messageID);
				else if (color == 1 && check(random) == '♥️') api.sendMessage(`Bạn đã chọn màu ♥️, bạn đã thắng và được + 200000$\nSố tiền hiện tại của bạn là: ${moneyUser + 200000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 200000}),event.messageID);
				else if (color == 2 && check(random) == '💚') api.sendMessage(`Bạn đã chọn màu 💚, bạn đã thắng và được + 700000$\nSố tiền hiện tại của bạn là: ${moneyUser + 700000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 700000}),event.messageID);
				else if (color == 3 && check(random) == '💛') api.sendMessage(`Bạn đã chọn màu 💛, bạn đã thắng và được + 500000$\nSố tiền hiện tại của bạn là: ${moneyUser + 500000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 500000}),event.messageID);
				else if (color == 4 && check(random) == '💜') api.sendMessage(`Bạn đã chọn màu 💜, bạn đã thắng và được + 1500000$\nSố tiền hiện tại của bạn là: ${moneyUser + 1500000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 1500000}),event.messageID);
				else if (color == 5 && check(random) == '🖤️') api.sendMessage(`Bạn đã chọn màu 🖤️, bạn đã thắng và được + 100000$\nSố tiền hiện tại của bạn là: ${moneyUser + 100000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money + 100000}),event.messageID);
				else api.sendMessage(`Màu ${check(random)}\nBạn đã ra đê ở :'(\nvà bị trừ đi 100000$\nSố tiền còn lại của bạn là: ${moneyUser - 100000}$`, event.threadID,() => Currencies.setData(event.senderID, options = {money: money - 100000}),event.messageID);
			}
			
		