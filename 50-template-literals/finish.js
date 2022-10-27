/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/



function templateLiteral(num) {
	let numEqual
	let numSquer = Math.sqrt(num)
	if (num < 10) {

		numEqual = `Это число меньше 10.`
	};
	if (num >= 10) {
		numEqual = `Это число больше или равно  10 `
	};


	return `
Число ${num} 
${numEqual}
Квадратный корень этого числа - ${numSquer} `
}

