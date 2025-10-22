// A "new" as of 2015(ish) way. Some people have strong opinions about this,
// referring to it as "syntactic sugar".

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  toString() {
    return `A ${this.year} ${this.make} ${this.model}.`;
  }

}

let matrix = new Car("Toyota", "Matrix", 2001);
let crv = new Car("Honda", "CR-V", 2026);

console.log(`${crv.toString()}`); 
console.log(`${matrix}`); 
console.log(matrix); 