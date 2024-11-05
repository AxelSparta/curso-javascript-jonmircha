// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const cantCaracteres = str =>
  typeof str === 'string' && str
    ? str.length
    : 'El dato ingresado no es correcto'

console.log(
  'Cantidad de caracteres de: Hola mundo:',
  cantCaracteres('Hola mundo')
)
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const subCadena = (str, num1) =>
  typeof str === 'string' && str && typeof num1 === 'number'
    ? str.slice(0, num1)
    : 'Los datos ingresados no son correctos'

console.log('Recorte de hola mundo, 4:', subCadena('Hola mundo', 4))
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']
const arreglo = (str, caracter) =>
  typeof str === 'string' && str && typeof caracter === 'string' && caracter
    ? str.split(caracter)
    : 'Los datos ingresados no son correctos'

console.log(arreglo('hola buenas tardes soy axel', ' '))

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repeatStr = (str, cant) =>
  typeof str === 'string' && typeof cant === 'number' && cant >= 0
    ? str.repeat(cant)
    : 'Los datos ingresados no son correctos'

console.log(repeatStr('hola', 5))
