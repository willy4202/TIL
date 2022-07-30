// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     console.log(++a);
//   };
//   inner();
// };

// outer();

// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//   return inner;
// };
// var outer2 = outer();
// console.log(outer2());
// console.log(outer2());

// (function () {
//   var a = 0;
//   var intervalid = null;
//   var inner = function () {
//     if (++a >= 10) {
//       clearInterval(intervalid);
//     }
//     console.log(a);
//   };
//   intervalid = setInterval(inner, 1000);
// })();

// var fruit = ["apple", "banana", "mango"];

// var alertFruitBuilder = function (fruit) {
//   return function () {
//     alert("youer choice is " + fruit);
//   };
// };

// fruit.forEach(function (fruit) {
//   var $li = document.createElement("li");
//   $li.innerText(fruit);
//   $li.addEventListener("click", alertFruitBuilder(fruit));
//   $ui.appendChild($li);
// });

// var car = {
//   fuel: Math.ceil(Math.random() * 10 + 10),
//   power: Math.ceil(Math.random() * 3 + 2),
//   moved: 0,
//   run: function () {
//     var km = Math.ceil(Math.random() * 6);
//     var wasteFuel = km / this.power;
//     if (this.fuel < wasteFuel) {
//       console.log("이동불가");
//       return;
//     }
//     this.fuel -= wasteFuel;
//     this.moved = km;
//     console.log(km + "km 이동 (총" + this.moved + "km)");
//   },
// };

var debounce = function (eventName, func, wait) {
  var timedoutId = null;
  return function (evnet) {
    var self = this;
    console.log(eventName, "event 발생");
    clearTimeout(timedoutId);
    timedoutId = setTimeout(func.bind(self, event), wait);
  };
};

var moveHandler = function (e) {
  console.log("mouseEvent 처리");
};

var wheelHandler = function (e) {
  console.log("wheel event 처리");
};

document.body.addEventListener("mousemove", debounce("move", moveHandler, 500));
document.body.addEventListener(
  "mousewheel",
  debounce("wheel", wheelHandler, 500)
);
