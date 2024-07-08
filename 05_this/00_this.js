// this hace referencia al objeto en donde se ejecuta.
console.log('-------------THIS-------------')
const element = document.getElementById('hola')

element.addEventListener('click', function () {
  console.log(this)
})

this.nombre = 'global scope (variable nombre definida en this.js)'
function imprimir () {
  return console.log(this.nombre)
}
// En este caso this hace referencia al objeto donde se ejecuta la función, en este caso es el objeto global document, o global si estamos en nodejs
imprimir()

const obj1 = {
  nombre: 'obj1 scope',
  imprimir
}
// en este caso this hace referencia al scope de obj1.
obj1.imprimir()

const obj2 = {
  nombre: 'obj2 scope',
  // las arrow function mantienen el enlace del contexto donde ha sido creado el objeto en donde se ejecuta.
  imprimir: () => {
    console.log(this.nombre)
  }
}
obj2.imprimir()
