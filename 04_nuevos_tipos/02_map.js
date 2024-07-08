// El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.
// Iterable es un array o cualquier otro objeto iterable cuyos elementos son pares clave-valor (arrays de 2 elementos). Cada par clave-valor será agregado al nuevo Map.
/*
new Map() – crea el mapa.
map.set(clave, valor)) – almacena el valor asociado a la clave.
map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
map.has(clave) – devuelve true si la clave existe en map, false si no existe.
map.delete(clave) – elimina el elemento con esa clave.
map.clear() – elimina todo de map.
map.size – tamaño, devuelve la cantidad actual de elementos.
*/

const mapa = new Map()
mapa.set('nombre', 'Axel')
// Las llaves de un Map pueden ser number, null, undefined, objetos y demás a diferencia de un objeto primitivo
mapa.set(null, 'value of the key null')
mapa.set(12, 'doce')
mapa.set(undefined, 'no definido')
mapa.set(undefined, 'redefiniendo undefined') // se reemplaza el valor del key undefined

console.log('valor: ', mapa.get(null))
// map es un objeto iterable, con lo cual se puede utilizar el forof y forEach
for (const [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor:${value}`)
}
mapa.forEach((value, key) => {
  console.log(`key ${key}, value ${value}`)
})
console.log(mapa.size) // longitud de Map
