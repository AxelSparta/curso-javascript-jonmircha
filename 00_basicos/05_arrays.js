// Formas de declarar un array
const a = [1, 2, 3, 'hola']
const b = Array.of(1, 2, 3) // método de clase
const c = new Array(1, 2, 3) // con el constructor
const d = Array(100).fill(true) // crea un arreglo de 100 posiciones y llena las posiciones con el valor true.

console.log(a)
a.push(4) // Agrega un elemento al final del arreglo
console.log(a)
a.pop() // elimina el último elemento del arreglo
console.log(a)

console.log(a.indexOf(1)) // indexOf nos permite saber en qué índice está el elemento que buscamos, si no existe devuelve -1
console.log(a.includes(4)) // includes nos devuelve un booleano dependiendo si el elemento se encuentra o no en el array

// el método some nos permite verificar si alguno de los elementos cumple con una condición
/*
 Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento cada uno de los elementos del Array y debe retornar un valor booleano.

Si al menos uno de los elementos retorna true, entonces el método some retorna true. Si ninguno de los elementos retorna true, entonces el método some retorna false.
 */
console.log(
  a.some(el => {
    if (typeof el === 'number') {
      return true
    } else {
      return false
    }
  })
)
console.log(a.some(el => typeof el === 'number'))

// El método every te permite verificar si todos los elementos de un Array cumplen con una condición.
console.log(a.every(el => typeof el === 'number'))

// El método find te permite encontrar el primer elemento que cumple con una condición. Lo interesante es que este método te devuelve el elemento en sí, no un valor booleano como some y every. Si no encuentra ningún elemento devuelve undefined
console.log(a.find(el => el === 23))

// findIndex: Devuelve el índice del primer elemento que cumple con la condición. Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.
const numbers = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10

// .sort() ordenará los números en función de su valor como cadena de texto, no de su valor numérico.
// Ordenamiento personalizado con sort, pasando una función dependiendo de lo que devuelva:
/*
Un valor negativo si el primer argumento debe aparecer antes que el segundo.
Un valor positivo si el segundo argumento debe aparecer antes que el primero.
Cero si ambos argumentos son iguales.
*/
const nums = [5, 10, 2, 25, 7]

nums.sort((a, b) => a - b) // ordenando números de manera ascendente
console.log(nums)
nums.sort((a, b) => b - a) // ordenando números de manera descendente
console.log(nums)

// Como ves, .sort() modifica el array original. Si quieres obtener un array ordenado sin modificar el original, puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado .
