window.addEventListener('load', function() {
    console.log('estoy funcionando');

    var imagenes = [];

    imagenes[0] = 'images/fornais.jfif'
    imagenes[1] = 'images/rogue.webp'
    document.getElementById("imagen-slider").src = imagenes[0];
    
    var indiceImagenes = 0;

    var tiempo = 3000;

    function cambiarimagenes() {

        document.getElementById("imagen-slider").src = imagenes[indiceImagenes];

        if (indiceImagenes < 1 ) {
            indiceImagenes++;
        } else{
            indiceImagenes = 0;
        }    
        
    }

    setInterval(cambiarimagenes, tiempo);

    
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })