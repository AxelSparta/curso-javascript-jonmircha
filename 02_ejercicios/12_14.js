// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numPrimo = num => {
  // validación
  if (typeof num !== 'number' || num <= 1) { return 'argumento ingresado no válido' }

  // resolución
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(numPrimo(111))

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = num => {
  if (typeof num !== 'number') return 'data error'
  if (num % 2 === 0) return 'Par'
  return 'Impar'
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celciusFahrenheit = (num, unit) => {
  // validations
  if (typeof num !== 'number' && typeof unit !== 'string') return 'data error'
  if (unit !== 'F' || unit !== 'C') return 'wrong unit'
  if (unit === 'F' && num <= -459.67) return 'cannot be absolute 0 or less'
  if (unit === 'C' && num <= -273.15) return 'cannot be absolute 0 or less'

  // resolution
  if (unit === 'F') return `${(5 * (num - 32)) / 9} °C`
  if (unit === 'C') return `${(9 * num) / 5 + 32} °F`
}
