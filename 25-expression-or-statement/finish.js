/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //expression ;

const myObject = {  // expression statement
	x: 10,
	y: true,
}

myObject.z = 'abc' //expression - expression statement

delete myObject.x //expression

let newVariable //statement

newVariable = 30 + 5  // expression statement

console.log(newVariable)

if (newVariable > 10) {
	console.log(`${newVariable} больше 10`)
}

function myfn(a) {
	console.log(a)
}

myfn(myObject.z = 'abc')
myfn(15)
myfn(delete myObject.x)

