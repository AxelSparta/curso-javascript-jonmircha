// los generators generan iteradores
// generators transforman funciones en iterables.
// convierte el código de una función en un iterable

// Para indicar que es un generator usamos la siguiente sintáxis
function * iterable () {
  yield 'hola mundo' // es como un "return", cuando se llama al método next devuelve este valor y se queda en esta línea, esperando al siguiente next()
  console.log('soy una consola')
  yield 'segundo valor'
  yield 'tercer y último valor.'
}

const iterator = iterable()

/* console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

/* let value = iterator.next();
while(value.done !== true) {
    console.log(value.value);
    value = iterator.next();
} */

/* for (const y of iterator) {
    console.log(y)
} */

/* let arr = [...iterable()]
console.log(arr); */

const cuadrado = number => {
  setTimeout(() => {
    return console.log(number * number)
  }, Math.random() * 1000)
}

function * gen () {
  console.log('Inicio del generador')
  yield cuadrado(1)
  yield cuadrado(2)
  yield cuadrado(3)
  yield cuadrado(4)
  yield cuadrado(5)
  console.log('Fin del generador')
}

const i = gen()
for (const result of i) {
  console.log(result)
}
