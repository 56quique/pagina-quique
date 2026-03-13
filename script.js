const capacitaciones = {

A:[
{titulo:"Electricidad Industrial Básica",imagen:"img/curso1.jpg",descripcion:"Principios fundamentales de instalaciones eléctricas industriales."},
{titulo:"Seguridad Eléctrica",imagen:"img/curso2.jpg",descripcion:"Normas y prácticas seguras en trabajos eléctricos."},
{titulo:"Instrumentos de Medición",imagen:"img/curso3.jpg",descripcion:"Uso de multímetro y herramientas de diagnóstico."},
{titulo:"Lectura de Planos Eléctricos",imagen:"img/curso4.jpg",descripcion:"Interpretación de diagramas eléctricos industriales."},
{titulo:"Motores Eléctricos",imagen:"img/curso5.jpeg",descripcion:"Principios de funcionamiento y conexiones."},
{titulo:"Tableros Eléctricos",imagen:"img/curso6.jpg",descripcion:"Componentes y organización de tableros."}
],

B:[
{titulo:"Mantenimiento Industrial",imagen:"img/curso1.jpg",descripcion:"Conceptos de mantenimiento preventivo y correctivo."},
{titulo:"Neumática Industrial",imagen:"img/curso2.jpg",descripcion:"Principios de funcionamiento de sistemas neumáticos."},
{titulo:"Hidráulica Básica",imagen:"img/curso3.jpg",descripcion:"Introducción a sistemas hidráulicos."},
{titulo:"Sensores Industriales",imagen:"img/curso4.jpg",descripcion:"Tipos de sensores utilizados en automatización."},
{titulo:"Diagnóstico de Fallas",imagen:"img/curso5.jpeg",descripcion:"Métodos para detectar problemas en equipos."},
{titulo:"Seguridad en Planta",imagen:"img/curso6.jpg",descripcion:"Buenas prácticas de seguridad industrial."}
],

C:[
{titulo:"Variadores de Velocidad",imagen:"img/curso1.jpg",descripcion:"Control de velocidad en motores eléctricos."},
{titulo:"PLC Básico",imagen:"img/curso2.jpg",descripcion:"Introducción a controladores programables."},
{titulo:"Automatización Industrial",imagen:"img/curso3.jpg",descripcion:"Conceptos de automatización en procesos."},
{titulo:"Control de Motores",imagen:"img/curso4.jpg",descripcion:"Arranque y control de motores industriales."},
{titulo:"Electrónica Industrial",imagen:"img/curso5.jpeg",descripcion:"Componentes electrónicos aplicados a la industria."},
{titulo:"Redes Industriales",imagen:"img/curso6.jpg",descripcion:"Comunicación entre equipos de control."}
]

};

function mostrarCursos(area){

const contenedor = document.getElementById("cursos");

let tituloArea = "";

if(area === "A") tituloArea = "Capacitaciones Fundamentales";
if(area === "B") tituloArea = "Capacitaciones Transversales";
if(area === "C") tituloArea = "Capacitaciones Especiales";

contenedor.innerHTML = `<h2 class="titulo-cursos">${tituloArea}</h2>`;

capacitaciones[area].forEach(curso=>{

contenedor.innerHTML += `

<div class="curso">

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
