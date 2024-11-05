const card = document.createElement('div')
const title = document.createElement('h2')
const paragraph = document.createElement('p')
const textTitle = document.createTextNode('Tarjeta Desde Javascript')
const textParagraph = document.createTextNode(
  'Descripción tarjeta desde javascript'
)
const $cards = document.querySelector('.cards')

title.appendChild(textTitle)
paragraph.appendChild(textParagraph)
card.appendChild(title)
card.appendChild(paragraph)
$cards.appendChild(card)

const continents = ['America', 'Oceanía', 'Asia', 'África', 'Europa']
const $ul = document.createElement('ul')

$cards.appendChild($ul)
continents.forEach(el => {
  const $li = document.createElement('li')
  $li.textContent = el
  $ul.appendChild($li)
})

// La inserción al DOM demanda muchos recursos por lo que conviene utilizar fragmentos y hacer una sola inserción en vez de varias como en el ejemplo anterior.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
const $fragment = document.createDocumentFragment()
const $ul2 = document.createElement('ul')

meses.forEach(el => {
  const $li = document.createElement('li')
  $li.textContent = el
  $ul2.appendChild($li)
})

$fragment.appendChild($ul2)
$cards.appendChild($fragment)
