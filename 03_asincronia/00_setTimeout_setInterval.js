// setInterval se ejecuta cada el intervalo de tiempo pasado como argumento en milisegundos.
const intervalo = setInterval(() => {
  console.log('Me ejecuto cada un segundo')
}, 1000)

// setTimeout solo se ejecuta una vez luego de los milisegundos pasados.
setTimeout(() => {
  clearInterval(intervalo) // eliminando el interval
}, 3000)

const temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString())
}, 1000)

clearTimeout(temporizador) // eliminando el timeout
console.log('después del clearTimeout')
