const n = navigator
const d = document

export default function getLocation (id) {
  const $div = d.getElementById(id)
  n.geolocation.getCurrentPosition(
    (position) => {
      const { coords } = position
      $div.innerHTML = `
      <ul>
        <li>
          latitud: ${coords.latitude}
        </li>
        <li>
          longitud: ${coords.longitude}
        </li>
        <li>
          <a href="https://www.google.com/maps/place/@${coords.latitude},${coords.longitude},17z/" rel="noopener" target="_blank">Abrir ubicación en maps</a>
        </li>
      </ul>
      `
    },
    (err) => console.error(err),
    {
      enableHighAccuracy: true,
      timeout: 5000
    }
  )
}
