module.exports = (player, value) => {
	const number = Number(value);
	if (isNaN(number)) return
	if (number < 1 || number > player.world.items.length)
		throw new Error('Bạn cần nhập số trong khoảng đã cho!');
	return number - 1;
};
