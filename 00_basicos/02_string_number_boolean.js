// Cadenas de Texto aka Strings
const nombre = 'Axel'
const apellido = 'Sparta'
const saludo = new String('Hola Mundo')
const lorem =
  '   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.   '

console.log(nombre, apellido, saludo)
// algunas propiedades
console.log(nombre.length)
console.log(nombre.toUpperCase()) // método para transformar la cadena en mayúsculas
console.log(lorem.includes('amet')) // nos devuelve un booleano indicando si se encuentra en el texto el string pasado como argumento
console.log(lorem.trim()) // elimina los espacios en el inicio y final
console.log(lorem.split(' ')) // transforma el string en array separado por espacios

// NUMBERS
const a = 2
const b = new Number(1)
const c = 7.19
const d = '5.6'

console.log(a, b)
console.log(c.toFixed(1)) // indicamos que solo queremos un número después de la coma
console.log(c.toFixed(5))
console.log(parseInt(c))
console.log(parseFloat(c))
console.log(typeof c, typeof d)
console.log(a + b)
console.log(c + parseInt(d))
console.log(c + parseFloat(d))
console.log(c + Number.parseInt(d))
console.log(c + Number.parseFloat(d))

// Booleanos
const verdadero = true
const falso = false
const v = Boolean(true)
const f = Boolean(false)

console.log(verdadero, falso, v, f)
console.log(typeof verdadero, typeof falso)
console.log(Boolean(0))
console.log(Boolean(-7))
console.log(Boolean(''))
console.log(Boolean(' '))
// Valores verdaderos (thruty):
console.log(Boolean(true))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(' '))
console.log(Boolean(new Date()))
console.log(Boolean(-42))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))
// Valores negativos (falsy):
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
