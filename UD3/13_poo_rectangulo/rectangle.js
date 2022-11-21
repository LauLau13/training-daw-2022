/*
Modificar la clase Rectangle:
- 1.Añadir en el constructor los datos que faltan para que sea un rectángulo
- 2.Añadir un método para calcular el área
- 3.Añadir un método para saber si 2 rectángulos se superponen (overlay)

*/
class Rectangle {

    // add x1, y1
    constructor(x, y, base, altura) {
        this.x = x;
        this.y = y;
        this.base = base; //1. Dato que falta
        this.altura = altura; //2.Dato que falta
    }

    print() {
        console.log(`Punto origen :[${this.x}, ${this.y}]. Base: ${base}. Altura: ${altura}`)
    }

    //2.Calculo área
    area(){
        console.log(`Área rectángulo : ${(this.base )*(this.altura)}`);
    }

    //3.Superposición de rectángulos
    interferencia (Rectangle){

    }

    puntoTopLeft() {
        let PTopLeft = [this.x, (this.y + this.altura)];
        return PTopLeft;
    }

    puntoBaseRight(){
        let PBaseRight = [(this.x + base), this.y];
        return PBaseRight;
    }

    puntoDiagonal(){
        let PDiagonal = [(this.x + base), (this.y + altura)];
        return PDiagonal;
    }

    // area

    // overlay
    // tenemos que comprobar la siguiente situación
    // .x----------x.....
    // .|..........|.....
    // .|......x---|----x
    // .x------|---x....|
    // ........x--------x
    // Se superponen si alguna de sus coordenadas están dentro de los límites
    // del otro rectángulo
}

let r1 = new Rectangle(5,9);
let r2 = new Rectangle(3,4);

r1.print()
r2.print()

// let area = r1.area();
// console.log(`area ${area}`)

// let isOverlay = r1.overlay(r2)
