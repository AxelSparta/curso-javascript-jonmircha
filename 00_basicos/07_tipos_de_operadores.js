// Operadores aritméticos: + - * / ** %
const modulo = 5 % 2 // residuo sin la parte fraccionaria
const potencia = 5 ** 2 // 5 al cuadrado
console.log('potencia', potencia)
console.log('modulo', modulo)
// Operadores relacionales >, <,   >=, <=, ==, ===, !=, !==
console.log('7' == 7) // Comparamos solamente los valores
console.log(0 == false) // los dos valores son falsos
console.log('7' === 7) // Comparamos el tipo de dato y los valores
console.log(0 === false)

// Operadores incremento decremento
let i = 1
i += 5
i /= 2
console.log(i)
// Operador unario
i++
console.log(i)

// Operadores lógicos ! (not) - || (or) - && (and)
console.log(!true)
console.log(!false)
console.log(9 === 9 || '9' === 9)
console.log(9 === 9 && '9' === 9)
console.log(9 === 9 && '9' === '9')
