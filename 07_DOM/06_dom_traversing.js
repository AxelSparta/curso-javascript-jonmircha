// dom traversing está enfocado a la iteración de elementos html
const $cards = document.querySelector('.cards')
console.log($cards)
console.log($cards.children)
console.log($cards.children[0])
console.log($cards.parentElement)
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.previousElementSibling) // hace referencia al anterior "hermano"
console.log($cards.nextElementSibling) // hace referencia al siguiente hermano
console.log('last', $cards.closest('body')) // busca el padre más cercano del tipo de selector que le demos

// recorriendo los elementos hijos
for (let i = 0; i < $cards.children.length; i++) {
  console.log($cards.children[i])
}
