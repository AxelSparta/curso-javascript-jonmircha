const d = document
const $table = d.querySelector('.crud-table')
const $form = d.getElementById('crud-form')
const $title = d.querySelector('.crud-title')
const $template = d.getElementById('crud-template').content
const $fragment = d.createDocumentFragment()
const URL = 'http://localhost:3000/users'

const ajax = options => {
  const { url, method, success, error, data } = options
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState !== 4) return

    if (xhr.status >= 200 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText)
      success(json)
    } else {
      const message = xhr.statusText || 'Ocurrió un error'
      error(`Error ${xhr.status}: ${message}`)
    }
  })
  xhr.open(method || 'get', url)
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  xhr.send(JSON.stringify(data))
}

const getUsers = () => {
  ajax({
    url: URL,
    success: res => {
      res.forEach(user => {
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
      // console.log(res);
    },
    error: errorMessage => {
      console.error(errorMessage)
    }
  })
}

d.addEventListener('click', e => {
  // start editing saint
  if (e.target.matches('.edit')) {
    const { name, username, email, phone, id } = e.target.dataset
    $form.name.value = name
    $form.username.value = username
    $form.email.value = email
    $form.phone.value = phone
    $form.id.value = id
    $title.textContent = 'Edit user'
  }

  // delete saint
  if (e.target.classList.contains('delete')) {
    const id = e.target.dataset.id
    if (confirm('Are you sure?')) {
      ajax({
        url: `${URL}/${id}`,
        method: 'delete',
        success: res => d.location.reload(),
        error: err => $form.insertAdjacentHTML('afterend', `<p>${err}</p>`)
      })
    }
  }
})

d.addEventListener('submit', e => {
  if (e.target === $form) {
    e.preventDefault()

    if (!e.target.id.value) {
      // Create user
      ajax({
        url: URL,
        method: 'post',
        data: {
          name: e.target.name.value,
          username: e.target.username.value,
          email: e.target.email.value,
          phone: e.target.phone.value
        },
        success: res => d.location.reload(),
        error: err => $form.insertAdjacentHTML('afterend', `<p>${err}</p>`)
      })
    } else {
      // edit user
      ajax({
        method: 'put',
        url: `${URL}/${e.target.id.value}`,
        data: {
          name: e.target.name.value,
          username: e.target.username.value,
          email: e.target.email.value,
          phone: e.target.phone.value
        },
        success: res => d.location.reload(),
        error: error => $form.insertAdjacentHTML('afterend', `<p>${error}</p>`)
      })
    }
  }
})

d.addEventListener('DOMContentLoaded', getUsers)
