const hola = 'Hola Mundo'
const hello = 'Hello World'
/* let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque. */
// Ambito de bloque
console.log('****************var*****************')
var musica = 'Rock'
console.log('Variable Música antes del Bloque', musica)
{
  var musica = 'Pop'
  console.log('Variable Música dentro del Bloque', musica)
}
console.log('Variable Música después del Bloque', musica)
console.log('****************let*****************')
const musica2 = 'Rock'
console.log('Variable Música antes del Bloque', musica2)
{
  const musica2 = 'Pop'
  console.log('Variable Música dentro del Bloque', musica2)
}
console.log('Variable Música después del Bloque', musica2)

// Las constantes no pueden reasignarse, siempre deben mantener su referencia
const array = [0, 1, 2, 3]
array.push(4) // si bien se modifica el array, la referencia se mantiene
