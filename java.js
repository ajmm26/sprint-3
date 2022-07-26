let boton = document.getElementById("slide");
let imagen =document.getElementById("imagend");
let i=0;
let distancia=0;
let imagenes= ["bambi.jpg","wall.jpg","depredador.jpg","deadpool.jpg"];


function vacia(){
    imagen.src= imagenes[i];
    i++;
    if(i==imagenes.length){
        i=0;
    };
}
 
setInterval(vacia,3000)

