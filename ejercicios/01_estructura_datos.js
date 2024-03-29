// Tienes un grupo de estudiantes, y cada uno tiene un conjunto de notas.  A continuación esta el array con los estudiantes. 

// const estudiantes = [

//   { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
//   { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
//   { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
//   { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
//   { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
// ];

// Realizar tres tareas:
// Calcular el promedio general de la clase. Para hacerlo, suma todas las notas de todos los estudiantes y luego divide esta suma por el total de notas en la clase. Puedes usar un bucle for para recorrer los estudiantes y otro bucle for anidado para sumar las notas de cada estudiante.
// Encontrar la nota más baja entre todos los estudiantes y mostrar el nombre del estudiante que obtuvo esa nota. Puedes utilizar una variable para realizar un seguimiento de la nota más baja mientras recorres los estudiantes.
// Encontrar la nota más alta entre todos los estudiantes y mostrar el nombre del estudiante que obtuvo esa nota. De manera similar al punto anterior, puedes usar una variable para realizar un seguimiento de la nota más alta durante el recorrido.

// Resultado Esperado:

// Promedio General de la Clase: [Valor del promedio]
// Estudiante con la Nota Más Baja: [Nombre del estudiante con la nota más baja]
// Estudiante con la Nota Más Alta: [Nombre del estudiante con la nota más alta]

const estudiantes = [
    { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
    { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
    { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
    { nombre: "Pedro", edad: 21, notas: [80, 82, 70, 90, 85] },
    { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
];

let cont = 0
let acu = 0
let notaMinima = Infinity
let nombreNotaMasBaja
let notaMaxima = -Infinity
let nombreNotaMasAlta

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i]
    const notas = estudiante.notas

    for (let j = 0; j < notas.length; j++) {
        const nota = notas[j]
        acu = acu + nota
        cont = cont + 1
        if (nota <= notaMinima) {
            notaMinima = nota
            nombreNotaMasBaja = estudiante.nombre
        }
        if (nota <= notaMinima) {
            notaMinima = nota
            nombreNotaMasBaja = estudiante.nombre
        }
        if (nota >= notaMaxima) {
            notaMaxima = nota
            nombreNotaMasAlta = estudiante.nombre
        }

    }
}
let promedioGeneral = acu / cont
console.log('Promedio general:', promedioGeneral)
console.log(`El estudiante con la nota mas baja es: ${nombreNotaMasBaja} y su nota es: ${notaMinima}`)
console.log(`El estudiante con la nota mas alta es: ${nombreNotaMasAlta} y su nota es: ${notaMaxima}`)