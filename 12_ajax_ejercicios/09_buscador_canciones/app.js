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
      artistFetch = fetch(artistAPIURL),
      songFetch = fetch(songAPIURL),
      [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
      artistData = await artistRes.json(),
      songData = await songRes.json()
    let artistResult = artistData?.artists[0]
    if (!artistResult || songData.error) throw { error: 'Ocurrió un error' }
    console.log(artistResult, songData)
    $artistTemplate = `
      <h2>${artistResult?.strArtist}</h2>
      <img src="${artistResult.strArtistThumb}" alt="${artistResult.strArtist}">
      <p>${artistResult.strBiographyES}</p>
    `
    $songTemplate = `
    <h2>Letra de la canción</h2>
    <blockquote>${songData.lyrics}</blockquote>
    `
    $artist.innerHTML = $artistTemplate
    $song.innerHTML = $songTemplate
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
