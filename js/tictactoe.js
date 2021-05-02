const clase_x = 'x'
const clase_circulo = 'circulo'
const combinacionesGood = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const celdas = document.querySelectorAll('[data-cell]')
const tablero = document.getElementById('tablero')
const divTextoVictoria = document.getElementById('mensajeVictoria')
const botonReiniciar = document.getElementById('botonReiniciar')
const textoVictoria = document.querySelector('[data-texto-mensaje-victoria]')
let turnoCirculo;

iniciarJuego()

function iniciarJuego() {
    turnoCirculo = false
    celdas.forEach(celda => {
        celda.classList.remove(clase_x)
        celda.classList.remove(clase_circulo)
        celda.removeEventListener('click', hizoClick)
        celda.addEventListener('click', hizoClick, { once: true })
    })
    hover()
    divTextoVictoria.classList.remove('mostrar')
}




function hizoClick(e) {
    console.log('clickeaste :D')
    const celda = e.target
    const claseActual = turnoCirculo ? clase_circulo : clase_x
    //poner "x" o "O"
    ponerXoO(celda, claseActual)
    if (checarSiGana(claseActual)){
        console.log("ganó")
        terminarJuego(false)
    } else if (hayEmpate()){
        terminarJuego(true)
    } else {
        cambiarTurnos()
        hover()
    }
}

function terminarJuego(empate) {
    if (empate) {
        textoVictoria.innerText = 'Empate!'
    } else if (!empate){
        textoVictoria.innerText = ` Ganan ${turnoCirculo ? "O's" : "X's"} !`
    }
    divTextoVictoria.classList.add('mostrar')
}

function hayEmpate() {
    return [...celdas].every(celda => {
        return celda.classList.contains(clase_circulo) || celda.classList.contains(clase_x)
    })
}

function ponerXoO(celda, claseActual) {
    celda.classList.add(claseActual)
}

function cambiarTurnos() {
    turnoCirculo = !turnoCirculo
}

function hover() {
    tablero.classList.remove(clase_x)
    tablero.classList.remove(clase_circulo)
    if (turnoCirculo) {
        tablero.classList.add('circulo')
    } else if (!turnoCirculo) {
        tablero.classList.add('x')
    }

}

function checarSiGana(claseActual) {
    return combinacionesGood.some(combinacion => {
        return combinacion.every(index => {
            return celdas[index].classList.contains(claseActual)
        })
    })
}