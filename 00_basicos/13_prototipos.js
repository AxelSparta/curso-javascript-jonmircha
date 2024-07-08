// POO
/*
  La programación orientada a objetos en javascript se realiza a través de funciones prototípicas a partir de las cuales se crean objetos.
  Un prototipo es un mecanismo por el cual un objeto puede heredar de otro. Object es el prototipo del cual heredan todos los tipos de datos.
    Clases - Modelo a seguir.
    Objetos - Es una instancia de una clase
      Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
      Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

// Función constructora
function Animal (nombre, genero) {
  // Atributos
  this.nombre = nombre
  this.genero = genero

  // Métodos: estos métodos se van a duplicar por cada instancia que se tenga de Animal, lo mejor es añadirlos al prototipo.
  this.sonar = () => {
    console.log('Hago sonidos por que estoy vivo')
  }

  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`)
  }
}
// asignando métodos al Prototipo, no a la función como tal
// al añadirlo al prototipo, no se duplica el método en cada instancia que se tenga
Animal.prototype.comer = function () {
  console.log(`Hola me llamo ${this.nombre} y me estoy alimentando`)
}

// Herencia Prototípica
function Perro (nombre, genero, tamanio) {
  this.super = Animal // asignamos cual va a ser el padre
  this.super(nombre, genero) // llamamos al constructor del padre
  this.tamanio = tamanio
}

// Perro está heredando de Animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

// Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log('Soy un perro y mi sonido es un ladrido')
}

Perro.prototype.ladrar = function () {
  console.log('Guauuu Guauuu !!!!')
}
const snoopy = new Perro('Snoopy', 'Macho', 'Mediano')
const lolaBunny = new Animal('Lola Bunny', 'Hembra')

console.log(snoopy)
console.log(lolaBunny)

snoopy.sonar()
snoopy.saludar()
snoopy.ladrar()

lolaBunny.sonar()
lolaBunny.saludar()
