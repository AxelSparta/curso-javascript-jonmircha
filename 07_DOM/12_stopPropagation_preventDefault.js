const $divs = document.querySelectorAll('.eventos-flujo div')
const $enlace = document.querySelector('.tres a')

const handler = function (event) {
  event.stopPropagation() // para la propagación de los eventos
  console.log(
    `Hola te saluda ${this.className} el click lo originó ${event.target.className}`
  )
}
$divs.forEach(div => {
  div.addEventListener('click', handler)
})
$enlace.addEventListener('click', e => {
  e.preventDefault() // cancela la acción por default, en este caso que no se abra el enlace
  e.stopPropagation()
})
