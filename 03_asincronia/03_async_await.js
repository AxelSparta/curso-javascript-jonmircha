function cuadradoPromise (value) {
  if (typeof value !== 'number') {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    )
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value
      })
    }, 0 | (Math.random() * 1000))
  })
}

// Otra forma de manejar las promesas, a través de una función que se especifica que manejará código asíncrono y con el bloque trycatch para evaluar el código y poder catchear los errores, el await especifica que tiene que esperar hasta que la operación termine antes de ejecutar la siguiente línea.
async function funcionAsincronaDeclarada () {
  try {
    console.log('Inicio Async Function')

    let obj = await cuadradoPromise(0)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(1)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(2)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise('3')
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(4)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(5)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    console.log('Fin Async Function')
  } catch (err) {
    console.error(err)
  }
}

funcionAsincronaDeclarada()

const funcionAsincronaExpresada = async () => {
  try {
    console.log('Inicio Async Function')

    let obj = await cuadradoPromise(6)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(7)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(8)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise('9')
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(10)
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    console.log('Fin Async Function')
  } catch (err) {
    console.error(err)
  }
}

funcionAsincronaExpresada()
