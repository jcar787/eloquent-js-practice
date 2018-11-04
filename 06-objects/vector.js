class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(that) {
    return new Vector(this.x + that.x, this.y + that.y);
  }

  minus(that) {
    return new Vector(this.x - that.x, this.y - that.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
