const d = document

export default function scrollSpy () {
  const $sections = d.querySelectorAll('section[data-scroll-spy]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          d.querySelector(
            `a[data-scroll-spy][href="#${entry.target.id}"]`
          ).classList.add('nav-link-active')
        } else {
          d.querySelector(
            `a[data-scroll-spy][href="#${entry.target.id}"]`
          ).classList.remove('nav-link-active')
        }
      })
    },
    {
      // root por defecto es el document
      // rootMargin: "-300px", // zona interactiva de observación (al section lo empezará a observar con un margin de -300px)
      threshold: 0.4
    }
  )

  $sections.forEach((section) => {
    observer.observe(section)
  })
}
