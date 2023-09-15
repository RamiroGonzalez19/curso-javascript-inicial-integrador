let nombre = 'Ramiro'
let apellido = 'Gonzalez'
let nombreCompleto = apellido + ',' + nombre
let mensajeUsuario = 'El nombre completo del alumno es ' + nombreCompleto
console.log(mensajeUsuario)

let persona = {
    nombre: 'Ramiro',
    apellido: 'Gonzalez',
    edad: 21
}

let persona2 = ['Ramiro Array', 'Gonzalez', '21']

console.log('La edad de la persona es: ', persona.edad)
console.log('La edad de la persona es: ', persona2[2])

if (persona.edad > 18) {
    console.log('Puede manejar')
    let suma = 2 + 2
    console.log(suma)
} else {
    console.log('No puede manejar')

}

let calificacion = parseInt(prompt('Ingrese su calificacion: '))

//FORMA 1
if (calificacion === 10) {
    console.log('Perfecto!')

} else {
    if (calificacion === 9) {
        console.log('Muy Bien')
    } else {
        if (calificacion === 8) {
            console.log('Bien')
        } else {
            console.log('Desaprobad0')
        }
    }
}
//FORMA 2
if (calificacion === 10) {
    console.log('Perfecto!')
} else if (calificacion === 9) {
    console.log('Muy Bien!')
} else if (calificacion === 8) {
    console.log('Bien')
} else {
    console.log('Desaprobado')
}
//FORMA 3
switch (calificacion) {
    case 10:
        console.log('Nota: ' + calificacion)
        console.log("Perfecto")
        break
    case 9:
        console.log('Nota: ' + calificacion)
        console.log("Muy bien")
        break
    case 8:
        console.log('Nota: ' + calificacion)
        console.log("bien")
        break
    default:
        console.log('Nota: ' + calificacion)
        console.log("desaprobado")

}
