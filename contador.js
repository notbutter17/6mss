const fechaInicio = new Date("June 11, 2024 18:50:25").getTime();
const actualizarContador = setInterval(() => {
   const ahora = new Date().getTime();
   const distancia = ahora - fechaInicio;

   const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
   const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
   const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

   // Actualizar y animar los números
   actualizarElemento("dias", dias);
   actualizarElemento("horas", horas);
   actualizarElemento("minutos", minutos);
   actualizarElemento("segundos", segundos);
}, 1000);

function actualizarElemento(id, valor) {
   const elemento = document.getElementById(id);
   
   // Desvanecer el valor actual
   elemento.classList.add('animate');
   
   // Crear un nuevo span para mostrar el nuevo valor
   const nuevoValor = document.createElement('span');
   
   nuevoValor.innerText = valor.toString().padStart(2, '0');
   
   // Agregar clase para mostrar nuevo valor
   nuevoValor.classList.add('new-value');
   
   // Reemplazar el valor después de un pequeño retraso
   setTimeout(() => {
       elemento.innerText = '';
       elemento.appendChild(nuevoValor);
       elemento.classList.remove('animate');
       nuevoValor.classList.remove('new-value'); // Remover clase después de mostrar
       
       // Resetear la opacidad para la próxima vez
       setTimeout(() => {
           nuevoValor.style.opacity = '1'; // Asegurar que sea visible
       },500);
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       },500);
}

// Manejo del modal
const modal = document.getElementById("miModal");
const btn = document.getElementById("abrirModal");
const span = document.getElementsByClassName("cerrar")[0];

// Abrir el modal al hacer clic en el botón
btn.onclick = function() {
     modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la "x"
span.onclick = function() {
     modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
}

// Contador hasta el día 21 de junio
const fechaObjetivo = new Date("December 21,2024").getTime();
const contadorHasta21Div = document.getElementById("contadorHasta21");
const diasHasta21Span = document.getElementById("diasHasta21");

document.getElementById("mostrarContador").onclick = function() {
     contadorHasta21Div.style.display = "block";
     
     const actualizarContadorHasta21 = setInterval(() => {
         const ahora = new Date().getTime();
         const distanciaHasta21 = fechaObjetivo - ahora;

         const diasHasta21 = Math.floor(distanciaHasta21 / (1000 *60 *60 *24));

         // Actualizar y animar los días restantes
         actualizarElementoHasta21(diasHasta21);
         
         // Detener el contador si se llega a la fecha objetivo
         if (distanciaHasta21 <=0) {
             clearInterval(actualizarContadorHasta21);
             diasHasta21Span.innerText ="00"; // Mostrar cero si ya pasó la fecha
         }
         
     },1000);
};

function actualizarElementoHasta21(valor) {
     diasHasta21Span.classList.add('animate');
     
     // Crear un nuevo span para mostrar el nuevo valor
     const nuevoValor= document.createElement('span');
     
     nuevoValor.innerText=valor.toString().padStart(2,'0');
     
     // Agregar clase para mostrar nuevo valor
     nuevoValor.classList.add('new-value');
     
     // Reemplazar el valor después de un pequeño retraso
     setTimeout(() => {
         diasHasta21Span.innerText ='';
         diasHasta21Span.appendChild(nuevoValor);
         diasHasta21Span.classList.remove('animate');
         nuevoValor.classList.remove('new-value'); // Remover clase después de mostrar
         
         // Resetear la opacidad para la próxima vez
         setTimeout(() => {
             nuevoValor.style.opacity='1'; // Asegurar que sea visible
         },500);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         },500);
}
