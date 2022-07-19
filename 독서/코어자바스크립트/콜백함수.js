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

function Liniter(n) {
  if (n == 6) return 3;
  else return 3 * Liniter(n + 1);
}

console.log(Liniter(3));
