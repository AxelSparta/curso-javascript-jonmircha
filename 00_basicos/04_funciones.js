// Es un bloque de código, que se define una vez y se puede ejecutar varias veces, es decir reutilizarlo. Puede o no recibir parámetros, también puede devolver o no valores (de cualquier tipo, incluso funciones).

/*
HOISTING
Lo que sucede es que las declaraciones de variables (con var) y funciones normales son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
Si sirve de ayuda, puedes pensar que es como si JavaScript moviese las declaraciones de funciones al principio del código.
Por esta razón es posible llamar a una función normal antes de ser declarada en el código, esto no sucede con las function expression
*/

// función normal
console.log(sumar(3, 5)) // puede ser llamada antes por el hoisting
function sumar (a, b) {
  return a + b
}

// funcion anónima o function expression:
const suma = function (a = 0, b = 0) {
  return a + b
}
const result = suma(10, 15)
console.log(result)

// arrow function: forma más legible de escribir funciones, éstas no respetan el contexto donde se encuentran.
const data = {
  name: 'Axel',
  last_name: 'Sparta',
  age: 21,
  greets: () => {
    console.log(this.name) // no hace efecto el this, porque no respeta el contexto en el que se encuentra.
  },
  greets2 () {
    console.log(this.name)
  }
}

data.greets()
data.greets2()
