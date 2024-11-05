const d = document
const $main = d.querySelector('main')
const $files = d.getElementById('files')

const uploader = file => {
  const xhr = new XMLHttpRequest()
  const formData = new FormData()

  formData.append('file', file)

  xhr.addEventListener('readystatechange', e => {
    if (xhr.readyState !== 4) return

    if (xhr.status >= 200 && xhr.status < 300) {
      const res = JSON.parse(xhr.responseText)
      console.log(res)
    } else {
      console.log(`error ${xhr.status}: ${xhr.statusText}`)
    }
  })
  xhr.open('post', 'assets/uploader.php')
  xhr.setRequestHeader('enc-type', 'multipart/form-data')
  xhr.send(formData)
}

const progressUploader = file => {
  // creando la barra de progreso
  const $progress = d.createElement('progress')
  const $span = d.createElement('span')

  $progress.value = 0
  $progress.max = 100

  $main.insertAdjacentElement('beforeend', $progress)
  $main.insertAdjacentElement('beforeend', $span)

  const fileReader = new FileReader() // nos permite detectar los bits que se van cargando
  fileReader.readAsDataURL(file)

  fileReader.addEventListener('progress', e => {
    const progress = parseInt((e.loaded * 100) / e.total)
    $progress.value = progress
    $span.innerHTML = `<b>${file.name} - ${progress}%</b>`
  })

  fileReader.addEventListener('loadend', e => {
    uploader(file)
    setTimeout(() => {
      $main.removeChild($progress)
      $main.removeChild($span)
      $files.value = ''
    }, 4000)
  })
}

d.addEventListener('change', e => {
  if (e.target === $files) {
    const files = Array.from(e.target.files)
    files.forEach(file => progressUploader(file))
  }
})
