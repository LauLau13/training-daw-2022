/* Enunciado:
3.1.1 Cambiar el título del segundo h2
3.1.2 Seleccionar el elemento con id == username
3.1.3 Cambiar el color de todos los .first que estén dentro de un artículo
3.1.4 Seleccionar todos los elementos li con class == item
3.1.5 Seleccionar todos los buttons dentro de class == buttons
3.1.6 Cambiar el código de fondo del primer párrafo
3.1.7 Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons

*/

window.onload = function(e) {
    console.log('documento cargado')

    //3.1.1
    let h2 = document.getElementsByTagName('h2')[0].innerText = 'New H2 changed from JS';
    
    //3.1.2
    let ID = document.getElementById("username");

    //3.1.3
    let articleFirstTrue = document.getElementByTagName('article').contains(document.getElementsByClassName("first"));
    if (articleFirstTrue == true) 
    {
        let first = document.getElementsByClassName("first").style.color = "blue";
    }

    //3.1.4
    let liItemTrue = document.getElementByTagName('li').contains(document.getElementsByClassName("item"));
    if (liItemTrue == true) 
    {
        let liItem = document.getElementsByClassName("item");
    }

    //3.1.5
    let buttonsButtonTrue = document.getElementByClassName("buttons").contains(document.getElementsByTagName('button'));
    if (liItemTrue == true) 
    {
        let buttonsButton = document.getElementsByTagName('button');
    }

    //3.1.6
    let text = document.getElementByTagName('Article').firstChild.text.style.backgroundcolor = "beige";

    //3.1.7
    buttonsButtonTrue.style.forecolor = "green";

    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}