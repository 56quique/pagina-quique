const cursos = document.querySelectorAll(".curso:not(.no-disponible)");

const modal = document.getElementById("modal");

const titulo = document.getElementById("tituloCurso");
const contenido = document.getElementById("contenidoCurso");

const cerrar = document.querySelector(".cerrar");

cursos.forEach(curso => {

curso.addEventListener("click", () => {

const tipo = curso.dataset.curso;

if(tipo === "electricidad"){

titulo.innerText="Electricidad Industrial";

contenido.innerHTML=`
<h3>Objetivo</h3>
<p>Comprender la distribución eléctrica industrial.</p>

<h3>Unidades</h3>
<ul>
<li>Esquema de instalación eléctrica</li>
<li>Cargas industriales</li>
<li>CCM y protecciones</li>
<li>Seguridad eléctrica</li>
<li>Diagnóstico de fallas</li>
</ul>

<p><b>Duración:</b> 4 horas</p>
`;

}

if(tipo==="neumatica"){

titulo.innerText="Neumática Industrial";

contenido.innerHTML=`
<ul>
<li>Producción de aire comprimido</li>
<li>Preparación del aire</li>
<li>Válvulas neumáticas</li>
<li>Cilindros</li>
</ul>
`;

}

if(tipo==="electronica"){

titulo.innerText="Electrónica Industrial";

contenido.innerHTML=`
<ul>
<li>Componentes electrónicos</li>
<li>Electrónica de potencia</li>
<li>Diagnóstico de placas</li>
</ul>
`;

}

modal.style.display="flex";

});

});

cerrar.onclick=function(){

modal.style.display="none";

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}