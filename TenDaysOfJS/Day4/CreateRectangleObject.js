function Rectangle(a, b)  {
    this.length = a,
    this.width = b,
    this.perimeter = (a + b) * 2,
    this.area = a*b

}

const rectangle = new Rectangle(4, 5);
console.log(rectangle.length);
console.log(rectangle.width);
console.log(rectangle.perimeter);
console.log(rectangle.area);

