// Es un tipo de dato se comporta como un array, solo acepta valores únicos, hablando de tipo de datos primitivos.
// El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
const mySet = new Set([true, false, true, {}, {}, [], [], 'hola', 'Hola'])
console.log(mySet)
console.log(mySet.size)

/*
map.keys() –- devuelve un iterable con las claves.
map.values() -– devuelve un iterable con los valores.
map.entries() -– devuelve un iterable para las entradas [clave, valor]. Es el que usa por defecto en for..of.
*/
mySet.forEach(element => console.log(element))
for (const element of mySet) {
  console.log(element)
}

// creando un array desde un set
const arr = Array.from(mySet)
console.log(arr)

mySet.delete('hola')
console.log(mySet)

console.log(mySet.has('hola'))
console.log(mySet.has(19))

mySet.clear()
console.log(mySet)
