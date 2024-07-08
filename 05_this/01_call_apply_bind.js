// call y apply hacen exactamente lo mismo, estos métodos reciben como parámetro el scope en el cual se van a ejecutar.
console.log('-------------CALL Y APPLY-------------')
this.lugar = 'scope global'
const obj3 = {
  lugar: 'scope obj3',
  devolverLugar: function (saludo, nombre) {
    console.log(`${saludo} ${nombre} estamos en ${this.lugar}`)
  }
}
obj3.devolverLugar('Hola', 'Axel')
// El segundo parámetro del método apply es un arreglo en el cual le pasamos los parámetros a nuestra function.
obj3.devolverLugar.apply(this, ['Hola', 'Axel']) // this en este caso hace referencia al objeto global
obj3.devolverLugar.apply(null, ['Hola', 'Axel']) // cuando le pasamos null, la function se va a ejecutar usando el scope global
obj3.devolverLugar.apply(obj3, ['Hola', 'Axel'])

// El método call hace exactamente lo mismo que el método apply, solo que los parámetros de la función no los pasamos como arreglo sino de forma "normal".
obj3.devolverLugar.call(this, 'Hola', 'Axel')
obj3.devolverLugar.call(null, 'Hola', 'Axel')
obj3.devolverLugar.call(obj3, 'Hola', 'Axel')

// bind: lo utilizamos al momento de definir una función, pasándole el contexto en donde se ejecutará
console.log('-------------BIND-------------')
const persona = {
  nombre: 'scope persona',
  saludar: function () {
    console.log(`Hola estoy en: ${this.nombre}`)
  }
}

console.log('persona saludar')
persona.saludar()

const persona2 = {
  nombre: 'scope persona 2',
  saludar: persona.saludar
}

console.log('persona2 saludar')
persona2.saludar() // output 'Hola estoy en scope persona 2', ya que la funcion como se ejecuta en el objeto persona hace referencia a la propiedad nombre de persona2 que no existe.

const persona3 = {
  nombre: 'scope persona 3',
  saludar: persona.saludar.bind(persona) // a la hora de definir la función le pasamos el contexto a la función en donde se va a ejecutar.
}

console.log('persona3 saludar')
persona3.saludar()

const persona4 = {
  nombre: 'scope persona 4',
  saludar: persona.saludar.bind(this), // le pasamos el scope del objeto global, bind es como las arrow function
  devolverScope: function () {
    console.log(this)
  }
}
console.log('persona4 saludar')
persona4.saludar()
