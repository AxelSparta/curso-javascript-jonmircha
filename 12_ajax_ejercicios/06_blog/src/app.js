const d = document
const $main = d.querySelector('main')

fetch('./assets/mi-primer-blog.md')
  .then(res => (res.ok ? res.text() : Promise.reject(res)))
  .then(text => {
    $main.innerHTML = new showdown.Converter().makeHtml(text)
  })
  .catch(err => ($main.innerHTML = err.message))
