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

// var Cat = function (name, age) {
//   this.bark = "야옹";
//   this.name = name;
//   this.age = age;
// };

// var choco = new Cat("초코", 7);
// var nabi = new Cat("나비", 4);
// console.log(choco, nabi);

// var func = function (a, b, c) {
//   console.log(this, a, b, c);
// };

// func(1, 2, 3);
// func.call({ x: 1 }, 4, 5, 6);

// var obj = {
//   a: 1,
//   method: function (x, y) {
//     console.log(this.a, x, y);
//   },
// };

// obj.method(2, 3);
// obj.method.call({ a: 4 }, 5, 6);

// var func = function (a, b, c) {
//   console.log(this, a, b, c);
// };
// func.apply({ x: 1 }, [4, 5, 6]);

// var obj = {
//   a: 1,
//   method: function (x, y) {
//     console.log(this.a, x, y);
//   },
// };
// obj.method.apply({ a: 4 }, [5, 6]);

// var obj = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 3,
// };

// Array.prototype.push.call(obj, "d");
// console.log(obj);

// var arr = Array.prototype.slice.call(obj);
// console.log(arr);

// var obj = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 3,
// };

// var arr = Array.from(obj);
// console.log(arr);

// function Person(name, gender) {
//   this.name = name;
//   this.gender = gender;
// }

// function Student(name, gender, school) {
//   Person.call(this, name, gender);
//   this.school = school;
// }

// function Employee(name, gender, company) {
//   Person.apply(this, [name, gender]);
//   this.company = company;
// }
// var by = new Student("보영", "female", "숙명여대");
// var jn = new Employee("재난", "male", "구글");

// console.log(by, jn);

// var numbers = [10, 20, 3, 15, 64];

// var max = (min = numbers[0]);

// numbers.forEach(function (number) {
//   if (number > max) {
//     max = number;
//   }
//   if (number < min) {
//     min = number;
//   }
// });

// console.log(max, min);

// var numbers = [10, 20, 3, 15, 64];
// var max = Math.max(...numbers);
// var min = Math.min(...numbers);
// console.log(max, min);

// var func = function (a, b, c, d) {
//   console.log(this, a, b, c, d);
// };

// func(1, 2, 3, 4); // Window...,1,2,3,4

// var bindFunc1 = func.bind({ x: 1 });
// bindFunc1(5, 6, 7, 8);

// var bindFunc2 = func.bind({ x: 1 }, 4, 5);
// bindFunc2(6, 7);
// bindFunc2(8, 9);

// var func = function (a, b, c, d) {
//   console.log(this, a, b, c, d);
// };

// var bindFunc = func.bind({ x: 1 }, 4, 5);
// console.log(func.name);
// console.log(bindFunc.name);

// call을 활용한 바인딩
// var obj = {
//   outer: function () {
//     console.log(this);
//     var innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc.call(this);
//   },
// };

// obj.outer();

// bind를 활용한 바인딩

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

var report = {
  sum: 0,
  count: 0,
  add: function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  },
  average: function () {
    return this.sum / this.count;
  },
};

report.add(60, 85, 95);
console.log(report);
