/*
Forms 
8.1. El botón enviar sólo debe estar habilitado si se han mandado los 2 checks
8.2. EL combo de opciones sólo estará habilitado si se pulsa "sí" en el primer check
8.3. Nombre y apellidos son obligatorios. Si no se han rellenado al pulsar el botón, informar al usuario
8.4. El tamaño máximo de la descripción es de 80 carácteres
8.5. Implementar algún mecanismo para prevenir el doble submit
*/

window.onload = function() {
    submit = document.getElementById('submit');
    submit.disabled = true;

    opciones = document.getElementById('opciones')
    opciones.style.display = 'none';

    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue

    
}

//8.1 DobleCheck
function DoubleCheckSend()
{
    if (document.getElementById('condiciones').checked 
        && document.getElementById("privacidad").checked) submit.disabled = false;

    else submit.disabled = true;

}

//8.2 Show Options
function enableOptionsCombo(){
    if (document.getElementById('pregunta_si').checked) opciones.style.display = 'block';
    else opciones.style.display = 'none';
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}