window.onload = function() {
    console.log('document loaded');

    fetch('http://dummy.restapiexample.com/api/v1/employees.json')
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
}