/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

/**
 * 
 */
const myCars = [
	{
		carBrand: 'Sharan',
		price: 7500,
		isAvailableForSale: true,
	},
	{
		carBrand: 'Ford',
		price: 6000,
		isAvailableForSale: false,
	},
	{
		carBrand: 'Seat',
		price: 9000,
		isAvailableForSale: false,
	},

]

const newCar = {
	carBrand: 'Toyota',
	price: 12000,
	isAvailableForSale: true,
}

myCars.push(newCar)

console.log(myCars)

console.log(myCars[1].carBrand)