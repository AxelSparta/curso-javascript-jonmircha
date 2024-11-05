// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevateNums = arr => {
  if (!arr || !(arr instanceof Array)) return 'Argumento ingresado no válido'
  if (arr.length === 0) return 'empty array'

  return arr.map(el => {
    if (typeof el === 'number') return el * el
    return 'NaN'
  })
}

console.log(elevateNums([1, 2, 3, 'a']))

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxMin = arr => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) { return 'Argumentos ingresados no válidos' }

  let max = arr[0]
  let min = arr[0]
  let dataError = ''

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (typeof el !== 'number') {
      dataError = 'El arreglo contiene elementos que no son números'
      break
    }
    if (el > max) max = el
    if (el < min) min = el
  }
  return dataError || [max, min]
}
console.log(maxMin([1, 4, 5, 99, -60]))
console.log(maxMin([1, 4, 5, 99, -60, 'a']))
// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresImpares = arr => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) { return 'Argumento ingresado no válido' }

  let dataError = false
  const pares = []
  const impares = []

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (typeof el !== 'number') {
      dataError = true
      break
    }
    if (el % 2 === 0) {
      pares.push(el)
    } else {
      impares.push(el)
    }
  }
  return dataError ? 'El arreglo no contiene sólo números' : { pares, impares }
}

console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 'a']))
