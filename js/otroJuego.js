var verMas = document.getElementById("verMas")
var click = 0
verMas.addEventListener("click", function () {
    click++
    verMas.textContent = "Ver 1 más"

    if (click == 1) {
        var card1 = document.getElementById("card1")
        card1.classList.remove("d-none")
        var cardBody = document.getElementById("cardBody1")
        cardBody.classList.add("animar")
        var textTitle = document.getElementById("textTitle1")
        textTitle.classList.add("atext")
        var textContent = document.getElementById("textContent1")
        textContent.classList.add("atext")
        var image = document.getElementById("image1")
        image.classList.add("animage")
        var button = document.getElementById("button1")
        button.classList.add("abutton")
    } else if (click == 2) {
        var card2 = document.getElementById("card2")
        card2.classList.remove("d-none")
        verMas.classList.add("d-none")
        var cardBody = document.getElementById("cardBody2")
        cardBody.classList.add("animar")
        var textTitle = document.getElementById("textTitle2")
        textTitle.classList.add("atext")
        var textContent = document.getElementById("textContent2")
        textContent.classList.add("atext")
        var image = document.getElementById("image2")
        image.classList.add("animage")
        var button = document.getElementById("button2")
        button.classList.add("abutton")
    }
})