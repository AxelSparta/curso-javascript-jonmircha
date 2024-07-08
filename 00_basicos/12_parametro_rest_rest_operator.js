function sumar (a, b, ...c) {
  // el parámetro c es un arreglo.
  let resultado = a + b

  c.forEach(function (n) {
    resultado += n
  })

  return resultado
}

// si pasamos más de dos argumentos, a partir del tercero se almacenará en un arreglo que podemos manipular dentro de la función
console.log(sumar(1, 2))
console.log(sumar(1, 2, 3))
console.log(sumar(1, 2, 3, 4))
console.log(sumar(1, 2, 3, 4, 5))
console.log(sumar(1, 2, 3, 4, 5, 6))
console.log(sumar(1, 2, 3, 4, 5, 6, 7))

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9, 0]

console.log(arr1, arr2)

const arr3 = [...arr1, ...arr2]
console.log(arr3)
