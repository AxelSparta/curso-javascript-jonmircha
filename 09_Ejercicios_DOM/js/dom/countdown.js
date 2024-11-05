const getDays = (time) => {
  const days = Math.floor(time / (24 * 60 * 60 * 1000))
  const restWithoutDays = time - days * 24 * 60 * 60 * 1000
  return { days, restWithoutDays }
}

const getHours = (time) => {
  const hours = Math.floor(time / (1000 * 60 * 60))
  const restWithoutHours = time - hours * 60 * 60 * 1000
  return { hours, restWithoutHours }
}

const getMinutes = (time) => {
  const minutes = Math.floor(time / (1000 * 60))
  const restWithoutMinutes = time - minutes * 60 * 1000
  return { minutes, restWithoutMinutes }
}

const getSeconds = (time) => {
  const seconds = Math.floor(time / 1000)
  return { seconds }
}

const dateValidation = (date) => {
  if (date < Date.now()) return false
  return true
}

export default function countDown (dateInput, countdown, finalMessage) {
  const d = document
  const $countdown = d.querySelector(countdown)
  let dateNow, interval
  d.querySelector(dateInput).addEventListener('change', (e) => {
    clearInterval(interval)
    $countdown.innerHTML = null
    const date = new Date(e.target.value).getTime()
    if (dateValidation(date)) {
      interval = setInterval(() => {
        dateNow = Date.now()
        const { days, restWithoutDays } = getDays(date - dateNow)
        const { hours, restWithoutHours } = getHours(restWithoutDays)
        const { minutes, restWithoutMinutes } = getMinutes(restWithoutHours)
        const { seconds } = getSeconds(restWithoutMinutes)
        d.querySelector(
          countdown
        ).innerHTML = `Faltan: ${days} Días ${hours} Horas ${minutes} Minutos ${seconds} Segundos: `

        if (dateNow > date) {
          console.log('hola mundo')
          $countdown.innerHTML = `${finalMessage}`
          clearInterval(interval)
        }
      }, 1000)
    } else {
      alert('Fecha ingresada no válida')
    }
  })
}
