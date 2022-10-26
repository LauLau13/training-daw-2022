//1.Revisar, entender y comprender el código proporcionado:
/*Respuesta:
Cada vez que se hace click en el botón que llama a la función realiza lo siguiente:
function onClick() {
    //Detecta el elemento tabla mediante la eiqueta tbody
    let tbody = document.getElementsByTagName('tbody')[0]

    //Crea una fila tr y añade en la 1a columna td el texto '0',
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = '0'
    //Se agrega a la línea tr la columna td mediante el método appendChild
    tr.appendChild(td)

    //Crea la segunda columna y se le asigna el valor de 'Example'
    td = document.createElement('td')
    td.innerText = 'Example'
    //Se agrega a la línea tr la columna td mediante el método appendChild
    tr.appendChild(td)

    //Crea la tercera columna y se le asigna el valor de 'Surname'
    td = document.createElement('td')
    td.innerText = 'Surname'
    //Se agrega a la línea tr otra columna td mediante el método appendChild
    tr.appendChild(td)

    //Agrega a la tabla la línea tr recién creada mediante el método appendChild
    tbody.appendChild(tr)
    //Imprime la línea recién creada
    console.log('add')
}
*/

//2.Hacer que el ID se autoincremental (mediante una variable)
//3. Añadir una columna “Acciones” en el HTML
/*4.Añadir, a los datos que se incluyen cada que se pulsa el botón, 
un enlace a la url ‘http://localhost/edit/id*/

/*Se crea un valor externo a la función onClick para que el contador value de la ID 
siempre esté inicializado en 1 (ej.2)*/
let value = 1;

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    /*Se asigna value a la 1a columna de la línea recién creada 
    y se le aplica un ++ para que se sume +1 a value cada vez que se llame a la función(ej.2)*/
    td.innerText = value ++;
    tr.appendChild(td);

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    a = document.createElement('a')
    a.innerText = 'enlace'
    a.href = 'http://localhost/edit/'
    td.appendChild(a)
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}
