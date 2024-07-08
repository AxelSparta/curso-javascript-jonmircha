// la etiqueta template no se renderiza en el dom, nos sirve como base estructural para manejar el dom dinámicamente

const $cards = document.querySelector('.cards')
const $template = document.getElementById('template-card').content
const $fragment = document.createDocumentFragment()
const cardsContent = [
  {
    title: 'Tecnología',
    img: 'http://via.placeholder.com/200x200'
  },
  {
    title: 'Animales',
    img: 'http://via.placeholder.com/200x200'
  },
  {
    title: 'Arquitectura',
    img: 'http://via.placeholder.com/200x200'
  },
  {
    title: 'Gente',
    img: 'http://via.placeholder.com/200x200'
  },
  {
    title: 'Naturaleza',
    img: 'http://via.placeholder.com/200x200'
  }
]

cardsContent.forEach(el => {
  $template.querySelector('img').setAttribute('src', el.img)
  $template.querySelector('img').setAttribute('alt', el.title)
  $template.querySelector('figcaption').textContent = el.title

  const $clone = document.importNode($template, true) // clonamos un el nodo, true indica que copia toda la estructura interna.
  $fragment.appendChild($clone)
})

$cards.appendChild($fragment)
