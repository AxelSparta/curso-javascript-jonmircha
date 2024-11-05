// console.log(Date()); // GTM -0300 - significa que en Argentina la hora es menos 3 hrs de la hora 0, la hora 0 es la hora en Londres

// Tener en cuenta los años bisiestos

// Cuánto tiempo pasó desde mi nacimiento.
// 1 year = 31556952000 ms
// 1 day = 86400000 ms
// 1 h = 3600000 ms
// 1 min = 60000 ms

// X can be 'year', 'hour', 'minute', 'second';
const calculateRestOfTime = (time, timeOfX, cantX) => {
  return time - timeOfX * cantX
}

// X can be 'year', 'hour', 'minute', 'second';
const calculateCantAndRest = (time, x) => {
  let restOfTime, cantX
  const yearInMill = 31556952000
  const dayInMill = 86400000
  const hourInMill = 3600000
  const minuteInMill = 60000
  const secondInMill = 1000
  if (x === 'year') {
    cantX = Math.floor(time / yearInMill)
    restOfTime = calculateRestOfTime(time, yearInMill, cantX)
    return { years: cantX, timeWithoutYears: restOfTime }
  }
  if (x === 'day') {
    cantX = Math.floor(time / dayInMill)
    restOfTime = calculateRestOfTime(time, dayInMill, cantX)
    return { days: cantX, timeWithoutDays: restOfTime }
  }
  if (x === 'hour') {
    cantX = Math.floor(time / hourInMill)
    restOfTime = calculateRestOfTime(time, hourInMill, cantX)
    return { hours: cantX, timeWithoutHours: restOfTime }
  }
  if (x === 'minute') {
    cantX = Math.floor(time / minuteInMill)
    restOfTime = calculateRestOfTime(time, minuteInMill, cantX)
    return { minutes: cantX, timeWithoutMinutes: restOfTime }
  }
  if (x === 'second') {
    cantX = Math.floor(time / secondInMill)
    restOfTime = calculateRestOfTime(time, secondInMill, cantX)
    return { seconds: cantX, timeWithoutSeconds: restOfTime }
  }
  return {
    error: 'X must be "year", "day", "hour", "minute", "second"'
  }
}
const timeElapsed = (dayBirthday, yearBirthday, monthBirthday) => {
  const birthday = new Date(yearBirthday, monthBirthday, dayBirthday)
  const millBirthday = Date.parse(birthday) // birthday to miliseconds
  const timeElapsedMill = Date.now() - millBirthday

  const { years, timeWithoutYears } = calculateCantAndRest(
    timeElapsedMill,
    'year'
  )
  const { days, timeWithoutDays } = calculateCantAndRest(timeWithoutYears, 'day')
  const { hours, timeWithoutHours } = calculateCantAndRest(
    timeWithoutDays,
    'hour'
  )
  const { minutes, timeWithoutMinutes } = calculateCantAndRest(
    timeWithoutHours,
    'minute'
  )
  const { seconds, timeWithoutSeconds } = calculateCantAndRest(
    timeWithoutMinutes,
    'second'
  )
  return {
    years,
    days,
    hours,
    minutes,
    seconds,
    milliseconds: timeWithoutSeconds
  }
}

const result = timeElapsed(27, 1996, 10)
console.log(result)

console.log(Date())
const fecha = new Date()
console.log(fecha)
// día del mes
console.log(fecha.getDate())
// día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay())
// mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth())
console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
console.log(fecha.toString())
console.log(fecha.toDateString())
console.log(fecha.toLocaleString())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
console.log(fecha.getTimezoneOffset())
console.log(fecha.getUTCDate())
console.log(fecha.getUTCHours())
console.log(Date.now())
const cumpleJon = new Date(1984, 4, 23)
console.log(cumpleJon)
