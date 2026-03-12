/* ===================================
============== */ /* BASE DE DATOS DE CAPACITACIONES */ /* ==========================
======================= */ 
const capacitaciones = { areaA:[ { titulo:"Electricidad Industrial", 
imagen:"img/curso1.jpg", info:"Introducción a los sistemas eléctricos industriales."
detalle:"Contenido completo del curso de electricidad industrial." }, { titulo:"Mecánica Industrial", 
imagen:"img/curso2.jpg", info:"Mantenimiento y diagnóstico de sistemas mecánicos.", 
detalle:"Contenido completo del curso de mecánica industrial." }, { titulo:"Neumática Industrial", 
imagen:"img/curso3.jpg", info:"Diseño e interpretación de circuitos neumáticos.", 
detalle:"Contenido completo del curso de neumática." }, { titulo:"Hidráulica Industrial", 
imagen:"img/curso4.jpg", info:"Funcionamiento y mantenimiento de sistemas hidráulicos.", 
detalle:"Contenido completo del curso de hidráulica." }, { titulo:"Electrónica Industrial",
imagen:"img/curso5.jpeg", info:"Diagnóstico de circuitos electrónicos industriales.", 
detalle:"Contenido completo del curso de electrónica." }, { titulo:"Automatización Industrial", 
imagen:"img/curso6.jpg", info:"Fundamentos de control automático industrial.", 
detalle:"Contenido completo del curso de automatización." } ], 
areaB:[], areaC:[] } 
  
  /* =========================
  ======================== */ /* SISTEMA DE TARJETAS AUTOMATICAS */ /* ============================
  ===================== */ 
  function cargarArea(area,id)
{ const contenedor=document.getElementById(id) 
  area.forEach(curso=>{ const tarjeta=document.createElement("div") 
    tarjeta.classList.add("tarjeta") tarjeta.innerHTML=` <img src="${curso.imagen}"> 
    <h4>${curso.titulo}</h4> <div class="info">${curso.info}</div> ` 
      tarjeta.onclick=()=>{ abrirModal(curso.titulo,curso.detalle) } 
        contenedor.appendChild(tarjeta) observer.observe(tarjeta) }) }

/* =========================
======================== */ /* CARGA DE LAS AREAS */ /* =========================
======================== */ 
cargarArea(capacitaciones.areaA,"areaA") 
  cargarArea(capacitaciones.areaB,"areaB") 
    cargarArea(capacitaciones.areaC,"areaC") 
     
      /* =========================
    ======================== */ /* SISTEMA MODAL */ /* =======================
    ========================== */ const modal=document.getElementById("modal") 
      const titulo=document.getElementById("modal-titulo") 
        const texto=document.getElementById("modal-texto") 
          const cerrar=document.querySelector(".cerrar") 
            function abrirModal(t,d){ titulo.textContent=t texto.textContent=d 
              modal.style.display="flex" } cerrar.onclick=function(){ modal.style.display="none" } 
              window.onclick=function(e){ if(e.target==modal){ modal.style.display="none" } } 
                
  /* ===========================
  ====================== */ /* ANIMACION DE SCROLL */ /* =======================
  ========================== */ 
        const elementos=document.querySelectorAll(".aparecer") 
          function mostrarElementos(){ const altura=window.innerHeight 
            elementos.forEach(el=>{ const distancia=el.getBoundingClientRect().top 
              if(distancia < altura-100){ el.classList.add("visible") } }) } 
window.addEventListener("scroll",mostrarElementos) 
  
  /* =========================
  ======================== */ /* TARJETA ACTIVA EN EL CENTRO */ /* ============================
  ===================== */ 
  const observer = new IntersectionObserver((entradas)=>{ entradas.forEach(entrada=>{ if(entrada.isIntersecting){ document.querySelectorAll(".tarjeta").forEach(t=>{ t.classList.remove("activa") }) 
    entrada.target.classList.add("activa") } }) },{ threshold:0.6 })
