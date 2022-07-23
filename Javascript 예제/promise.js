"use strict";

// 새로운 프로미스가 만들어질땐, 우리가 전달한 executor라는 콜백 함수가 자동으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doint some heavy work
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

//2. Consumer : then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finally"));

// 3. Promise 체이닝
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1), 1000;
      });
    });
  })
  .then((num) => console.log(num));

// 4. error 핸들링

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`닭`), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 알`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 프라이`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return `빵`;
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
