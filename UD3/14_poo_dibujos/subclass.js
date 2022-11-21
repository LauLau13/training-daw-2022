/*
Crear una clase Point, con 2 coordenadas, x e y
Modificar las clases para que reciban:
- Figure recibirá un punto de situación
- Circle, un punto más el radio
- Square, 2 puntos
- Triangle, 1 punto + ancho + alto

Definir en Figure un método drawPosition, que imprimirá la posición dónde se encuentra

Definir un método draw, que pintará los datos de la figura, llamando previamente al método drawPosition para que pinte la posición (pej: “Estoy en 3,4. Soy un círculo de radio 3”);
 */

class Figure {
    print() {
        console.log('I\'m a figure');
    }
}

class Square extends Figure {
    print() {
        console.log('I\'m a square');
    }
}

class Circle extends Figure {
}

class Triangle extends Figure {
    print() {
        super.print();
        console.log('and a triangle')
    }
}


let draws = [new Figure(3,4), new Square(7,8,9,9), new Circle(4,5,7), new Triangle(2,3,2,4)]
draws.forEach(f => f.print())