// La destructuración nos sirve para crear variables dinámicamente a partir de un objeto

// Arreglos
const arr = [1, 2, 3, 4]
const [one, two, three, four] = arr
console.log(one, two, three, four)

// Objetos
const nombre = 'Axel'
const data = {
  nombre, // al crear una propiedad que le queremos dar el valor de una variable, si el nombre de la variable es igual al nombre de la key, lo podemos poner una vez y seria lo mismo que hacer: nombre: nombre,
  apellido: 'Sparta',
  edad: 21,
  contacto: {
    email: 'axelnicolassparta@gmail.com'
  }
}
const {
  nombre: name,
  apellido,
  edad,
  contacto: { email } // en este caso solo creamos la variable email, que se encuentra dentro del objeto contacto
} = data // los nombres de las variables tienen que tener el mismo nombre que la propiedad del objeto al cual se quiere "destructurar", en caso de querer que la variable tenga diferente nombre al de la propiedad del valor se utiliza los dos puntos seguido del nombre que le queremos dar.
console.log(name, apellido, edad, email)
