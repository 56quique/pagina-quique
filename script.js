const capacitaciones = {

A:[
{
titulo:"Electricidad Industrial Básica",
imagen:"img/curso1.jpg",
descripcion:"Introducción a instalaciones eléctricas industriales."
},
{
titulo:"Lectura de Planos Eléctricos",
imagen:"img/curso2.jpg",
descripcion:"Interpretación de diagramas y planos eléctricos."
},
{
titulo:"Instrumentos de Medición",
imagen:"img/curso3.jpg",
descripcion:"Uso de multímetro y herramientas de medición."
}
],

B:[
{
titulo:"Mantenimiento Industrial",
imagen:"img/curso4.jpg",
descripcion:"Principios básicos de mantenimiento en planta."
},
{
titulo:"Neumática Industrial",
imagen:"img/curso5.jpeg",
descripcion:"Funcionamiento de sistemas neumáticos."
},
{
titulo:"Hidráulica Básica",
imagen:"img/curso6.jpg",
descripcion:"Principios de sistemas hidráulicos."
}
],

C:[
{
titulo:"Variadores de Velocidad",
imagen:"img/curso1.jpg",
descripcion:"Configuración y aplicación en motores."
},
{
titulo:"PLC Básico",
imagen:"img/curso2.jpg",
descripcion:"Introducción a controladores programables."
},
{
titulo:"Automatización Industrial",
imagen:"img/curso3.jpg",
descripcion:"Conceptos de automatización en procesos."
}
]

};

function mostrarCursos(area){

const contenedor=document.getElementById("cursos");

contenedor.innerHTML="";

capacitaciones[area].forEach(curso=>{

contenedor.innerHTML+=`

<div class="curso">

<img src="${curso.imagen}">

<h4>${curso.titulo}</h4>

<p>${curso.descripcion}</p>

</div>

`;

});

window.scrollTo({
top:contenedor.offsetTop,
behavior:"smooth"
});

}