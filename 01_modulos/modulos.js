import funcionImportada, {
  sumar as aliass, // cambiando el nombre con as
  restar,
  PI,
  Saludar,
  usuario
} from './exportaciones.js'

console.log(aliass(5, 5))
console.log(restar(5, 3))
console.log(PI)
const saludarObject = new Saludar()
console.log(usuario)

funcionImportada()
