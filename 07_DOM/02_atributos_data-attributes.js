// Atributos y Data-Attributes
const $linkDOM = document.querySelector('.link-dom')
// obtención de valores de atributos de elementos del DOM
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute('lang'))
console.log(document.querySelector('.link-dom').href)
console.log(document.querySelector('.link-dom').getAttribute('href'))

// seteo de valores de atributos de elementos del DOM
document.documentElement.lang = 'en'
console.log(document.documentElement.lang)
document.documentElement.setAttribute('lang', 'es')
console.log(document.documentElement.getAttribute('lang'))

$linkDOM.setAttribute('href', 'https://youtube.com')
$linkDOM.setAttribute('rel', 'noopener')
$linkDOM.setAttribute('target', '_blank')
console.log($linkDOM.hasAttribute('rel'))
$linkDOM.removeAttribute('rel')
console.log($linkDOM.hasAttribute('rel'))

// data-attributes
console.log($linkDOM.getAttribute('data-description'))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description)
$linkDOM.setAttribute('data-description', 'youtube')
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description = 'youtube perri'
console.log($linkDOM.dataset.description)
$linkDOM.removeAttribute('data-description')
console.log($linkDOM.hasAttribute('data-description'))
