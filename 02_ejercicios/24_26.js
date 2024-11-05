// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenandoNums = arr => {
  if (!arr) return 'no array'
  if (!(arr instanceof Array)) return 'data error'
  if (arr.length === 0) return 'empty array'
  for (const el of arr) {
    if (typeof el !== 'number') return 'data error'
  }

  return {
    asc: [...arr].sort((a, b) => a - b),
    desc: [...arr].sort((a, b) => b - a)
  }
}
console.log(ordenandoNums([7, 5, 7, 8, 6]))

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarDuplicados = arr => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) { return 'Argumento no válido' }
  const map = new Map()
  const result = []
  for (const el of arr) {
    if (!map[el]) {
      result.push(el)
      map[el] = true
    }
  }
  return result
}

console.log(eliminarDuplicados(['x', 10, 'x', 2, '10', 10, true, true]))

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = arr => {
  if (!arr || !(arr instanceof Array) || arr.length === 0) { return 'Argumento no válido' }

  let result = 0
  for (const el of arr) {
    if (typeof el !== 'number') return 'data error'
    result += el
  }

  return result / arr.length
}

console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
