// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     return Math.PI * this.radius ** 2;
//   };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea); // False

// console.log(circle1.getArea()); // 3.141592653589793
// console.log(circle2.getArea()); // 12.566370614359172

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
