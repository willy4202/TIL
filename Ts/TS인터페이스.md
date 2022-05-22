```ts
let user: object;

user = {
  name: "xx",
  age: 30,
};

console.log(user.name);
```

위 코드를 실행했을 경우 어떻게 될 것 같나?
에러가 뜰 것이다.
오브젝트에는 특정 속성값에 대한 정보가 없기 때문이다.

![](https://velog.velcdn.com/images/willy4202/post/4d28bdb1-200b-4c14-9048-672f50a054ca/image.png)

이럴때 사용하는 것이 `interface`다.

```ts
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "young",
  age: 32,
};
```

뿐만 아니라 옵셔널한 데이터타입도 지정해줄 수 있다.
무슨 말이냐 하면, 입력해도 되고 안해도 된다라는 뜻이다.

```ts
interface User {
  name: string;
  age: number;
  gender?: string;
}

let user: User = {
  name: "young",
  age: 32,
};

user.gender = "male";

console.log(user.gender);
```

이런식으로 데이터 타입 뒤에 `?`를 붙여주면 해도되고 안해도된다는 뜻이다.
위에서는 외부에서 gender를 생성해서 넣어줬다.
그러나 엄격한 타입스크립트에선 이마저도 제한할 수 있다.

바로 `readonly`다
![](https://velog.velcdn.com/images/willy4202/post/edb0c15e-a6fe-420d-adae-f8c23037ec87/image.png)

1. 데이터 앞에 readonly를 붙여주고 타입을 지정해준다.
2. 변수 선언과정에서 필수로 지정해주면 된다.
3. 생성할때만 할당이 가능하고, 수정이 불가능한것이 특징이다.

---

만약에 여기서 데이터 타입을 같은 것으로 아주 많이 받게 된다면
어떻게 하면 될까?

예를 들어 학생들의 점수를 나열해보자. 앞에는 학생들의 번호가 매겨지고 value로는 문자열이 들어온다. 이때 일일이 하드 코딩하면 학생 수만큼 데이터 타입을 지정해줘야하는 대참사가 발생한다.
![](https://velog.velcdn.com/images/willy4202/post/cb2148ad-25a6-4f98-8934-436e7f1b0e6f/image.png)

이렇게 된다면 데이터 타입을 지정해준 만큼 반복해서 변수 선언을 해야한다. 너무 괴롭지 않나?

대책이라 해도 옵셔널타입`?`을 일일이 지정해줘야하는 것밖에 생각이 나질 않는다.

여기서 배열안에 key를 담고, value를 붙여준다는 타입을 기록해주면
원하는 만큼 작성해도 에러가 나질 않는다.
![](https://velog.velcdn.com/images/willy4202/post/7e489ea2-ef1a-4f82-b575-29f06b8a2063/image.png)

여기서 좀더 `타입`스럽게 하자면 성적에 들어오는 string도 타입을 지정해주면 된다.

![](https://velog.velcdn.com/images/willy4202/post/6e102e44-85e7-41de-a621-9739dc97d433/image.png)
이렇게 해두면 해당 타입외의 값이 들어오면 에러를 일으킨다.

---

인터페이스로는 함수도 정의할 수 있다

![](https://velog.velcdn.com/images/willy4202/post/ba296102-7c85-42ef-8aa7-6897af357597/image.png)

1. 함수에 들어오는 타입을 인터페이스로 정의해주고,
2. 변수에 해당 인터페이스를 타입으로 지정해준다.
3. 함수 내를 인터페이스와 맞춰주면 정상적으로 실행시킬 수 있다.

이를 활용해 성인이면 true를 뱉는 함수를 정의해보자.

```ts
interface IsAdult {
  (age: number): boolean;
}
// 데이터 타입을 지정해준다. 여기서는 숫자를 key로 깔아주고 boolean을 받는다.

const isAdult: IsAdult = (age) => {
  return age > 19;
};
//데이터 타입을 맞춰준다.

isAdult(32);
// true
```

#### implements

interface로는 클래스도 정의할 수 있다.

```ts
interface Car {
  color: string;
  wheels: number;
  strart(): void;
}

class Bmw implements Car {
  color = "red";
  wheels = 4;
  strart() {
    console.log("go");
  }
}
```

여기서 constructor를 이용해보자.

```ts
interface Car {
  color: string;
  wheels: number;
  strart(): void;
}

class Bmw implements Car {
  wheels = 4;
  color;
  constructor(c: string) {
    this.color = c;
  }
  // 여기있는 color는 인자를 `string`으로 지정해줄 수 있다는 뜻

  strart() {
    console.log("go");
  }
}

const b = new Bmw("blue");
console.log(b);
```

![](https://velog.velcdn.com/images/willy4202/post/ebabd8a9-7cc1-494a-a336-92fe3df72b3c/image.png)

---

#### extends

인터페이스는 extends로 확장 가능하다.

```ts
interface Car {
  color: string;
  wheels: number;
  strart(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  color: "green",
  wheels: 6,
  stop() {
    console.log("stop");
  },
  strart() {
    console.log("go");
  },
};

class Bmw implements Car {
  wheels = 4;
  color;
  constructor(c: string) {
    this.color = c;
  }
  strart() {
    console.log("go");
  }
}

console.log(benz);
```

![](https://velog.velcdn.com/images/willy4202/post/ed68bff2-00e8-4ada-9424-8097c38f47bf/image.png)

뿐만 아니라, 두가지의 인터페이스를 동시에 확장시켜서 진행할수도 있다.

자주 쓰이는 데이터타입이니 잘 기억해두자.
