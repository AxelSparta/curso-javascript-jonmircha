;(() => {
  const d = document
  const $olUsers = d.getElementById('fetchasyncawait')
  const $fragment = d.createDocumentFragment()

  async function getUsers () {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!res.ok) {
        const errorMessage = res.statusText || 'Ha ocurrido un error'
        throw new Error(`Error ${res.status}: ${errorMessage}`)
      }
      const json = await res.json()
      json.forEach(user => {
        const $li = d.createElement('li')
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`
        $fragment.appendChild($li)
      })
      $olUsers.appendChild($fragment)
    } catch (error) {
      $olUsers.innerHTML = `${error.message}`
    } finally {
      // console.log('Quitar loader')
    }
  }

  getUsers()
})()
