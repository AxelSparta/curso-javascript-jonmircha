const d = document

export default function lottery (listItemId, btnId) {
  // llenando array
  const items = []
  d.querySelectorAll(listItemId).forEach((item) =>
    items.push(item.textContent)
  )

  d.addEventListener('click', (e) => {
    if (e.target.matches(btnId)) {
      // generando ganador
      alert(`El ganador es ${items[Math.floor(Math.random() * items.length)]}`)
    }
  })
}
