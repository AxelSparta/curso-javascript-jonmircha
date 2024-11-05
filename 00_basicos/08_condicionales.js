// Estructura de control, es aquel mecanismo que permite controlar el flujo de nuestras instrucciones, normalmente las instrucciones de un programa se ejecutan secuencialmente. Las estructuras de control nos va a permitir controlar eso.
// Estructuras condicionales:
// if - else
// si una condición se cumple ejecuta el bloque de código
let edad = 18
if (edad >= 18 && edad < 100) {
  console.log('Eres mayor de edad')
} else if (edad < 18 && edad > 0) {
  console.log('Eres menor de edad')
} else {
  console.log('No has ingresado un dato válido')
}

// Déjame dormir: 0hrs - 5hrs
// Buenos días: 6hrs - 11hrs
// Buenas tardes: 12hrs - 19hrs
// Buenos noches: 20hrs - 23hrs
const hora = 0
if (hora >= 0 && hora <= 5) {
  console.log('Déjame dormir')
} else if (hora >= 6 && hora <= 11) {
  console.log('Buenos días')
} else if (hora >= 12 && hora <= 19) {
  console.log('Buenas tardes')
} else if (hora >= 20 && hora <= 23) {
  console.log('Buenas noches')
} else {
  console.log('Hora inválida')
}

// Operador ternario (condition)  ? true : false
const eresMayor = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad'
console.log(eresMayor)

// switch - case
// 0domingo 1lunes 2martes 3miércoles 4jueves 5viernes 6sábado
const day = new Date().getDay()
switch (day) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Lunes')
    break
  case 2:
    console.log('Martes')
    break
  case 3:
    console.log('Miércoles')
    break
  case 4:
    console.log('Jueves')
    break
  case 5:
    console.log('Viernes')
    break
  case 6:
    console.log('Sábado')
    break
  default:
    // Si no entra en ninguno de los casos anteriores va a caer acá
    console.log('Número del día inválido')
    break
}

switch (day) {
  case 0:
  case 6:
    console.log('Es fin de semana')
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('hay que trabajar')
    break
  case 5:
    console.log('hoy es viernes')
    break
}

// El patrón switch(true)
edad = 25

switch (true) {
  case edad >= 18 && edad < 25:
    console.log('Eres mayor de edad y eres joven')
    break
  case edad >= 25 && edad < 40:
    console.log('Eres mayor de edad y estás en plena madurez')
    break
  case edad >= 40:
    console.log('Eres mayor de edad y estás en la mejor edad')
    break
  default:
    console.log('Eres menor de edad')
}
// alternativa a if-else if
