const chalk = require('chalk');
//const notifier = require('node-notifier');

module.exports = (str, end) => {
	console.log(chalk.hex('#00e6ee').bold(`${end || '『 FCA-HZI 』'} → `) + str);
};
module.exports.onLogger = (str,end,ctscolor) => { 
	var checkbutdak = ctscolor.replace("#",'');
	if (ctscolor.indexOf('#') != 1) {
		console.log(chalk.hex('#00e6ee').bold(`${end || '『 FCA-HZI 』'} → `) + str);
	}
	else if (!isNaN(checkbutdak)) {
		console.log(chalk.hex(ctscolor).bold(`${end || '『 FCA-HZI 』'} → `) + str);
	} 
	else console.log(chalk.hex('#00e6ee').bold(`${end || '『 FCA-HZI 』'} → `) + str);
}