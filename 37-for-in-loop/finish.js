/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
	name: 'Mike',
	age: 30,
	city: 'London',
}

Object.prototype.country = 'England'

for (let key in myObject) {
	const ownProperty = myObject.hasOwnProperty(key)
	console.log(ownProperty)
	console.log(myObject[key])
}

//console.log(myObject.upvote())

const ownProperty = myObject.hasOwnProperty('name')

console.log(ownProperty)