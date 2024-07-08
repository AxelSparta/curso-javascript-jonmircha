const d = document,
  $form = d.getElementById('song-search'),
  $loader = d.querySelector('.loader'),
  $error = d.querySelector('.error'),
  $main = d.querySelector('main'),
  $artist = d.querySelector('.artist'),
  $song = d.querySelector('.song')

$form.addEventListener('submit', async e => {
  e.preventDefault()
  try {
    $loader.style.display = 'block'
    let artist = e.target.artist.value,
      song = e.target.song.value,
      $artistTemplate = ``,
      $songTemplate = ``,
      artistAPIURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist.toLowerCase()}`,
      songAPIURL = `https://api.lyrics.ovh/v1/${artist.toLowerCase()}/${song.toLowerCase()}`,
      artistRes = await fetch(artistAPIURL),
      artistData = await artistRes.json(),
      songRes = await fetch(songAPIURL),
      songData = await songRes.json()
    console.log(artistData, songData)
  } catch (error) {
    console.log(error)
    let message = error.statusText || 'Ocurrió un error'
    $error.innerHTML = `Error ${error.status || 404}: ${message}`
    $error.style.display = 'block'
  } finally {
    $loader.style.display = 'none'
    setTimeout(() => {
      $error.style.display = 'none'
    }, 3000)
  }
})
