// ---------------------------------PROPIEDADES Y EVENTOS---------------------------------

// evento cuando se modifica el tamaño de la ventana
window.addEventListener('resize', e => {
  console.clear()
  console.log(e)
  console.log(e.type)
  // parte del viewport
  console.log(window.innerWidth)
  console.log(window.innerHeight)
  // todo el conjunto de las barras de marcadores, navegación, pestañas, etc.
  console.log(window.outerWidth)
  console.log(window.outerHeight)
})

// evento cuando escroleamos
window.addEventListener('scroll', e => {
  console.clear()
  console.log(e)
  // Nos indica cuantos pixeles está desplazada desde la izquierda
  console.log(window.scrollX)
  // Nos indica cuantos pixeles está desplazada desde el top
  console.log(window.scrollY)
})

// evento cuando carga la página
window.addEventListener('load', e => {
  console.log(e)
  // Nos indica desde donde empieza la ventana del navegador en nuestra pantalla
  console.log(window.screenX)
  console.log(window.screenY)
})

// evento cuando el documento se carga
document.addEventListener('DOMContentLoaded', e => {
  console.log(e)
  // Nos indica desde donde empieza la ventana del navegador en nuestra pantalla
  console.log(window.screenX)
  console.log(window.screenY)
})

// ------------------------------------METODOS------------------------------------
const $abrirBtn = document.querySelector('#abrir-ventana')
const $cerrarBtn = document.querySelector('#cerrar-ventana')
const $imprimirBtn = document.querySelector('#imprimir-ventana')
let ventana

$abrirBtn.addEventListener('click', e => {
  ventana = window.open('https://www.youtube.com')
})

$cerrarBtn.addEventListener('click', e => {
  ventana.close()
})

$imprimirBtn.addEventListener('click', e => {
  window.print()
})

// ------------------------------------Objetos: URL, Historial y Navegador------------------------------------

// OBJETO: location
console.log(window.location)
console.log(window.location.origin)
console.log(window.location.protocol)
console.log(window.location.host)
console.log(window.location.hostname)
console.log(window.location.port)
console.log(window.location.href)
console.log(location.hash) // detecta el valor de la UTL que está después de un hash #
console.log(location.pathname)
// location.reload()
console.log(location.search)

// OBJETO: history
console.log('********** Objeto Historial (history) **********')
console.log(history)
console.log(history.length)
// history.forward(1);
// history.go(-3);
// history.back(2);

console.log('********** Objeto Navegador (navigator) **********')
console.log(navigator)
console.log(navigator.connection)
console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.mimeTypes)
console.log(navigator.onLine)
console.log(navigator.serviceWorker)
console.log(navigator.storage)
console.log(navigator.usb)
console.log(navigator.userAgent)
