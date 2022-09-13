/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// const counter = 1;

// const intervalDate = setInterval(function () {
// 	console.log(`Сообщение номер ` + $(".count1").text(counter++));
// 	if (counter = 5) {
// 		clearInterval()
// 	}
// }, 2000)
let i = 1;

const intervalDate = setInterval(() => {
	console.log('Сообщение номер ' + i)
	i += 1
	//if (i = 5) {
	//		clearTimeout(intervalDate)
	//}
}, 2000)

setTimeout(() => clearTimeout(intervalDate), 11000)