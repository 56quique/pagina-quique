const capacitaciones = {

A:[
{
titulo:"Fundamentos de Electricidad Industrial",
imagen:"img/curso1.jpg",
descripcion:"Principios fundamentales de instalaciones eléctricas industriales.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Seguridad Eléctrica",
imagen:"img/curso2.jpg",
descripcion:"Normas y prácticas seguras en trabajos eléctricos.",
duracion:"Duración: 6 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Instrumentos de Medición",
imagen:"img/curso3.jpg",
descripcion:"Uso de multímetro y herramientas de diagnóstico.",
duracion:"Duración: 6 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Lectura de Planos Eléctricos",
imagen:"img/curso4.jpg",
descripcion:"Interpretación de diagramas eléctricos industriales.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Motores Eléctricos",
imagen:"img/curso5.jpeg",
descripcion:"Principios de funcionamiento y conexiones.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Tableros Eléctricos",
imagen:"img/curso6.jpg",
descripcion:"Componentes y organización de tableros.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
}
],

B:[
{
titulo:"Mantenimiento Industrial",
imagen:"img/curso1.jpg",
descripcion:"Conceptos de mantenimiento preventivo y correctivo.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Neumática Industrial",
imagen:"img/curso2.jpg",
descripcion:"Principios de funcionamiento de sistemas neumáticos.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Hidráulica Básica",
imagen:"img/curso3.jpg",
descripcion:"Introducción a sistemas hidráulicos.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Sensores Industriales",
imagen:"img/curso4.jpg",
descripcion:"Tipos de sensores utilizados en automatización.",
duracion:"Duración: 6 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Diagnóstico de Fallas",
imagen:"img/curso5.jpeg",
descripcion:"Métodos para detectar problemas en equipos.",
duracion:"Duración: 6 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Seguridad en Planta",
imagen:"img/curso6.jpg",
descripcion:"Buenas prácticas de seguridad industrial.",
duracion:"Duración: 6 horas",
modalidad:"Modalidad: Capacitación in company"
}
],

C:[
{
titulo:"Variadores de Velocidad",
imagen:"img/curso1.jpg",
descripcion:"Control de velocidad en motores eléctricos.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"PLC Básico",
imagen:"img/curso2.jpg",
descripcion:"Introducción a controladores programables.",
duracion:"Duración: 12 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Automatización Industrial",
imagen:"img/curso3.jpg",
descripcion:"Conceptos de automatización en procesos.",
duracion:"Duración: 12 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Control de Motores",
imagen:"img/curso4.jpg",
descripcion:"Arranque y control de motores industriales.",
duracion:"Duración: 8 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Electrónica Industrial",
imagen:"img/curso5.jpeg",
descripcion:"Componentes electrónicos aplicados a la industria.",
duracion:"Duración: 10 horas",
modalidad:"Modalidad: Capacitación in company"
},

{
titulo:"Redes Industriales",
imagen:"img/curso6.jpg",
descripcion:"Comunicación entre equipos de control.",
duracion:"Duración: 10 horas",
modalidad:"Modalidad: Capacitación in company"
}
]

};


function mostrarCursos(area){

const contenedor = document.getElementById("cursos");

let tituloArea = "";

if(area === "A") tituloArea = "Electricidad Industrial";
if(area === "B") tituloArea = "Sistemas mecánicos industriales";
if(area === "C") tituloArea = "Instrumentación y control";

contenedor.innerHTML = `<h2 class="titulo-cursos">${tituloArea}</h2>`;

capacitaciones[area].forEach(curso=>{

contenedor.innerHTML += `

<div class="curso" onclick="abrirModal('${curso.titulo}','${curso.descripcion}','${curso.imagen}','${curso.duracion}','${curso.modalidad}')">

<img src="${curso.imagen}">

<h4>${curso.titulo}</h4>

<p>${curso.descripcion}</p>

</div>

`;

});

contenedor.scrollIntoView({
behavior:"smooth"
});

}



function abrirModal(titulo,descripcion,imagen,duracion,modalidad){

document.getElementById("modal").style.display="flex";

document.getElementById("modalTitulo").innerText = titulo;

document.getElementById("modalDescripcion").innerText = descripcion;

document.getElementById("modalImagen").src = imagen;

document.getElementById("modalDuracion").innerText = duracion;

document.getElementById("modalModalidad").innerText = modalidad;

}


function cerrarModal(){

document.getElementById("modal").style.display="none";

}
