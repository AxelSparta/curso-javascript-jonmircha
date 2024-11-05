const datosPersona = {
  nombre: 'Axel',
  apellido: 'Sparta',
  'nombre completo': 'Axel Sparta', // las keys pueden ser strings
  pasatiempos: ['Escuchar música', 'Programar'],
  contacto: {
    email: 'axelnicolassparta@gmail.com',
    num: 2615866854,
    prueba: function () {
      console.log(this.email) // this hace referencia a contacto
    },
    prueba2: () => {
      console.log(this) // en este caso no hace referencia al objeto donde se encuentra
    }
  },
  saludar: function () {
    return `Hola mi nombre es ${this.nombre} y mis pasatiempos son ${this.pasatiempos[0]} y ${this.pasatiempos[1]}` // this hace referencia a datosPersona
  }
}
// Para acceder a una llave en un objeto usamos un punto
console.log(datosPersona['nombre completo'])
// console.log(`${datosPersona.saludar()} mi nombre es ${datosPersona.nombre}`);
console.log(datosPersona.saludar())
datosPersona.contacto.prueba()
datosPersona.contacto.prueba2()

// iterando objetos
for (const property in datosPersona) {
  console.log(property, datosPersona[property])
}

// creando un array con las keys del objeto
const keys = Object.keys(datosPersona)
console.log(keys)

// creando un array con los valores del objeto
const values = Object.values(datosPersona)
console.log(values)

// creando un array de arrays donde están las keys y values del objeto
const entries = Object.entries(datosPersona)
console.log(entries)

// operador de Encadenamiento Opcional, también llamado Optional Chaining. Para acceder a propiedades de un objeto que no sabemos si existen
// console.log(datosPersona.contact.domicilio) // error fatal al querer leer una propiedad de undefined, ya que contact no existe en nuestro objeto
console.log(datosPersona.contact?.domicilio) // undefined

// Otra forma de comprobar si una propiedad existe es usando el operador in. Este operador comprueba si una propiedad existe en un objeto y devuelve true o false:
console.log('contact' in datosPersona) // false

// Propiedades dinámicas en objetos
const aleatorio = Math.round(Math.random() * 100 + 5)
const objUsuarios = {
  propiedad: 'Valor',
  [`id_${aleatorio}`]: 'Valor Aleatorio'
}
console.log(objUsuarios)

const usuarios = ['Jon', 'Irma', 'Miguel', 'Kala', 'kEnAi']
usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario))

console.log(objUsuarios)
