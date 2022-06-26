// console.log(this);
// console.log(global);

// // 함수와 메서드의 This 차이
// var func = function (x) {
//   console.log(this, x);
// };

// func(1);

// var object = {
//   method: func,
// };

// object.method(2);

// // 내부 메서드 this
// var obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };

// obj.methodA();
// obj.inner.methodB();

// var obj1 = {
//   outer: function () {
//     console.log(this);
//     var innerFunc1 = function () {
//       console.log(this);
//     };
//     innerFunc1();

//     var self = this;
//     var innerFunc2 = function () {
//       console.log(self);
//     };
//     innerFunc2();
//   },
// };

// obj1.outer();

// var obj = {
//   outer: function () {
//     console.log(this);
//     var innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };

// obj.outer();

// 생성자 함수

var Cat = function (name, age) {
  this.bark = "야옹";
  this.name = name;
  this.age = age;
};

var choco = new Cat("초코", 7);
var nabi = new Cat("나비", 4);
console.log(choco, nabi);
