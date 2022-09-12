/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

//'use strict'
//If we take off 'use strict' parameter value 'a' will be overwritten in global settings and value will be displayed 'a'

function myFunction() {
	a = 2
	return a
}

console.log(myFunction())

function myFunction1() {
	const a = 2;

	return a;
}

myFunction1()