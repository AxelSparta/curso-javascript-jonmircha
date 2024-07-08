/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).

https://developer.mozilla.org/en-US/docs/Web/Events
*/

const handler = () => {
  alert('hola mundo')
  console.log(event)
}

// Por cada evento solo se puede asignar una función
const $eventoSemantico = document.getElementById('evento-semantico')
$eventoSemantico.onclick = handler

// otra forma para añadir varios manejadores
const $eventoMultiple = document.getElementById('evento-multiple')
$eventoMultiple.addEventListener('click', handler)
$eventoMultiple.addEventListener('click', e => {
  console.log('manejador de eventos multiples')
  console.log(e.type, e.target)
})

// remover eventos
const $eventoRemover = document.getElementById('evento-remover')
const eventoDeRemover = e => {
  console.log('evento del botón remover eventos')
}
$eventoRemover.addEventListener('click', eventoDeRemover)
setTimeout(() => {
  removerEvento()
}, 5000)
const removerEvento = e => {
  alert('Removiendo el evento de tipo click')
  $eventoRemover.removeEventListener('click', eventoDeRemover) // hay que pasarle el manejador del evento que se quiere remover
  $eventoRemover.disabled = true
}
