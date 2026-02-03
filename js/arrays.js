
const fruits = ["Manzana", "Ananá", "Banana", "Kiwi", "Uva"];

console.log(fruits)

console.log(fruits.length)

// Concat Prototype: DEVUELVE dos arrays o mas unidos.

const market = ["Arroz", "Harina", "Azucar"]

const supermarketList = fruits.concat(market)

console.log(supermarketList)

// Filter Protype: Devuelve un array reducido según una determinada condición

// Callback -> Función que se pasa por parámetro a otra suma(función) => 7

// El callback del filter recibe por parámetro el elemento del array y debemos retornar la condición que lo filtra => si es true lo deja sino lo saca

const fruitsWithN = fruits.filter( fruit => fruit.includes("n") )
// const fruitsWithN = fruits.filter( (fruit) => {
//     return fruit.includes("n")
// })

console.log(fruitsWithN)

// Find Prototype: Devuelve el primer valor (no necesariamente un array) encontrado según una determinada condición
// FindIndex Prototype: Devuelve el primer index de un element encontrado según una determinada condición ( de cero hasta length - 1)
// Ambos reciben la condición por callback

const foundFruit = fruits.find( f => f.includes("wi!!")) // Si no encuentra => undefined
const foundFruitIndex = fruits.findIndex( f => f.includes("wi!!")) // Si no encuentra => -1

// Otros similares: findLast y findLastIndex

console.log(foundFruitIndex, foundFruit)

// Includes Prototype: devuelve un booleano si  cumple determinada condición.

const hasOrange = fruits.includes( f => f === "Naranja" )

console.log(hasOrange)

// Join Prototype: devuelve un string con todos los elementos del array unidos por un valor pasado por parámetro.

const fruitsList = fruits.join("-")

console.log(fruitsList)

// Map Prototype: Devuelve un array transformado según un determinado callback

const completedFruits = fruits.map( fruit => `Fruta ${fruit}` )

const objectFruits = fruits.map( (fruit, index, array) => ({
    id: index,
    name: fruit
}))

console.log(completedFruits)
console.log(objectFruits)

// Pop Prototype: Modifica el array original eliminando el último elemento y devuelve el elemento quitado.

const fruitsToPop = fruits;

const lastFruit = fruits.pop()

console.log(lastFruit)
console.log(fruitsToPop)

// Push Prototype: Modifica el array original agregando un elemento al final y devuelve el nuevo length del array

const newLengthFruits = fruits.push("Mandarina")

console.log(fruits, newLengthFruits)

// Shift: Devuelve el array sin el elemento en posición cero.

const firstFruit = fruits.shift()

console.log(firstFruit)
console.log(fruits)

// Slice Prototype: Devuelve un fragmento del array original basado en sus index.

const cutFruits = fruits.slice(1, 3)

console.log(cutFruits)

// Some y every Prototype: Deveulven un booleano. Some Si uno cumple una condición. Every todos tienen que cumplirla.

const someCondition = fruits.some( fruit => fruit === "Manzana")
const everyCondition = fruits.every( fruit => fruit.includes("a"))

console.log(fruits)
console.log(someCondition)
console.log(everyCondition)

// Splice Prototype: Modifica el contenido de un. array elminando elementos existentes y/o agergando nuevos.
console.log("supermarketlist", supermarketList)
const deletedItemsSupermarketList = supermarketList.splice(2, 4, "Tomate", "Atún") // Index de elementos a eliminar, cantitad de elementos a eliminar, elementos a agregar en esa posicion

console.log(supermarketList)
console.log(deletedItemsSupermarketList)

// Sort prototype: Modifica el array ordenandolo, por default ascendente.

supermarketList.sort()
console.log(supermarketList)

const numberList = [ 1, 2, 11, 200, 1000]
numberList.sort()
console.log(numberList)

numberList.sort((a, b) => b - a) // Descendente
numberList.sort((a, b) => a - b) // Acendente
console.log(numberList)

// Reduce Prototype: Sirve para reducir un array a una mínima expresión

const totalCount = numberList.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 )
console.log(totalCount)