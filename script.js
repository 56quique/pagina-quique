const tarjetas=document.querySelectorAll(".tarjeta");

const modal=document.getElementById("modal");

const titulo=document.getElementById("tituloCurso");
const contenido=document.getElementById("contenidoCurso");

const cerrar=document.querySelector(".cerrar");

tarjetas.forEach(tarjeta=>{

tarjeta.addEventListener("click",()=>{

let curso=tarjeta.dataset.curso;

if(curso==="electricidad"){

titulo.innerText="Electricidad Industrial";

contenido.innerText="Comprender la distribución eléctrica en planta industrial. Incluye tableros, cargas, protecciones y diagnóstico de fallas.";

modal.style.display="flex";

}

});

});

cerrar.onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}