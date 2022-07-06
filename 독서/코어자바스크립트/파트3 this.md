지난 시간에 이어 코어자바스크립트에서 설명하는 this에 대해 정리해보았다.

## 02 명시적으로 this를 바인딩하는 방법

앞 절에선 this에 어떤 값이 바인딩되는지 살펴봤다. 이러한 규칙 외에도 this에 별도의 대상을 바인딩하는 방법을 알아보자.

### 3-2-1 Call 메서드

`call`메서드는 호출 주체인 함수를 즉시 실행하도록 하는 명령입니다. 이때 `call` 메서드의 첫 번째 인자를 this로 바인딩하고, 이후의 인자들을 호출할 함수의 매개변수로 지정합니다.

> 함수를 그냥 실행하면 this는 전역객체를 참조하지만 `call`메서드를 활용하면 임의로 this를 지정할 수 있다.

간단한 예시를 살펴보자.
다음은 this를 call로 실행했을떄와 그냥 실행했을때를 비교하는 코드다.

```js
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

func(1, 2, 3); // this가 전역객체를 참조
func.call({ x: 1 }, 4, 5, 6); // this가 x를 가리킴
```

![](https://velog.velcdn.com/images/willy4202/post/05a66f65-e8ef-4c47-aaa8-1f0925f33527/image.png)

```js
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);
```

#### 그렇다면 이 상황에서는 어떤 결과가 출력될까?

![](https://velog.velcdn.com/images/willy4202/post/73042784-4d84-4cb5-8eb3-b81edf109518/image.png)

> 여기서는 `call`을 사용하던 하지않건 똑같은 결과를 얻을 수 있습니다.
> 객체의 메서드를 그냥 호출하면 this는 객체를 참조하고
> **임의의 객체**를 참조하고 싶다면, `call`을 사용해서 임의로 지정해줄 수 있습니다.

### 3-2-2 apply 메서드

`apply`메서드는 `call`메서드와 기능적으로 완전히 동일합니다.

- `call`은 모든 인자를 호출할 함수의 매개변수로 지정합니다.
- `apply`는 모든 두 번째 인자를 **배열**로 받아 호출할 함수의 매개변수로 지정합니다.

```js
var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
obj.method.apply({ a: 4 }, [5, 6]);
```

![](https://velog.velcdn.com/images/willy4202/post/9ead2b79-70d1-4b5e-8acb-cfcf82e0efa8/image.png)

this에 명시적으로 할당해주기 위해선, call, apply 둘 모두 사용 가능합니다.
그렇다면 이를 활용하는 사례 또한 같이 봐야 이해가 좋을 듯 하네요.

### 3-2-3 call, apply 메서드의 활용

#### 유사배열객체에 배열 메서드를 적용

> #### 유사배열객체

- 키가 0 또는 양의 정수인 프로퍼티가 존재하고 length 프로퍼티의 값이 0 또는 양의 정수인 객체, 즉 배열의 구조와 유사한 객체를 라고 부른다.

```js
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

Array.prototype.push.call(obj, "d");
console.log(obj); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
```

객체에는 배열 메서드를 적용할 수 없습니다. 그러나 유사배열객체의 경우엔 `call, apply`를 메서드를 사용해 배열 메서드를 차용할 수 있습니다.

처음 코드에선 `push` 를 통해 'd'를 추가했습니다. 그 다음엔 `slice`를 통해 객체를 배열로 전환했습니다.

원래 slice는 시작과 끝의 인덱스 앞자리까지 배열 요소를 추출하는 메서드입니다. 여기서 매개변수를 아무것도 넘기지 않을 경우엔 그냥 원본 배열의 얕은 복사본을 반환하게 됩니다.결국 `call` 메서드를 이용해 원본인 유사배열객체의 얕은 복사를 수행하고, `slice`는 배열에 적용되기 때문에 복사본은 배열로 나오게 된 것입니다.

### 하지만

`call` ,`apply`를이용해 형변환해서 this를 원하는 값으로 지정해서 호출하는 방식은 메서드의 의도와는 동떨어진 활용법입니다. slice는 오직 배열 형태로 복사하기 위해 차용됐으니, 처음 보는 사람들로 하여금 어떤 의도인지 파악하기 어렵게 만듭니다.

그래서 ES6에선 유사배열객체 또는 순회 가능한 모든 종류의 데이터타입을 배열로 전환하는 `Array.from` 메서드를 새로 도입했습니다.

```js
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

var arr = Array.from(obj);
console.log(arr); // [ 'a', 'b', 'c' ]
```

### 생성자 내부에서 다른 생성자를 호출

생성자 내부에 다른 생성자와 공통된 내용이 있을 경우 `call`,`apply`를 이용해 다른 생성자를 호출하면 간단하게 반복을 줄일수도 있습니다.

```js
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}
var by = new Student("보영", "female", "숙명여대");
var jn = new Employee("재난", "male", "구글");
```

### 여러 인수를 하나로 묶어 배열로 전달하고 싶을때 - apply

여러 인수를 받아 메서드에게 하나의 배열로 전달하고 싶을땐 apply를 사용하면 됩니다. 예를 들어, 배열에서 최대, 최솟값을 구해야할 경우 apply를 사용하지 않는다면 직접 구현할 수 밖에 없습니다.

```js
var numbers = [10, 20, 3, 15, 64];

var max = (min = numbers[0]);

numbers.forEach(function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
});

console.log(max, min); // 64, 3
```

`forEach`를 활용해 모든 요소를 순회하며 첫 요소를 기준점으로 잡아 큰 것이 들어올떄마다 max에 할당하고, 작은 수가 들어올때마다 min에 할당하는 방식으로 최대 최솟값을 구할 순 있습니다. 그러나 번거롭고, 귀찮습니다.

코드가 불필요하게 길면 가독성도 떨어지니,`Math.max`, `Math.min`에 `apply`를 활용해봅시다.

```js
var numbers = [10, 20, 3, 15, 64];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 64, 3
```

여기서 더 쉽게 **풀어보도록** 하겠습니다.

```js
var numbers = [10, 20, 3, 15, 64];
var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log(max, min); // 64, 3
```

전개연산자를 활용하면 더 쉽게 사용이 가능합니다.
`call`,`apply`는 명시적으로 this를 바인딩하며, 함수 또는 메서드를 실행할 수 있는 방법이지만 이로 인해 this를 예측하기 어렵게 만들어 코드 해석을 방해한다는 단점이 있습니다.

그러나 ES5이하 환경에서는 마땅한 대안이 없기에, 실무에서 광범위하게 쓰인다는 것을 기억해둡시다.

---

## 3-2-4 bind 메서드

`bind`는 call과 비슷하지만 즉시 호출하지는 않고, 넘겨 받은 this 및 인수들을 바탕으로 새로운 함수를 반환하는 메서드입니다.

새로운 함수를 호출할 때 인수를 넘기면 그 인수들은 기존 `bind`메서드를 호출할때 전달했던 인수들의 뒤에 이어서 등록됩니다. 예제를 확인해봅시다.

```js
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

func(1, 2, 3, 4); // Window...,1,2,3,4

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9
```

계속해서 새로운 값을 바인딩해주는 방식이라고도 보여지네요. 아직은 이해가 어렵지만, 어떤 느낌인지 조금은 알 것 같습니다.

### 바인드의 특징, name 프로퍼티

`bind` 메서드를 적용해 만든 함수는 `name`프로퍼티에 수동태인 `bound`가 접두어가 붙습니다.

어떤 함수의 `name` 프로퍼티가 `bound xxx`라면 이는 곧 함수명이 xxx인 원본함수에 `bind` 메서드를 적용한 새로운 함수가 되므로, `call`, `apply`보다 추적이 수월합니다.

```js
var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name); // func
console.log(bindFunc.name); // bound func
```

## 3-2-5 화살표 함수의 예외 사항

ES6에 도입된 화살표 함수에는 this의 바인딩 과정 자체가 없습니다. 고로, 화살표 함수 내에서 this를 사용하면 스코프체인상 가장 가까이 있는 this를 참조하게 됩니다.

```js
var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc = () => {
      console.log(this); // { outer: [Function: outer] }
    };
    innerFunc();
  },
};

obj.outer();
```

`obj`에 있는 outer을 실행하게 된다면 첫번째 this는 outer를 바라보게 됩니다.
이후 따라오는 innerFunc의 this도 화살표함수에 의해 바인딩되지 않아 가장 가까운 outer를 참조하게 됩니다.

`call`,`apply`,`bind` 메서드 사용 없이 화살표 하나로만 관리할 수 있으니 훨씬 깔끔합니다.

## 3-2-6 별도의 인자를 this로 받는 경우

콜백 함수를 인자로 받는 메서드 중, this를 인자로 지정할 수 있는 경우가 있습니다. (thisArg)의 값을 지정하면 콜백 함수 내부에서 this 값을 원하는 대로 변경할 수 있습니다. 이런 형는 여러 내부 요소에 대해 같은 동작을 반복 수행해야하는 배열 메서드에 많이 있습니다.

`Set`,`Map`등의 메서드에도 일부 존재하고, 가장 대표적인 배열 메서드인 forEach에서 살펴봅시다.

```js
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
console.log(report); //  sum: 240, count: 3...
```

add 메서드를 살펴보면, 인자를 받아 배열로 만들어 forEach가 실행됩니다. 배열의 세 요소를 순환하면서 entry요소를 더하고 그때마다 카운트를 증가하는 방식이라, 메서드를 실행 후엔 240, 3이 출력되는 것을 볼 수 있습니다.

---

## 정리

### this 바인딩이 없는 한 늘 성립하는 규칙입니다.

> 1. 전역공간에서의 this는 전역객체를 참조합니다.
> 2. 어떤 함수를 메서드로서 호출한 경우, this는 메서드 호출 주체를 참조합니다.
> 3. 함수를 함수로서 호출한 경우, this는 전역객체를 참조합니다.
> 4. 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, 정의하지 않을 경우엔 전역객체를 참조합니다.
> 5. 생성자 함수에서의 this는 생성될 인스턴스를 참조합니다.

### 명시적 this 바인딩입니다.

> 1. call, apply 메서드는 this를 명시적으로 지정하면서 함수 또는 메서드를 호출합니다.
> 2. bind 메서드는 this및 함수에 넘길 인수를 일부 지정해서 새로운 함수를 만듭니다.
> 3. 요소를 순회하면서 콜백 함수를 반복 호출하는 내용의 일부 메서드는 별도의 인자로 This를 받기도 합니다.
