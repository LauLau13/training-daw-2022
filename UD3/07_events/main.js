/* 
Enunciado:
7.1 Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
7.2 Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
7.3 Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
7.4 Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
*/

window.onload = function(e) {
    console.log('documento cargado')
    document.getElementById("contenidos_1").style.display = "block";
    document.getElementById("contenidos_2").style.display = "block";
    document.getElementById("contenidos_3").style.display = "block";
}

let contenidoOculto = false;

function onClickOcultar(n){
    let parrafo = document.getElementById(`contenidos_${n}`);
    if (parrafo.style.display === "block") 
    {
        parrafo.style.display = "none";
        document.getElementById(`enlace_${n}`).innerText = "Mostrar contenidos";
    }
    else
    {
        parrafo.style.display = "block";
        document.getElementById(`enlace_${n}`).innerText = "Ocultar contenidos";
    }
    
    console.log("Función realizada");
}

