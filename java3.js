let boton = document.getElementById("slide");
let imagen =document.getElementById("imagend");
let i=0;
let distancia=0;
let imagenes= ["bambi.jpg","wall.jpg","depredador.jpg","deadpool.jpg"];



function cambiaFoto(){
    moverImagenActual();
    setTimeout(posicionarImagenActual, 2100);
        setTimeout(vacia,2100);  
        
        
        setTimeout(aparecerImagenActual,2300);

    
}

function vacia(){
    imagen.src= imagenes[i];
    i++;
    if(i==imagenes.length){
        i=0;
    }
};

function moverImagenActual(){
    imagen.style.transform="translate(-1100px, 0px)";
    imagen.style.transition="2s";
}



function posicionarImagenActual(){
    imagen.style.transform="translate(2000px, 0px)";
    
    imagen.style.transition="0.0005s";
    

}

function aparecerImagenActual(){
    imagen.style.transform="translate(0px, 0px)";
    imagen.style.transition="2.2s";
}


/*
function cambiarImagen(nombreImagen){
    imagen.src= "bambi.jpg";
    console.log("La imagen se cambio ahora.");
};
*/
boton.addEventListener('click',cambiaFoto);


