const $linkDOM = document.querySelector('.link-dom')
console.log($linkDOM.style) // es un Map que nos devuelve los estilos del elemento
console.log(getComputedStyle($linkDOM)) // otra manera de acceder a las propiedades del elemento
console.log(getComputedStyle($linkDOM).color)
console.log(getComputedStyle($linkDOM).getPropertyValue('color'))

// modificación de estilos
// Mediante la notación del punto, para acceder mediante la notación del punto las propiedades van en lowerCamelCase.
$linkDOM.style.color = 'green'
$linkDOM.style.textAlign = 'center'
$linkDOM.style.textDecoration = 'none'
$linkDOM.style.setProperty('border', '1px solid black')

// Mediante el método setProperty
$linkDOM.style.setProperty('display', 'block')
$linkDOM.style.setProperty('width', '50%')
$linkDOM.style.setProperty('margin', '0 auto')
$linkDOM.style.setProperty('padding', '1rem')
$linkDOM.style.setProperty('border-radius', '.5rem')

// variables CSS - Custom properties CSS
// las variables css cuelgan de las propiedades del elemento html
const $html = document.documentElement
const primaryColor = getComputedStyle($html).getPropertyValue('--primary-color')
const secondaryColor = getComputedStyle($html).getPropertyValue('--secondary-color')

$html.style.setProperty('--primary-color', 'gray')

console.log(primaryColor, secondaryColor)
