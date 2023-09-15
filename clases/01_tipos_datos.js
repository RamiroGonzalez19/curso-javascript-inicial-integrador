console.log("Hola Mundo")

let nombre = "Ramiro"

const fechaDeNacimiento = "31/08/2002"
const altura = "1.78cm"

let ejemploInteger = 20
let ejemploFloat = 13.19 // 20/6

let potencia = 2 ** 3
let multiplicacion = 2 * 3
let modulo = 20 % 6

// CRECER UN AñO
let edad = 21
let estado = 'sobrio'
console.log('antes de crecer', edad)

// INCREMENTAR
edad = edad + 1
edad++
console.log('despues de crecer', edad)

//OPERACION LOGICA
esMayorDeEdad = edad > 18
estaSobrio = estado == 'sobrio'
console.log('Puede manejar?', esMayorDeEdad && estaSobrio)

//OBJETO
let persona = {             //ejemplo de JSON JavaScript Object Notation 
    nombre: "Ramiro",
    edad: 21,               
    casado: false,

}
console.log(persona.edad, persona.nombre)

//ARRAY
let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

console.log(dias[0])