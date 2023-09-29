// Trabajando con el DOM
let parrafos = document.getElementsByTagName("p")
console.log("getElementsByTagName:", parrafos)

let parrafos2 = document.getElementsByName("parrafo")
console.log("getElementsByName:", parrafos2)

let parrafo1 = document.getElementById("parrafo")
console.log("getElementById:", parrafo1)

let parrafo2 = document.querySelector("#parrafo")
console.log("querySelector:", parrafo2)

let parrafos3 = document.querySelectorAll(".parrafo")
console.log("querySelectorAll:", parrafos3)

// Propiedades del nodo
console.log(parrafo1.nodeName)
console.log(parrafo1.textContent)
console.log(parrafo1.innerHTML)
console.log(parrafo1.className)
console.log(parrafo1.classList)

// Propiedades del nodo (parentesco)
let card = document.querySelector("div.card")
console.log(parrafo1.childNodes)
console.log(card.parentNode)
console.log(parrafo1.firstChild)
console.log(parrafo1.lastChild)

// Modificando el classList
let classList = parrafo1.classList
classList.add('text-danger')
classList.remove('text-danger')
console.log("classList.contains('text-danger')", classList.contains('text-danger'))

if (classList.contains('text-danger') == false) {
    classList.add('text-danger')
} else {
    classList.remove('text-danger')
}

classList.toggle('text-danger')


// Crear elementos en el DOM

let parrafoNuevo = document.createElement("p")
let textoNuevo = document.createTextNode("Hola Mundo!")
parrafoNuevo.appendChild(textoNuevo)
card.appendChild(parrafoNuevo)
card.removeChild(parrafoNuevo)
// card.remove()

// Ejemplo JSON - Conversion
let autoJson = '{"nombre": "Auto Rojo", "imagen": "./img/auto.jpg"}';
let auto = JSON.parse(autoJson);

console.log(autoJson)
console.log(auto)
console.log(JSON.stringify(auto))

let imagen = document.querySelector('img')
imagen.alt = auto.nombre
imagen.src = auto.imagen

// Ejemplo insertAdjacentHTML
let container = document.querySelector('.container')
container.insertAdjacentHTML("afterbegin", "<span class='text-danger'> Hola Mundo </span>")


// BOM - Window
console.log(window.screenY, screenX)
let google = window.open("http://google.com")
google.resizeTo(800, 600)
google.resizeBy(100, 150)
google.close()

// Location
console.log(location.href)
// location.assign('https://wikipedia.org')
// location.replace("http://google.com")
// location.reload(true)