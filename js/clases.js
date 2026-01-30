
class Rectangle {
    #height; // Propiedas privadas
    #width;

    constructor (h, w) {
        this.name = "Rectangulo";

        this.#height = h || 0; // Lazy conditional
        this.#width = w || 0;
    }

    get getHeigth () {
        return this.#height;
    }

    get getWidth () {
        return this.#width;
    }

    get getArea () {
        return this.#height * this.#width
    }

    setHeigth (h) {
        this.#height = h || 0
    }

    logArea () {
        console.log(`El área de ${this.name}, es de ${this.getArea}`)
    }
}

const rectangle1 = new Rectangle(10, 5)

rectangle1.setHeigth(90)

console.log(rectangle1.getHeigth)
console.log(rectangle1.getWidth)
console.log(rectangle1.getArea)

rectangle1.logArea()

const rectangle2 = new Rectangle(49, 7)

console.log(rectangle2.getHeigth)
console.log(rectangle2.getWidth)
console.log(rectangle2.getArea)

rectangle2.logArea()

class Square extends Rectangle {
    constructor (length) {
        super(length, length)
        this.name = "Cuadrado"
    }
}

const sq = new Square(8)

console.log(sq.getHeigth)
console.log(sq.getWidth)
console.log(sq.getArea)

sq.logArea()

// Tabla de verdad

// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || false => true
// false || true => true
// false || false => false

// condition ? algo : lo otro