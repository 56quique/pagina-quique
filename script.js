/* ================================================= */
/* BASE DE DATOS DE CAPACITACIONES */
/* SOLO MODIFICAR ESTA PARTE */
/* ================================================= */

const capacitaciones = {

areaA:[

{
titulo:"Electricidad Industrial",
imagen:"img/curso1.jpg",
info:"Introducción a los sistemas eléctricos industriales.",
detalle:"Descripción completa del curso que aparecerá en el modal."
},

{
titulo:"Mecánica Industrial",
imagen:"img/curso2.jpg",
info:"Mantenimiento, montaje y diagnóstico de sistemas mecánicos industriales.",
detalle:"Descripción completa del curso."
},
{
titulo:"Neumática Industrial",
imagen:"img/curso3.jpg",
info:"Diseño, interpretación y mantenimiento de circuitos neumáticos industriales.",
detalle:"Descripción completa del curso."
},

{
titulo:"Hidráulica Industrial",
imagen:"img/curso4.jpg",
info:"Funcionamiento y mantenimiento de sistemas hidráulicos en maquinaria industrial.",
detalle:"Descripción completa del curso."
},

{
titulo:"Electrónica Industrial",
imagen:"img/curso5.jpeg",
info:"Diagnóstico y mantenimiento de circuitos electrónicos aplicados a sistemas industriales.",
detalle:"Descripción completa del curso."
},

{
titulo:"Automatización Industrial",
imagen:"img/curso6.jpg",
info:"Fundamentos de control automático y automatización de procesos industriales.",
detalle:"Descripción completa del curso."
}

],

areaB:[],

areaC:[]

}



/* ================================================= */
/* FUNCION PARA CREAR TARJETAS AUTOMATICAMENTE */
/* ================================================= */

function cargarArea(area,id){

const contenedor=document.getElementById(id)

area.forEach(curso=>{

const tarjeta=document.createElement("div")

tarjeta.classList.add("tarjeta")

tarjeta.innerHTML=`

<img src="${curso.imagen}">

<h4>${curso.titulo}</h4>

<div class="info">${curso.info}</div>

`

/* EVENTO PARA ABRIR MODAL */

tarjeta.onclick=()=>{

abrirModal(curso.titulo,curso.detalle)

}

contenedor.appendChild(tarjeta)

})

}



/* ================================================= */
/* CARGA DE LAS AREAS */
/* ================================================= */

cargarArea(capacitaciones.areaA,"areaA")
cargarArea(capacitaciones.areaB,"areaB")
cargarArea(capacitaciones.areaC,"areaC")



/* ================================================= */
/* SISTEMA DEL MODAL */
/* ================================================= */

const modal=document.getElementById("modal")

const titulo=document.getElementById("modal-titulo")

const texto=document.getElementById("modal-texto")

const cerrar=document.querySelector(".cerrar")

function abrirModal(t,d){

titulo.textContent=t

texto.textContent=d

modal.style.display="flex"

}

cerrar.onclick=function(){

modal.style.display="none"

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none"

}

}



/* ================================================= */
/* ANIMACION AL HACER SCROLL */
/* ================================================= */

const elementos=document.querySelectorAll(".aparecer")

function mostrarElementos(){

const altura=window.innerHeight

elementos.forEach(el=>{

const distancia=el.getBoundingClientRect().top

if(distancia < altura-100){

el.classList.add("visible")

}

})

}

window.addEventListener("scroll",mostrarElementos)