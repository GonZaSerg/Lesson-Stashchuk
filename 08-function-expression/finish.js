/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */
const myFunction = function myInfo(name) {


	const myGreeting = 'Hello, ' + name

	return myGreeting

	// return 'Hello, '+ name
}


console.log(myFunction('Serg'))

console.log(myFunction('Peter'))


