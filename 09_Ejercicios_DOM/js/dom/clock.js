export default function digitalClock (startBtn, stopBtn, reloj) {
  const d = document
  const $clock = d.querySelector(reloj)
  const $startBtn = d.querySelector(startBtn)

  let interval

  const printClock = (e) => {
    interval = setInterval(() => {
      const clockHour = new Date().toLocaleTimeString()
      $clock.innerHTML = clockHour
    }, 1000)
    $startBtn.disabled = true
  }

  const stopClock = (e) => {
    clearInterval(interval)
    $clock.innerHTML = ''
    $startBtn.disabled = false
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches(startBtn)) {
      printClock(e)
    }

    if (e.target.matches(stopBtn)) {
      stopClock(e)
    }
  })
}
