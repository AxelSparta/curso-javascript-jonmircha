;(() => {
  const d = document
  const $ol = d.getElementById('fetch')
  const $fragment = d.createDocumentFragment()

  // fetch trabaja con promesas
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => (res.ok ? res.json() : Promise.reject(res)))
    .then(json => {
      json.forEach(user => {
        const $li = d.createElement('li')
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`
        $fragment.appendChild($li)
      })
      $ol.appendChild($fragment)
    })
    .catch(err => {
      const errorText = err.statusText || 'Ha ocurrido un error'
      $ol.innerHTML = `Error ${err.status}: ${errorText}`
    })
    .finally(() => {
      console.log('Quitar loader')
    })
})()
