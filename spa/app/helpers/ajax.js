export const ajax = async (props) => {
  const { url, cbSuccess } = props
  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      document.getElementById('posts').innerHTML = `
            <div class="error">
                <p>Error: ${err.status}: ${
        err.statusText || 'Ocurrió un error'
      }</p>
            </div>
        `
      document.querySelector('.loader').style.display = 'none'
      console.log(err)
    })
}
