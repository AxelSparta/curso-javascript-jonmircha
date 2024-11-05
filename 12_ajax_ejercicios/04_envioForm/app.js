const d = document

function contactFormValidations () {
  const $form = d.querySelector('.contact-form')
  const $inputs = d.querySelectorAll('.contact-form [required]')
  $inputs.forEach(input => {
    const $span = d.createElement('span')
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add('contact-form-error', 'none')
    input.insertAdjacentElement('afterend', $span)
  })

  d.addEventListener('keyup', e => {
    if (e.target.matches('.contact-form [required]')) {
      const $input = e.target
      const pattern = $input.pattern || $input.dataset.pattern

      if (pattern && $input.value !== '') {
        const regex = new RegExp(pattern)
        regex.exec($input.value)
          ? d.getElementById($input.name).classList.remove('is-active')
          : d.getElementById($input.name).classList.add('is-active')
      }
      if (!pattern) {
        $input.value === ''
          ? d.getElementById($input.name).classList.add('is-active')
          : d.getElementById($input.name).classList.remove('is-active')
      }
    }
  })

  d.addEventListener('submit', e => {
    e.preventDefault()

    const $loader = d.querySelector('.contact-form-loader')
    const $response = d.querySelector('.contact-form-response')

    $loader.classList.remove('none')
    fetch('https://formsubmit.co/ajax/axelnicolassparta@gmail.com', {
      method: 'POST',
      body: new FormData(e.target)
    })
      .then(res => (res.ok ? res.json() : Promise.reject(res)))
      .then(json => {
        $response.textContent = json.message
      })
      .catch(err => {
        $response.innerHTML = `<p>Error ${err.status}: ${
          err.statusText || 'Ocurrió un error'
        }</p>`
      })
      .finally(() => {
        $loader.classList.add('none')
        $response.classList.remove('none')
        $form.reset()
        setTimeout(() => {
          $response.classList.add('none')
        }, 2000)
      })
  })
}

d.addEventListener('DOMContentLoaded', e => {
  contactFormValidations()
})
