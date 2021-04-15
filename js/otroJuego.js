var verMas = document.getElementById("verMas")
var click = 0
verMas.addEventListener("click", function () {
    click++
    verMas.textContent = "Ver 1 más"

    if (click == 1) {
        var card1 = document.getElementById("card1")
        card1.classList.remove("d-none")
        

    } else if (click == 2){
    var card2 = document.getElementById("card2")
        card2.classList.remove("d-none")
        verMas.classList.add("d-none")
    }
})