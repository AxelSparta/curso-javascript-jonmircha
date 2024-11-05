const d = document
const n = navigator
const w = window
export default function networkStatus () {
  const $div = d.createElement('div')
  let timeOut

  const isOnline = (e) => {
    clearTimeout(timeOut)
    if (n.onLine) {
      $div.textContent = 'Conexión reestablecida'
      $div.classList.add('online')
      $div.classList.remove('offline')
    } else {
      $div.textContent = 'La conexión se ha perdido'
      $div.classList.add('offline')
      $div.classList.remove('online')
    }
    d.body.insertAdjacentElement('afterbegin', $div)
    timeOut = setTimeout(() => {
      d.body.removeChild($div)
    }, 2000)
  }
  w.addEventListener('online', isOnline)
  w.addEventListener('offline', isOnline)
}
