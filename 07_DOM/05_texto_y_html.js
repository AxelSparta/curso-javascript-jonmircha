const $whatIsDOM = document.getElementById('que-es')
const text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `

$whatIsDOM.textContent = text // contenido textual, no interpreta las etiquetas html
$whatIsDOM.innerHTML = text // renderiza las etiquetas html
// $whatIsDOM.outerHTML = text // reemplaza el elemento $whatIsDom por text y renderiza el html dentro de text
