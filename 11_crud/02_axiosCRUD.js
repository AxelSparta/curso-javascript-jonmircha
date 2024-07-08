const d = document
const $table = d.querySelector('.crud-table')
const $form = d.querySelector('.crud-form')
const $title = d.querySelector('.crud-title')
const $template = d.getElementById('crud-template').content
const $fragment = d.createDocumentFragment()
const URL = 'http://localhost:3000/users'

const getUsers = async () => {
  try {
    const res = await axios.get(URL)
    const { data: users } = res

    users.forEach(user => {
      const { name, username, email, phone, id } = user
      $template.querySelector('.name').textContent = name
      $template.querySelector('.username').textContent = username
      $template.querySelector('.email').textContent = email
      $template.querySelector('.phone').textContent = phone
      $template.querySelector('.edit').dataset.name = name
      $template.querySelector('.edit').dataset.username = username
      $template.querySelector('.edit').dataset.email = email
      $template.querySelector('.edit').dataset.phone = phone
      $template.querySelector('.edit').dataset.id = id
      $template.querySelector('.delete').dataset.id = id
      const $clone = d.importNode($template, true)
      $fragment.appendChild($clone)
    })
    $table.querySelector('tbody').appendChild($fragment)
  } catch (err) {
    $table.insertAdjacentHTML('afterend', `<p>${err.message}</p>`)
  }
}

d.addEventListener('click', async e => {
  // start editing user
  if (e.target.matches('.edit')) {
    const { name, username, email, phone, id } = e.target.dataset
    $form.name.value = name
    $form.username.value = username
    $form.email.value = email
    $form.phone.value = phone
    $form.id.value = id
    $title.textContent = 'Edit user'
  }

  // delete user
  if (e.target.matches('.delete')) {
    try {
      const conf = confirm('Are you sure?')
      if (conf) axios.delete(`${URL}/${e.target.dataset.id}`)
    } catch (error) {
      console.error(error)
    }
  }
})

d.addEventListener('submit', async e => {
  if (e.target === $form) {
    e.preventDefault()

    // Create user
    if (!e.target.id.value) {
      try {
        await axios.post(URL, {
          name: e.target.name.value,
          username: e.target.username.value,
          email: e.target.email.value,
          phone: e.target.phone.value
        })

        location.reload()
      } catch (error) {
        alert(`Error ${error.message}`)
      }
    } else {
      // edit saint
      try {
        await axios({
          url: `http://localhost:5555/santos/${e.target.id.value}`,
          headers: {
            'content-type': 'application/json'
          },
          data: {
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value
          },
          method: 'put'
        })

        d.location.reload()
      } catch (error) {
        $form.insertAdjacentHTML('afterend', `<p>${error.message}</p>`)
      }
    }
  }
})

d.addEventListener('DOMContentLoaded', getUsers)
