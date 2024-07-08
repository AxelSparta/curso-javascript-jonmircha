export default function pageTheme (btn, elementsSelector) {
  const d = document
  const $btn = d.querySelector(btn)
  const $elements = d.querySelectorAll(elementsSelector)

  if (localStorage.getItem('theme') === 'dark') {
    $elements.forEach((el) => {
      el.classList.add('dark-theme')
    })
    $btn.innerHTML = '🌞'
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light')
        $btn.innerHTML = '🌙'
        $elements.forEach((el) => {
          el.classList.remove('dark-theme')
        })
      } else {
        localStorage.setItem('theme', 'dark')
        $btn.innerHTML = '🌞'
        $elements.forEach((el) => {
          el.classList.add('dark-theme')
        })
      }
    }
  })
}
