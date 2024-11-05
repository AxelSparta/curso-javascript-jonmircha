try {
  console.log('Código a evaluar')
  noExiste
} catch (error) {
  console.log(error)
} finally {
  console.log(
    'El bloque finally se ejecutará siempre al final de un bloque try-catch'
  )
}
try {
  const numero = 'y'

  if (isNaN(numero)) {
    throw new Error('El caractér introducido no es un Número')
  }

  console.log(numero * numero)
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`)
}
