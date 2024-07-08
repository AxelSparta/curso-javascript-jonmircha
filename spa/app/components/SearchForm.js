export function SearchForm () {
  const d = document
  const $form = d.createElement('form')
  const $input = d.createElement('input')

  $input.type = 'search'
  $input.name = 'search'
  $input.placeholder = 'Buscar...'
  $form.classList.add('search-form')

  $form.appendChild($input)

  if (location.hash.includes('#/search')) {
    $input.value = localStorage.getItem('wpSearch')
  }

  d.addEventListener('search', (e) => {
    if (!e.target.matches("input[type='search']")) return false
    if (!e.target.value) localStorage.removeItem('wpSearch')
  })

  d.addEventListener('submit', (e) => {
    if (!e.target.matches('.search-form')) return false
    e.preventDefault()
    // console.log("buscando...");
    localStorage.setItem('wpSearch', e.target.search.value)
    location.hash = `#/search?search=${e.target.search.value}`
  })

  return $form
}
