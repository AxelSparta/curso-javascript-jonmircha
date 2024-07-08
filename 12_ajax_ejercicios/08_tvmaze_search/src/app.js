const d = document
const $shows = d.getElementById('shows')
const $template = d.getElementById('show-template').content // el contenido es el que nos interesa
const $fragment = d.createDocumentFragment()

d.addEventListener('keypress', async e => {
  if (e.target.matches('#search') && e.key === 'Enter') {
    try {
      $shows.innerHTML = '<img class="loader" src="./assets/oval.svg" alt="Cargando...">'

      const query = e.target.value.toLowerCase()
      const api = `http://api.tvmaze.com/search/shows?q=${query}`
      const res = await fetch(api)

      if (!res.ok) {
        throw {
          status: res.status,
          statusText: res.statusText || 'Ocurrió un error'
        }
      }

      const json = await res.json()
      console.log(json)

      if (json.length === 0) {
        $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de búsqueda: ${query}</h2>`
      } else {
        json.forEach(el => {
          $template.querySelector('h3').textContent = el.show.name
          $template.querySelector('div').innerHTML =
            el.show.summary || 'Sin descripción'
          // $template.querySelector('img').src = el.show.image?.medium
          $template.querySelector('img').src =
            el.show.image?.medium ||
            'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
          $template.querySelector('img').alt = el.show.name
          $template.querySelector('img').style.maxWidth = '100%'
          $template.querySelector('a').href = el.show.url || '#'
          $template.querySelector('a').target = el.show.url ? '_blank' : '_self'
          $template.querySelector('a').textContent = el.show.url
            ? 'Ver mas...'
            : ''

          const $clone = d.importNode($template, true)
          $fragment.appendChild($clone)
        })

        $shows.innerHTML = ''
        $shows.appendChild($fragment)
      }
    } catch (error) {
      console.log(error)
      $shows.innerHTML = `Error: ${error.status} ${error.statusText}`
    }
  }
})
