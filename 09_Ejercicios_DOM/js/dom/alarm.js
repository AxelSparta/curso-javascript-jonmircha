export default function alarm (soundPath, startBtn, stopBtn) {
  const d = document
  const $alarm = d.createElement('audio')
  const $startBtn = d.querySelector(startBtn)
  let timeOut
  $alarm.setAttribute('src', soundPath)
  d.addEventListener('click', (e) => {
    if (e.target.matches(startBtn)) {
      timeOut = setTimeout(() => {
        $alarm.play()
      }, 1000)
      $startBtn.disabled = true
    }
    if (e.target.matches(stopBtn)) {
      clearTimeout(timeOut)
      $alarm.pause()
      $alarm.currentTime = 0
      $startBtn.disabled = false
    }
  })
}
