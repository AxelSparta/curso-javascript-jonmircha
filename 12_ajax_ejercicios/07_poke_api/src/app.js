const d = document
const $navLinks = d.querySelector('.nav__links')
const $pokemons = d.querySelector('.pokemons')
const $search = d.querySelector('#search')
const $template = d.querySelector('template')

let globalUrl = ''

const createPokeCard = pokemon => {
  const $pokeCard = d.createElement('figure')
  const $pokeImg = d.createElement('img')
  const $pokeName = d.createElement('h3')
  const $infoList = d.createElement('ul')

  $infoList.innerHTML = `
      <li>Height: ${pokemon.height}</li>
      <li>Weight: ${pokemon.weight}</li>
    `
  pokemon.abilities.forEach(el => {
    const $abilityListItem = d.createElement('li')
    $abilityListItem.innerText = el.ability.name
    $infoList.appendChild($abilityListItem)
  })
  $pokeImg.src = pokemon.sprites.front_default
  $pokeImg.alt = pokemon.name
  $pokeName.innerText = pokemon.name
  $pokeName.classList.add('pokemon__title')
  $pokeCard.classList.add('pokemons__pokemon')
  $infoList.classList.add('pokemon__info')
  $pokeCard.appendChild($pokeImg)
  $pokeCard.appendChild($pokeName)
  $pokeCard.appendChild($infoList)
  return $pokeCard
}

const loadPokemon = async url => {
  try {
    $pokemons.innerHTML = '<img src="./assets/oval.svg" class="loader" alt="loader">'
    const res = await fetch(url)
    if (!res.ok) throw { status: res.status, statusText: res.statusText }
    const json = await res.json()
    const $pokeCard = createPokeCard(json)
    $pokemons.innerHTML = ''
    $pokemons.appendChild($pokeCard)
  } catch (error) {
    $pokemons.innerHTML = `
      <p>Pokémon no encontrado</p>
    `
  }
}

const loadPokemons = async url => {
  globalUrl = url
  try {
    $pokemons.innerHTML = '<img src="./assets/oval.svg" class="loader" alt="loader">'

    const res = await fetch(url)
    if (!res.ok) {
      throw {
        status: res.status,
        statusText: res.statusText || 'Ocurrió un error'
      }
    }

    const json = await res.json()
    const $fragment = d.createDocumentFragment()
    const $prevLink = d.createElement('button')
    const $nextLink = d.createElement('button')

    // recorriendo los pokemones para traer su imagen, for normal ya que el método forEach no espera la respuesta de la petición
    for (let i = 0; i < json.results.length; i++) {
      try {
        const res = await fetch(json.results[i].url)
        if (!res.ok) {
          throw {
            status: res.status,
            statusText: res.statusText || 'Ocurrió un error'
          }
        }
        const pokemon = await res.json()
        const $pokeCard = createPokeCard(pokemon)
        $fragment.appendChild($pokeCard)
      } catch (error) {
        console.error(error)
      }
    }

    // quitando loader y limpiando botones de navegación
    $pokemons.innerHTML = ''
    $navLinks.innerHTML = ''

    // colocando botones de navegación
    if (json.previous) {
      $prevLink.innerText = 'Prev'
      $prevLink.classList.add('nav__link')
      $prevLink.dataset.link = json.previous
      $navLinks.appendChild($prevLink)
    }
    if (json.next) {
      $nextLink.innerText = 'Next'
      $nextLink.classList.add('nav__link')
      $nextLink.dataset.link = json.next
      $navLinks.appendChild($nextLink)
    }

    // cargando pokemons al dom
    $pokemons.appendChild($fragment)
  } catch (error) {
    $pokemons.innerHTML = `<p>Error: ${error.status} ${error.statusText}</p>`
  }
}

d.addEventListener('DOMContentLoaded', e =>
  loadPokemons('https://pokeapi.co/api/v2/pokemon/')
)

d.addEventListener('click', e => {
  if (e.target.matches('.nav__link')) {
    e.preventDefault()
    loadPokemons(e.target.dataset.link)
  }
})

d.addEventListener('change', e => {
  if (e.target === $search) {
    !e.target.value
      ? loadPokemons(globalUrl)
      : loadPokemon(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`)
  }
})
