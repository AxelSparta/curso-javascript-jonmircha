// Las funciones que utilizan callbacks toman tiempo para obtener un resultado, por eso reciben una función que se ejecutará cuanto se obtenga dicho resultado.

// El anidamiento de callbacks se conoce como callback hell, esto es poco legible y hay otras técnicas para resolver este problema.
function cuadradoCallback (value, callback) {
  setTimeout(() => {
    callback(value, value * value)
  }, 0 | (Math.random() * 1000))
}

cuadradoCallback(0, (value, result) => {
  console.log('Inicia Callback')
  console.log(`Callback: ${value}, ${result}`)
  cuadradoCallback(1, (value, result) => {
    console.log(`Callback: ${value}, ${result}`)
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`)
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`)
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`)
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`)
            console.log('Fin Callback')
            console.log('Callback Hell !!!!!😈🤘')
            console.log('http://callbackhell.com/')
          })
        })
      })
    })
  })
})
