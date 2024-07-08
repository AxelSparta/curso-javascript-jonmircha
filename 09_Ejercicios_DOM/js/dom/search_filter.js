const d = document

export default function searchFilter (input, selector) {
  d.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') e.target.value = ''
    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((node) => {
        node.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? node.classList.remove('filter')
          : node.classList.add('filter')
      })
    }
  })
}
