// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const randomNum = () => Math.floor(Math.random() * 100 + 501)

console.log(randomNum())

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicuaNum = num =>
  num && typeof num === 'number'
    ? num.toString() === num.toString().split('').reverse().join('')
    : 'Argumento ingresado no válido'

console.log(capicuaNum(232))
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorial = num => {
  if (num && typeof num === 'number' && num > 0) {
    let i = num
    result = 1
    while (i > 1) {
      result *= i
      i--
    }
    return result
  }
  return 'Argumento ingresado no válido'
}

console.log(factorial(5))
