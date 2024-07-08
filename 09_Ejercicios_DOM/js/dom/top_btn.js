export default function backToTop (btn) {
  const d = document
  const $btn = d.querySelector(btn)

  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 300) {
      $btn.style.visibility = 'visible'
      $btn.style.opacity = 1
    } else {
      $btn.style.visibility = 'hidden'
      $btn.style.opacity = 0
    }
  })

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
  })
}
