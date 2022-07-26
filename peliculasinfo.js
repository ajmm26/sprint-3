fetch('https://raw.githubusercontent.com/ajmm26/archivos-json/main/json/peliculasinfo.json')
.then(Response =>{
  return Response.json()
})
.then(data =>{
    console.log(data)
    const contenedor = document.getElementById('contenedor')
    data.forEach(element => { contenedor.innerHTML +=`<div class="peliculas">
    <h4 id="titulo">${element['Nombre']}</h4>
    <div class="recuadropeli">
    <img src="${element['imagen']}" alt="" id="img">
    </div>
    <p id="genero" class="genero">${element.genero.genero1}</p>
    <p id="genero2" class="genero">${element.genero.genero2}</p>
    <p id="sipnosis">${element['sipnosis']}</p>
    <p class="director"> Director: ${element['director']}</p>
    <p id="reparto" class="repartoo">Reparto Principal: ${element['reparto principal'].director1},</p>
    <p id="reparto2" class="repartoo">${element['reparto principal'].director2}</p>
    </div>`

        
    });
});

