// Nodos, Elementos y selectores
// Estos tres selectores no se usan.
console.log(document.getElementsByTagName('a'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('nombre'))
// Se utilizan estos elementos
console.log(document.getElementById('menu'))
console.log(document.querySelector('a')) // devuelve el primer elemento que encuentre
console.log(document.querySelectorAll('a'))
// Los nodelist tienen la propiedad length, se pueden acceder a elementos a través de la notación del arreglo y se pueden recorrer con el método forEach.
console.log(document.querySelectorAll('a')[2])
console.log(document.querySelectorAll('a').length)
document.querySelectorAll('a').forEach(el => console.log(el))
