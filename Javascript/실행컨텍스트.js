let a = 1;

var outer = function () {
  var inner = function () {
    console.log(a); // undefined
    var a = 3;
  };
  inner();
  console.log(a, "outer");
};
outer(); // 제일 먼저 실행, 1
console.log(a); // 두번째 실행 , 1

function test(x) {
  console.log(x);
  var x;
  console.log(x);
  var x = 2;
  console.log(x);
}
test(1);

function a() {
  console.log(b);
  var b = "bbb";
  console.log(b);
  function b() {
    console.log(b);
  }
}
a();

function a() {}
a();
var b = function () {};
b();
var c = function d() {};
c();

console.log(sum(1, 2));
console.log(multiply(3, 4)); //muliply is not a function

function sum(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a * b;
};
