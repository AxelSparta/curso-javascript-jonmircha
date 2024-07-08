// WeakSet

// solo pueden almacenar referencias débiles, las llaves deben ser de tipo objeto, al momento de que una de estas referencias se hayan nulificado, el recolector de basura las va a limpiar.
// no se pueden recorrer, no son elementos iterables
// para agregar elementos es necesario utilizar el método add
// let ws = new WeakSet([false, true, false, 'hola']); no es correcto.
// solo tienen 3 métodos add, delete, has
const ws = new WeakSet()

// ws.add(1); solo se aceptan referencias débiles, es decir, objetos.
let data1 = { nombre: 'Axel' }
let data2 = { apellido: 'Sparta' }
let data3 = { phoneNumber: 2615866854 }

ws.add(data1)
ws.add(data2)
ws.add(data3)
ws.add({})
console.log(ws)
ws.delete(data3)
console.log(ws)
ws.add(data3)

setInterval(() => console.log(ws), 1000)
setTimeout(() => {
  data1 = null // al nulificar las variables el recolector de basura al ws tambien lo limpia, es decir le quita el elemento
  data2 = null
  data3 = null
}, 5000)

// WeakMap
// solo tienen 4 métodos delete, has, set, get

const wm = new WeakMap()
let key1 = { key1: 'hola mundo' }
let key2 = { key2: 'hola mundo2' }
let key3 = { key3: 'hola mundo3' }

// La llave tiene que ser una "referencia débil"
wm.set(key1, 'value')
wm.set(key2, false)
wm.set(key3, true)

console.log(wm)
wm.delete(key2)
console.log(wm)
wm.set(key2, false)
console.log(wm.get(key2))

setInterval(() => console.log(wm), 1000)
setTimeout(() => {
  key1 = null
  key2 = null
  key3 = null
}, 5000)
