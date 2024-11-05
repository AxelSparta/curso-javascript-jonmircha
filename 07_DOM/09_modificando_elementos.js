const $cards = document.querySelector('.cards')
const $cardsClone = $cards.cloneNode(true) // si le pasamos el valor booleano como true va a clonar todo su contenido, si le pasamos false solo clonará el elemento padre.
const $newCard = document.createElement('figure')

$newCard.classList.add('card')
$newCard.innerHTML = `
    <img src="http://via.placeholder.com/200x200">
    <figcaption></figcaption>
`

// ----------------------OLD STYLE--------------------
// $cards.replaceChild($newCard, $cards.children[2]); // reemplaza el 3er hijo de $cards
// $cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// document.body.appendChild($cloneCards);

// ----------------------- COOL style ---------------------
/*
.insertAdjacent...
  .insertAdjacentElement(position, el) // para elementos HTML (nodos html) creados con createElement
  .insertAdjacentHTML(position, html) // para contenido html dentro de ``
  .insertAdjacentText(position, text) // para sólo texto
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

$cards.insertAdjacentElement('beforeend', $newCard)
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')
// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);
