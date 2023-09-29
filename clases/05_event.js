let button1 = document.querySelector('#boton1')
let button2 = document.querySelector('#boton2')
let botones = document.querySelectorAll('.boton')
let container = document.querySelector('.container')
let link = document.querySelector('a')

// button1.addEventListener("click", function(event) {
//     console.log("Hice click en el boton 1")
// })

// button2.addEventListener("click", function(event) {
//     console.log("Hice click en el boton 2")
// })

// button1.addEventListener("mouseup", (event) => {
//     console.log("mouseup boton 1")
// })

// button1.addEventListener("mousedown", (event) => {
//     console.log("mousedown boton 1, y el click fue el", event.button)

//     if (event.button == 0) {
//         console.log("click izquierdo")
//     }

//     if (event.button == 1) {
//         console.log("click del medio")
//     }

//     if (event.button == 2) {
//         console.log("click derecho")
//     }

// })

document.addEventListener("click", () => {
    console.log("click en el documento")
})


function botonClick(event) {
    let boton = event.target
    console.log("Hice click en el Boton:", boton.id)

    if (boton.id == "boton1") {
        boton.parentNode.classList.add('danger')
    } else if (boton.id == "boton2") {
        boton.parentNode.classList.remove('danger')
    }
}

// button1.addEventListener("click", botonClick)
// button2.addEventListener("click", botonClick)


botones.forEach(boton => {
    boton.addEventListener("click", botonClick)
});

container.addEventListener("click", (event) => {
    console.log("click en el container")
    event.stopPropagation()
})

link.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("link click")
})

document.addEventListener("keydown", (event) => {
    console.log(event.key)

    if (event.key == "b") {
        document.body.style.backgroundColor = "black"
    }

    if (event.key == "w") {
        document.body.style.backgroundColor = "white"
    }
})

addEventListener("keydown", function (event) {
    if (event.code == "Space" && event.ctrlKey) {
        console.log("Continuando!");
    }
});
