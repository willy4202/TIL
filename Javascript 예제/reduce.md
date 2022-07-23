# reduce에 대해 알아보자

arr.reduce()는 인수로 함수를 받는다.

아래 배열의 모든 수를 합치기 위해선 어떻게 하면 좋을까?

```js
let arr = [1, 2, 3, 4, 5];

// for, for of, forEach를 활용하면 된다.

let reuslt = 0;
arr.forEach((num) => {
  result += num;
});

console.log(result); // 15
```

초기 값을 0으로 두고, 배열을 순차적으로 돌면서 1이 더해지고, 2, 3이 순차적으로 더해지는 방식이다.

그 외에도 reduce를 활용할 수 있다.

```js
let arr = [1, 2, 3, 4, 5];
const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.lpg(result);
```

reduce는 함수를 인자로 받는데, 누적값과 현재 값을 인자로 더해준다. return을 해주는데 지금까지 계산된 값을 더해서 준다. 함수 뒤에 오는 것은 초기 값이라 생각하면 된다.

아래 예제를 보며 사용법을 익혀보자.

```js
let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

let result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result); // [Mike, jane, sue, Harry, steve]
```
