const handler = function (event) {
  console.log(
    `Hola te saluda ${this.className} el click lo originó ${event.target.className}`
  )
}
// le añadimos el evento al document teniendo un sólo listener, luego a través de validaciones le añadimos funcionalidad a nuestros elementos, también no hay necesidad del stopPropagation ya que no hay propagación
document.addEventListener('click', e => {
  console.log('click en', e.target)
  if (e.target.matches('.eventos-flujo div')) {
    handler.call(e.target, e)
  }
  if (e.target.matches('.eventos-flujo a')) {
    e.preventDefault()
  }
})
