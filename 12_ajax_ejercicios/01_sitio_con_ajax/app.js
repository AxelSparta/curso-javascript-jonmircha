const d = document
const $main = d.querySelector('main')

const getHTML = options => {
  const { url, success, error } = options

  const xhr = new XMLHttpRequest()

  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState !== 4) return

    if (xhr.status >= 200 && xhr.status < 300) {
      const html = xhr.responseText
      success(html)
    } else {
      const message = xhr.statusText || 'Ocurrió un error'
      error(`Error ${xhr.status}: ${message}`)
    }
  })

  xhr.open('get', url)
  xhr.setRequestHeader('content-type', 'text/html; charset=utf-8')
  xhr.send()
}

const includeHTML = () => {
  const $includes = d.querySelectorAll('[data-include]')
  $includes.forEach(el =>
    getHTML({
      url: el.dataset.include,
      success: html => (el.outerHTML = html),
      error: err => (el.outerHTML = `<h1>${err}</h1>`)
    })
  )
}

d.addEventListener('DOMContentLoaded', e => {
  getHTML({
    url: 'assets/home.html',
    success: html => ($main.innerHTML = html),
    error: err => ($main.innerHTML = `<h1>${err}</h1>`)
  })
  includeHTML()
})

d.addEventListener('click', e => {
  if (e.target.matches('.menu a')) {
    e.preventDefault()
    getHTML({
      url: e.target.href,
      success: html => ($main.innerHTML = html),
      error: err => ($main.innerHTML = `<h1>${err}</h1>`)
    })
  }
})
