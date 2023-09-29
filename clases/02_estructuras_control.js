// Repaso Estructuras de datos

let nombre = "Eduardo"
let apellido = "Denis"
let nombreCompleto = apellido + ", " + nombre
let mensajeUsuario = "El nombre completo del tutor del curso es: " + nombreCompleto
console.log(mensajeUsuario)


// Accediendo Objeto vs Array

let persona = {
    nombre: 'Edu Objeto',
    apellido: 'Denis',
    edad: 30
}

let persona2 = ['Edu Array', 'Denis', 30]

console.log('La edad de la persona es: ' + persona.edad)
console.log('La edad de la persona es: ' + persona2[2])

if (persona.edad > 18) {
    console.log('Puede manejar')
} else {
    console.log('No Puede manejar')
}


// IF-ELSE vs IF-ELSE IF vs SWITCH

// let calificacion = parseInt(prompt("Ingrese su calificacion:"))
let calificacion = 8

console.log('Nota: ' + calificacion)

if (calificacion === 10) {
    console.log('Perfecto')
} else {
    if (calificacion === 9) {
        console.log('Muy bien')
    } else {
        if (calificacion === 8) {
            console.log('Bien')
        } else {
            console.log('Desaprobado')
        }
    }
}

if (calificacion === 10) {
    console.log('Perfecto')
} else if (calificacion === 9) {
    console.log('Muy bien')
} else if (calificacion === 8) {
    console.log('Bien')
} else {
    console.log('Desaprobado')
}

switch(calificacion) {
    case 10:
        console.log('Perfecto')
        break
    case 9:
        console.log('Muy bien')
        break
    case 8:
        console.log('Bien')
        break
    default:
        console.log('Desaprobado')
        break
}


// Estructura Repetir: DO-WHILE
let numero = 0

console.log('Ejemplo DO-WHILE')
do {
    console.log(numero)
    numero = numero + 1
} while (numero < 5)


// Estructura Mientras: WHILE
numero = 0

console.log('Ejemplo WHILE')
while (numero < 5) {
    console.log(numero)
    numero = numero + 1
}


// Estructura Para: FOR
console.log('Ejemplo FOR')
for (let i = 0; i < 5; i++) {
    console.log(i)
}


// Recorriendo un Array
let frutas = ["banana", "naranja", "frutilla"]
console.log("Tamaño del array: " + frutas.length)

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i]
    console.log(fruta)
}


// Ejemplo Contadores y Acumuladores
let notas = [7, 8, 9, 6, 5, 10, 10, 5, 2, 9, 7, 4, 8, 9, 9, 8, 9]
let contador = 0
let acumulador = 0
let notaMinima = Infinity
let notaMaxima = -Infinity

for(let i = 0; i < notas.length; i++) {
    const nota = notas[i]

    // contador y acumulador
    contador = contador + 1 // contador ++
    acumulador = acumulador + nota // acumulador += nota

    // minimo
    if (nota < notaMinima) {
        notaMinima = nota
    }

    // maximo
    if (nota > notaMaxima) {
        notaMaxima = nota
    }
}
console.log('Promedio alumno: ' + acumulador/contador)
console.log('Nota minima: ' + notaMinima)
console.log('Nota maxima: ' + notaMaxima)


// Ejemplo array de objetos
let alumnos = [
    {
        nombre: 'Eduardo',
        apellido: 'Denis',
        promedio: 8.5
    },
    {
        nombre: 'Juan',
        apellido: 'Lopez',
        promedio: 7.5
    },
    {
        nombre: 'Mario',
        apellido: 'Gomez',
        promedio: 10
    }
]

let acumuladorClase = 0

for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i]
    acumuladorClase += alumno.promedio
}
console.log('promedio de la clase: ' + acumuladorClase/alumnos.length)


console.log('Fin')
