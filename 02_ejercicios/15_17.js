// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binToDec = (num, base) => {
  // validations
  if (typeof num !== 'number' || num <= 0 || (base !== 2 && base !== 10)) { return 'argumentos ingresados no válidos' }
  parseInt(num)
  // resolutions
  if (base === 2) {
    let error = false
    let result = 0
    const arr = num.toString().split('')
    for (let index = 0; index < arr.length; index++) {
      // validacion de numero
      const binario = parseInt(arr[index])
      if (binario !== 1 && binario !== 0) {
        error = true
        break
      }
      result += binario * 2 ** (arr.length - 1 - index)
    }
    if (error === true) { return 'El número binario sólo debe contener ceros y unos' }
    return result
  }

  if (base === 10) {
    const result = []
    let restNum = num
    while (restNum >= 2) {
      result.push(restNum % 2)
      restNum = parseInt(restNum / 2)
    }
    if (restNum === 1) result.push(restNum)
    return parseInt(result.reverse().join(''))
  }
}

console.log(binToDec(111111111110, 2))
console.log(binToDec(300, 10))
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const applyDis = (price, discount) => {
  if (
    typeof price !== 'number' ||
    price <= 0 ||
    typeof discount !== 'number' ||
    discount <= 0 ||
    discount > 100
  ) { return 'Argumentos ingresados no válidos' }

  return price - (price * discount) / 100
}

console.log(applyDis(1000, 20))

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const yearsElapsed = date => {
  if (!date instanceof Date) return 'Argumento ingresado no válido'

  const dateNow = new Date()
  const oneYearInMill = 31536000000
  return parseInt((Date.parse(dateNow) - Date.parse(date)) / oneYearInMill)
}

console.log(yearsElapsed(new Date(1984, 4, 23)))
