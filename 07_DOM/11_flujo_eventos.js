const $divs = document.querySelectorAll('.eventos-flujo div')

const handler = function (event) {
  console.log(
    `Hola te saluda ${this.className} el click lo originó ${event.target.className}`
  )
}
$divs.forEach(div => {
  // fase de burbuja (desde el más interno al más externo)
  // div.addEventListener('click', handler)
  // div.addEventListener('click', handler, false)
  // fase de captura (desde el más externo al más interno)
  // div.addEventListener('click', handler, true)
  /*
    Si no se especifica el parámetro boolean, el valor por defecto es false.
    Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
    Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno
    LA FASE DE CAPTURA ES MÁS OPTIMA QUE LA DE BURBUJA
  */
  div.addEventListener('click', handler, {
    // capture: true
    // once: true // remueve el evento luego de que se ejecute una vez
  })
})
