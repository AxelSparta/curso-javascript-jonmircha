// se puede exportar funciones, variables, constantes, clases y objetos. Van dentro de un objeto y luego hay que destructurar cada dato

export function sumar (a, b) {
  return a + b
}
export function restar (a, b) {
  return a - b
}

export const PI = Math.PI

export const usuario = 'Jon'

export class Saludar {
  constructor () {
    console.log('Hola Clases +ES6')
  }
}
// export default solo se puede usar una vez por archivo. No va dentro de un objeto con lo cual no hay que desestructurarlo
export default function saludar () {
  console.log('Hola Módulos +ES6')
}
