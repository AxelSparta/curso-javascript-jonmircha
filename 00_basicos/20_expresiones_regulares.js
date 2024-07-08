/*
     Expresiones Regulares
        Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.

        https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

const cadena =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluptatum perferendis ea iure ad odio doloremque earum voluptate.'

const expReg = new RegExp('lorem', 'ig')
console.log(expReg.test(cadena)) // devuelve un booleano
console.log(expReg.exec(cadena)) // devuelve un arreglo con el resultado de la búsqueda

const expReg2 = /lorem{1,}/gi
console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))
