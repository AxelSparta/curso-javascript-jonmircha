const d = document
const w = window

export default function responsiveTester (form) {
  const $form = d.querySelector(form)
  let tester

  const validation = (link, width, height) => {
    const regExpURL =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    if (
      regExpURL.test(link) &&
      width <= w.screen.availWidth &&
      width >= 300 &&
      height <= w.screen.availHeight &&
      height >= 300
    ) {
      return true
    } else {
      return false
    }
  }
  const openWindow = (link, width, height) => {
    tester = w.open(
      link,
      'página',
      `innerWidth=${width},innerHeight=${height}`
    )
  }

  const closeWindow = () => {
    tester.close()
  }

  const eventHandler = (e) => {
    if (e.target === $form) {
      e.preventDefault()
      const link = $form.link.value
      const width = $form.width.value
      const height = $form.height.value
      if (validation(link, width, height)) {
        openWindow(link, width, height)
      } else {
        alert('datos incorrectos')
      }
    }
  }

  d.addEventListener('submit', eventHandler)
  d.addEventListener('click', (e) => {
    if (e.target === $form.closeWindow) {
      closeWindow()
    }
  })
}
