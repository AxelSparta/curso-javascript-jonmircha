;(() => {
  const xhr = new XMLHttpRequest() // 1er paso instanciar el objeto XMLHttpRequest
  const $ol = document.getElementById('xhr')
  const $fragment = document.createDocumentFragment()

  // 2do paso manejar el evento readystatechange
  xhr.addEventListener('readystatechange', e => {
    // este evento se ejecutará por cada cambio de estado de la petición
    // READY_STATE_UNINITIALIZED	0
    // READY_STATE_LOADING	1
    // READY_STATE_LOADED	2
    // READY_STATE_INTERACTIVE	3
    // READY_STATE_COMPLETE	4
    if (xhr.readyState !== 4) return

    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log('Respuesta de la petición', xhr.responseText)
      const json = JSON.parse(xhr.responseText) // parseando a json
      json.forEach(el => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })
      $ol.appendChild($fragment)
    } else {
      console.log(xhr.responseText)
      const errorText = xhr.statusText || 'Ha ocurrido un error'
      $ol.innerHTML = `Error ${xhr.status}: ${errorText}`
    }
  })

  // 3er abrir la petición indicando el método e indicando la url
  xhr.open('get', 'https://jsonplaceholder.typicode.com/users')
  // 4to paso enviar la petición
  xhr.send()
})()
