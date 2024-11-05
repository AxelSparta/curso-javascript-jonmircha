// es un tipo de dato primitivo
// Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

const id1 = Symbol('id')
const id2 = Symbol('id')

// Los symbols son únicos solo tienen la misma descripción
console.log(id1 === id2) // false

// 'etiqueta' es una descripción del símbolo
const NOMBRE = Symbol('etiqueta')

// dentro de un objeto los símbolos se comportan como propiedades privadas
const persona = {
  [NOMBRE]: 'Axel',
  apellido: 'Sparta'
}

for (const property in persona) {
  console.log(persona[property])
}

// para acceder al valor del símbolo dentro de un objeto debemos saber el identificador
console.log(persona[NOMBRE])
