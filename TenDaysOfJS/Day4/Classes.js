class Polygon {

    constructor(side) {
        this.sides = side;
    }

    perimeter () {
        let sum = 0;
        this.sides.forEach(side => {
            sum += side;
        });
        return sum;
    }
}

console.log(new Polygon([1, 2, 3, 4, 5]).perimeter());