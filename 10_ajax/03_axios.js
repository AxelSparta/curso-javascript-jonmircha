;(() => {
  const d = document
  const $olUsers = d.getElementById('users')
  const $fragment = d.createDocumentFragment()
  // axios al trabajar con promesas se puede usar una function async
  async function getUsers () {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      res.data.forEach(user => {
        const $li = d.createElement('li')
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`
        $fragment.appendChild($li)
      })
      $olUsers.appendChild($fragment)
    } catch ({ message }) {
      $olUsers.innerHTML = message
    }
  }

  getUsers()
})()
