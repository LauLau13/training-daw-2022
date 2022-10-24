//1.Revisar, entender y comprender el código proporcionado:
/*Respuesta:

Cada vez que se hace click en el botón que llama a la función realiza lo siguiente:
function onClick() {
    //Detecta el elemento tabla
    let tbody = document.getElementsByTagName('tbody')[0]

    //crea una fila tr y añade en la 1a columna el texto '0',
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = '0'
    tr.appendChild(td)

    //añade en la segunda columna el nombre 'Example'
    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    //añade en la última columna el Surname 'Surname'
    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    //Llama a la línea recien creada y la imprime por pantalla
    tbody.appendChild(tr)
    console.log('add')
}
*/

//2.Hacer que el ID se autoincremental (mediante una variable)
//3. Añadir una columna “Acciones” en el HTML
/*4.Añadir, a los datos que se incluyen cada que se pulsa el botón, 
un enlace a la url ‘http://localhost/edit/id*/
let value = 1;

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = value ++;
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    a = document.createElement('a')
    a.innerText = 'enlace'
    a.href = 'http://localhost/edit/' + current
    td.appendChild(a)
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}
