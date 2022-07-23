"use strict";

// 자바스크립트는 동기적인 언어다. 호이스팅 이후 동기적으로 실행된다.

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// 자바스크립트 엔진은 제일 위에서부터 내려온다.
// 콜백함수는 바로 실행되는 것이 아니라, 특정 함수가 종료되거나 조건이 충족된다면 실행하게 되는 함수다.

// 콜백은 항상 비동기일때만 쓰나?
// 콜백은 두가지 일때 사용한다..

// Synchronus callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

// Asynchronous callback

function printWithDelay(print, timeOut) {
  setTimeout(print, timeOut);
}

printWithDelay(() => console.log("async Callback"), 2000);

// 콜백 지옥을 만들어보고 직접 탈출해보자

class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && pw === "dream") ||
          (id === "coder" && pw === "camp")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pw = prompt("enter your pw");

userStorage
  .loginUser(id, pw)
  .then(userStorage.getRoles)
  .then((user) => alert(`hello ${user.name} you have a ${user.role} role`))
  .catch(console.log);
