const d = document
const $table = d.querySelector('.crud-table')
const $form = d.querySelector('.crud-form')
const $title = d.querySelector('.crud-title')
const $template = d.getElementById('crud-template').content
const $fragment = d.createDocumentFragment()
const URL = 'http://localhost:3000/users'

const getUsers = async () => {
  try {
    const res = await fetch(URL)
    // validation error
    if (!res.ok) {
      throw {
        status: res.status,
        statusText: res.statusText || 'Ocurrió un error'
      }
    }
    const json = await res.json()

    json.forEach(user => {
      $template.querySelector('.name').textContent = user.name
      $template.querySelector('.username').textContent = user.username
      $template.querySelector('.email').textContent = user.email
      $template.querySelector('.phone').textContent = user.phone

      $template.querySelector('.edit').dataset.id = user.id
      $template.querySelector('.edit').dataset.name = user.name
      $template.querySelector('.edit').dataset.username = user.username
      $template.querySelector('.edit').dataset.email = user.email
      $template.querySelector('.edit').dataset.phone = user.phone
      $template.querySelector('.delete').dataset.id = user.id
      const $clone = d.importNode($template, true)
      $fragment.appendChild($clone)
    })
    $table.querySelector('tbody').appendChild($fragment)
  } catch (error) {
    $table.insertAdjacentHTML(
      'afterend',
      `<p>Error ${error.status}: ${error.statusText}</p>`
    )
  }
}

d.addEventListener('click', async e => {
  // start editing user
  if (e.target.matches('.edit')) {
    const { name, username, email, phone, id } = e.target.dataset
    console.log(name, username, email, phone, id)
    $form.name.value = name
    $form.username.value = username
    $form.email.value = email
    $form.phone.value = phone
    $form.id.value = id
    $title.textContent = 'Edit user'
  }

  // delete user
  if (e.target.classList.contains('delete')) {
    try {
      const id = e.target.dataset.id
      if (confirm('Are you sure?')) {
        const res = await fetch(`${URL}/${id}`, {
          method: 'delete'
        })
        if (!res.ok) {
          throw {
            status: res.status,
            statusText: res.statusText || 'Ocurrió un error'
          }
        }

        d.location.reload()
      }
    } catch (error) {
      alert(`Error ${error.status}: ${error.statusText}`)
    }
  }
})

d.addEventListener('submit', async e => {
  if (e.target === $form) {
    e.preventDefault()

    // Create user
    if (!e.target.id.value) {
      try {
        const res = await fetch(URL, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            phone: e.target.phone.value
          })
        })
        if (!res.ok) {
          throw {
            status: res.status,
            statusText: res.statusText || 'Ocurrió un error'
          }
        }
        d.location.reload()
      } catch (error) {
        alert(`Error ${error.status}: ${error.statusText}`)
      }
    } else {
      // edit user
      try {
        const res = await fetch(`${URL}/${e.target.id.value}`, {
          headers: {
            'content-type': 'application/json'
          },
          method: 'put',
          body: JSON.stringify({
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            phone: e.target.phone.value
          })
        })
        if (!res.ok) {
          throw {
            status: res.status,
            statusText: res.statusText || 'Ocurrió un error'
          }
        }
        d.location.reload()
      } catch (error) {
        $form.insertAdjacentHTML(
          'afterend',
          `<p>Error ${error.status}: ${error.statusText}</p>`
        )
      }
    }
  }
})

d.addEventListener('DOMContentLoaded', getUsers)
