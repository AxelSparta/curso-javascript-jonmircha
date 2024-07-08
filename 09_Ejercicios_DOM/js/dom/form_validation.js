const d = document

export default function contactFormValidations () {
  const $form = d.querySelector('.contact-form')
  const $inputs = d.querySelectorAll('.contact-form [required]')
  $inputs.forEach((input) => {
    const $span = d.createElement('span')
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add('contact-form-error', 'none')
    input.insertAdjacentElement('afterend', $span)
  })

  d.addEventListener('keyup', (e) => {
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

  d.addEventListener('submit', (e) => {
    // e.preventDefault();

    const $loader = d.querySelector('.contact-form-loader')
    const $response = d.querySelector('.contact-form-response')

    $loader.classList.remove('none')

    setTimeout(() => {
      $loader.classList.add('none')
      $response.classList.remove('none')
      setTimeout(() => {
        $response.classList.add('none')
      }, 2000)
      $form.reset()
    }, 3000)
  })
}
