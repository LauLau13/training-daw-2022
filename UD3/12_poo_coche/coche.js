/* 
Diseñar una clase coche que:
- Contenga el total de gasolina que dispone
- En el constructor se le especifique: marca, modelo, consumoPor100
- Tenga los siguientes métodos
    - reposta (litros): añade litros al total
    - move (distancia): descuenta distancia/consumoPor100 litros del total
    - restante(): devuelve los km que aun podemos hacer (...)
*/

class Coche
{
    //Método constructor
    coche(marca, modelo, consumoPor100)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.consumoPor100 = consumoPor100;
        this.tGasolina = 0;
    }

    reposta (litros)
    {
        if (litros > 0)
        {
            this.tGasolina = this.tGasolina + litros;
            console.log('Total gasolina' + this.tGasolina)
        }
        else
        {
            console.log('La cantidad de gasolina a introducir tiene que ser superior a 0.')
        }
        
    }


    move (distancia)
    {
        if (distancia > 0 && (distancia < ((this.tGasolina * 100)/this.consumoPor100)))
        {
            this.tGasolina = this.tGasolina - ((distancia * this.consumoPor100)/100);
        }
        else if (distancia > 0 && (distancia > ((this.tGasolina * 100)/this.consumoPor100)))
        {
            console.log('La distancia es superior a la que permite el depósito de gasolina')
            console.log('Se han recorrido ' + ((this.tGasolina * 100)/this.consumoPor100) + 'km hasta quedarse sin gasolina')
            this.tGasolina = 0;
            console.log('El depósito de gasolina está vacío, no se puede avanzar más.')
        }
        else
        {
            console.log('Es imposible desplazarse una distancia ' + distancia)
        }
    }


    restante ()
    {
        let kmRestante = (this.tGasolina * 100)/this.consumoPor100;
        console.log('Aún se pueden recorrer ' + kmRestante + ' km');
    }
}