// var count = 0;
// var timer = setInterval(function () {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// }, 300);

// var count = 0;
// var cbFunc = function () {
//   console.log(count);
//   if (++count > 4) clearInterval(timer);
// };
// var timer = setInterval(cbFunc, 300);

// var newArr = [10, 20, 30].map(function (current, index) {
//   console.log(current, index);
//   return current + 5;
// });

// console.log(newArr);

// function Liniter(n) {
//   if (n == 6) return 3;
//   else return 3 * Liniter(n + 1);
// }

// console.log(Liniter(3));

// var obj = {
//   vals: [1, 2, 3],
//   logValues: function (v, i) {
//     console.log(this, v, i);
//   },
// };

// obj.logValues(1, 2);
// [4, 5, 6].forEach(obj.logValues);

// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// var callback = obj1.func();
// callback();

// var obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000);

var addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

var coffeeMaker = async function () {
  var coffeeList = "";
  var _addCoffee = async function (name) {
    coffeeList += (coffeeList ? "," : "") + (await addCoffee(name));
  };
  await _addCoffee("에스프레소");
  console.log(coffeeList);
  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("아인슈페너");
  console.log(coffeeList);
  await _addCoffee("쑥 라떼");
  console.log(coffeeList);
};
coffeeMaker();
