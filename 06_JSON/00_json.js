// JSON Javascript Object Notation.
// JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos. Está basado sobre sintaxis JavaScript pero es diferente a ella: algo JavaScript no es JSON, y algo JSON no es JavaScript.
// JSON es el estandar en el intercambio de información.
// Las propiedades van con doble comillas.
// En javascript hay un objeto llamado JSON que contiene dos métodos que nos permite convertir datos de tipo JSON a tipos de datos javascript
/* https://www.json.org/json-es.html */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */
const json = {
  cadena: 'Jon',
  numero: 35,
  booleano: true,
  arreglo: ['correr', 'programar', 'cocinar'],
  objeto: {
    twitter: '@jonmircha',
    email: 'jonmircha@gmail.com'
  },
  nulo: null
}

console.log(json)

console.log(JSON)

console.log('*** JSON.parse ***')
console.log(JSON.parse('{}'))
console.log(JSON.parse('[1,2,3]'))
console.log(JSON.parse('true'))
console.log(JSON.parse('false'))
console.log(JSON.parse('19'))
console.log(JSON.parse('"Hola Mundo"'))
console.log(JSON.parse('null'))
// console.log(JSON.parse("undefined"));
console.log(JSON.parse('{ "x": 2, "y": 3 }'))

console.log('*** JSON.stringify ***')
console.log(JSON.stringify({}))
console.log(JSON.stringify([1, 2, 3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(19))
console.log(JSON.stringify('Hola Mundo'))
console.log(JSON.stringify(null))
console.log(JSON.stringify(undefined))
console.log(JSON.stringify({ x: 2, y: 3 }))

console.log('*** Ejemplo JSON ***')
console.log(JSON.stringify(json))
console.log(
  JSON.parse(
    '{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'
  )
)
