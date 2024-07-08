// Estructuras de control repetitivas.
// while    do-while
let contador = 1
while (contador <= 100) {
  console.log(contador)
  contador++
}

// Ejecuta el bloque de código al menos una vez
// do {

// } while (condition);
const arreglo = [10, 20, 30, 40, 50, 60, 70, 80, 90]
for (let index = 0; index < arreglo.length; index++) {
  console.log(arreglo[index])
}

const data = {
  nombre: 'Axel',
  apellido: 'Sparta',
  edad: 21
}
for (const key in data) {
  console.log(`key: ${key}, value: ${data.key}`) // no se puede usar la notación del punto dentro de un for in
  console.log(`key: ${key}, value: ${data[key]}`)
}

// Sirve para iterar un elemento de un objeto, "todo es un objeto" ;)
for (const elemento of arreglo) {
  console.log(elemento)
}
for (const el of 'cadena') {
  console.log(el)
}
