window.addEventListener('load', function() {
    console.log('estoy funcionando');

    var imagenes = [];

    imagenes[0] = 'images/fornais.jfif'
    imagenes[1] = 'images/rogue.webp'
    document.getElementById("imagen-slider").src = imagenes[0];
    
    var indiceImagenes = 0;

    var tiempo = 1000;

    function cambiarimagenes() {

        document.getElementById("imagen-slider").src = imagenes[indiceImagenes];

        if (indiceImagenes < 2 ) {
            indiceImagenes++;
        } else{
            indiceImagenes = 0;
        }    
        

    }

    setInterval(cambiarimagenes, tiempo);


});