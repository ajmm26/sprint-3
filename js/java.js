//function principal(){


function principal(){
    

    click();

    setTimeout(darGrados,4000);
    setTimeout(devolverGrados,8000)
};

function darGrados(){
    proximosEstrenos.style.transform="rotate(-15deg);";
    proximosEstrenos.style.transition="2s;";
    console.log("dar grados funciona");
   
}


function devolverGrados(){
    proximosEstrenos.style.transform=" rotate(0deg);";
    proximosEstrenos.style.transition=" 2s;";
    console.log("sacar grados funciona funciona");
   
}

function click(){
    let proximosEstrenos= document.getElementById("proximosEstrenos");
let paraProbar = document.getElementById ("paraProbar");
proximosEstrenos.style.transform= "translateX(0px)"
proximosEstrenos.style.transition="2s";} 

let dia1 = document.getElementById("dia1");
let imagenUno = document.getElementById("imagenUno");
function texto1(){
dia1.style.transform = "translate (0px,0px);"
dia1.style.transition = "2s"
};

imagenUno.addEventListener('onmouseover',texto1);

//paraProbar.addEventListener('click',principal)

//proximosEstrenos.onload= function(){proximosEstrenos.style.transform= "translateX(0px)"
//proximosEstrenos.style.transition="2s";
//}
//};

//proximosEstrenos.addEventListener("load",principal);