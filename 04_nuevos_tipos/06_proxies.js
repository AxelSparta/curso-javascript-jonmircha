// Tiene que ver con la POO, el Proxi es un nuevo mecanismo que nos permite crear un objeto, basado en un objeto literal inicial.
// Va a recibir un objeto literal

const persona = {
  name: '',
  last_name: '',
  age: 0
}

const handler = {
  set (obj, prop, value) {
    // El método set del handler nos permite validar las propiedades y valores que le asignemos a nuestro objeto.
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error('La propiedad no existe en el objeto.')
    }
    // name, last_name validation
    if (
      (prop === 'name' || prop === 'last_name') &&
      typeof value !== 'string'
    ) {
      return console.error(`the value of property ${prop} is not valid`)
    }

    // age validation
    if (prop === 'age' && typeof value !== 'number') {
      return console.error(`the value of property ${prop} is not valid`)
    }
    obj[prop] = value
  }
}

// Proxy crea un nuevo objeto basandose en el objeto que le pasamos, si modificamos el Proxy el objeto original también se modificará, están vinculados.
const yo = new Proxy(persona, handler)
yo.name = 12
yo.last_name = 'Sparta'
yo.age = 21
console.log(yo, persona)
