타입스크립트는 최근 개발자 시장에서 어렵지 않게 찾아볼 수 있는 역량이다. 자바스크립트를 기반으로 정적 타입 문법을 추가했으며, 컴파일 언어라는 특징을 가지고 있다. 이를 통해, 코드 작성단계에서 타이블 체크해 오류를 확인할 수 있고, 미리 타입을 결정하기 때문에, 실행속도가 매우 빠르다.

## 장점

#### 엄격한 수준의 디버깅

타입스크립트는 애초에 데이터의 `타입`을 정해놓는다. 그 때문에 코드의 목적을 명시하고 그 목적에 맞지 않는 타입이 들어올때 에러를 발생시켜서 버그에 빠른 대처를 가능하게한다.

#### 자바스크립트 호환

자바스크립트와 100% 호환된다. 따라서 프론트, 백과 상관없이 JS를 사용할 수 있다면 TS도 사용 가능하다. 특히, 프로젝트가 점점 커질수록 엄격하게 제어할 수 있기 때문에 사용성이 좋다는 평가를 받는다.

---

### 타입

타입스크립트의 기본 타입을 잠시 살펴보자

![](https://velog.velcdn.com/images/willy4202/post/d87b5ffb-0436-4322-84d7-e3cbc1248aa5/image.png)

변수 명 뒤에 `:`을 붙이고 원하는 타입을 기입해주는 것이 기본 형태다.
숫자, 문자열, boolean, null, undefined, 배열 등, 다양한 조합을 섞을 수 도 있다.

### 튜플

```ts
let b: [string, number]; // 배열의 첫 요소는 문자열, 두번째는 숫자를 받겠다는 의미

b = ["z", 1];
b = [1, "z"]; //에러!
```

### void, never

함수에서 아무것도 반환하지 않을때 void를 사용한다.
never는 무한 반복되거나, 에러를 던질때 사용한다.

```ts
function sayHello(): void {
  console.log("hello");
}

function showError(): never {
  throw new Error();
}

function infLoop() {
  while (true) {
    ///..do something..
  }
}
```

### enum

enum은 자바스크립트에는 없는 것으로 비슷한 것들끼리 묶어주는 형태다.

```ts
enum Os {
  window,
  Ios,
  Android,
}

// 이런식으로 묶어주게 된다면 JS에선 0부터 2까지라는 숫자가 window, Ios, Android에 할당된다.

enum Os {
  window = 3,
  Ios,
  Android,
}

//이때, 윈도우에 3을 주게 된다면 Ios, andriod는 4, 5가 할당된다.

enum Os {
  window = 3,
  Ios = 10,
  Android,
}

// 윈도우는 3. ios는 10, android는 11이 된다.
```

![](https://velog.velcdn.com/images/willy4202/post/a335c65f-fd34-4196-9697-fd2df4490af3/image.png)

여기서 11번째 줄의 `let myOs: Os;`를 해준다면, 해당 변수에는 위에서 선언한 `Os` 타입의 변수들만 들어올 수 있다는 뜻이 된다.

특정 값만을 감지하고 싶을때 enum을 사용하면 된다.
