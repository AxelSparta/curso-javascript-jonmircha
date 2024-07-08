// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const countLetters = str => {
  // validations
  if (typeof str !== 'string' || !str) return 'Argumentos ingresados no válidos'

  // resolution
  const arr = str.split('')
  let vowels = 0
  let consonants = 0
  arr.forEach(el => {
    if (/[aeiouáéíóúü]/i.test(el)) {
      vowels++
    }
    if (/[bcdfghjklmnñpqrstvwxyz]/i.test(el)) {
      consonants++
    }
  })
  return `vocals: ${vowels}, consonants: ${consonants}`
}
console.log(countLetters('hola mundo 123'))
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const nameValidation = name => {
  if (typeof name !== 'string' || !name) { return 'Argumentos ingresados no válidos' }

  return /^[A-Za-zñÑáéíóúüÁÉÍÓÚÜ\s]+$/g.test(name) // ^nada antes de la expresión $nada después de la expresión
}

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validateEmail = str => {
  if (!str) return 'no email'
  if (typeof str !== 'string') return 'data error'

  return /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    str
  )
}
