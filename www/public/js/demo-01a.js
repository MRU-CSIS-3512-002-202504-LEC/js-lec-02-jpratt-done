// A "traditional" constructor function.
// Notice the capitalization; this is convention, not required.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  Car.prototype.toString = function () {
    return `A ${this.year} ${this.make} ${this.model}.`;
  };

}

let matrix = new Car("Toyota", "Matrix", 2001);
let crv = new Car("Honda", "CR-V", 2026);

console.log(`${crv.toString()}`); // Can call toString() explicitly...
console.log(`${matrix}`); // ...or not. Like in Java...
console.log(matrix); // ...but this doesn't work.
