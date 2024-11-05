// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertStr = str =>
  str && typeof str === 'string'
    ? str.split('').reverse().join('') // split devuelve un array, reverse da vuelta el array y join devuelve un string
    : 'Argumento ingresado inválido'

console.log(invertStr('Hola Mundo'))

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const repeatedWords = (str, word) => {
  if (str && typeof str === 'string' && word && typeof word === 'string') {
    let count = 0
    const regExp = new RegExp(word)
    let modStr = str
    let search
    while ((search = regExp.exec(modStr)) !== null) {
      modStr = modStr.slice(search.index + word.length)
      count++
    }
    return `La palabra ${word} se ha encontrado ${count} veces en el string: ${str}`
  }
  return 'Argumentos ingresados no válidos'
}
console.log(repeatedWords('hola mundo adios mundo', 'mundo'))
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = str =>
  str && typeof str === 'string'
    ? str.split('').reverse().join('').toLowerCase() === str.toLowerCase()
      ? `${str} es palindromo`
      : `${str} no es palindromo`
    : 'Argumentos ingresados no válidos'

console.log(palindromo('Salas'))
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const deletePatron = (str, patron) =>
  str && typeof str === 'string' && patron && typeof patron === 'string'
    ? str.replaceAll(patron, '')
    : 'Argumentos ingresados no válidos'

console.log(deletePatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'))
