# fetch에 대해서..

백엔드로부터 데이터를 받아오려면 api를 호출하고 데이터를 응답받아야한다.
이 때 자바스크립트 `fetch()`를 사용할 수 있다.
fetch 함수를 사용해보며, http통신의 요청과 응답에 대한 이해, promise개념에 대해 익숙해져 보자.

```js
fetch("api 주소")
  .then((res) => res.json())
  .then((res) => {
    // data를 응답 받은 후의 로직
  });
```

## fetch() method get

fetch 함수에서 기본 메서드는 `get`이다.
다음과 같은 api를 받았을 경우 fetch()를 어떻게 작성하면 좋을지 생각해보자.

```json
설명: 유저 정보를 가져온다.
base url: https://api.google.com/
endpoint: /user/3
method: get
응답형태:
    {
      "success": boolean,
      "user": {
          "name": string,
          "batch": number
      }
    }
```

```js
fetch("https://api.google.com/")
  .then((res) => json.res)
  .then((res) => {
    if (res.success) {
      console.log(`${res.user.name}님 환영합니다`);
    }
  });
```

만약 리액트를 한다고 가정하면, 아래와 같이 구현할 수 있습니다.

```jsx
import React, { useEffect } from "react";

function User(props) {
  useEffect(() => {
    const { userId } = props;
    fetch(`https://api.google.com/${userId}`)
      .then((res) => json.res)
      .then((res) => {
        if (res.success) {
          console.log(`${res.user.name} 님 환영합니다.`);
        }
      });
  }, []);
}
```

---

## fetch - method post

메서드가 post인 경우도 살펴보자
fetch()의 기본은 get이기 때문에 아무것도 작성하지 않아도 get으로 호출이 가능하다.
post인 경우에는 Fetch함수에 method 정보를 인자로 넘겨주어야한다.

```json
설명: 유저를 저장한다.
base url: https://api.google.com/
endpoint: /user
method: post
요청 body:
    {
      "name": string,
      "batch": number
    }

응답 body:
    {
      "success": boolean
    }
```

이런 종류의 api를 넘겨 받았다면
작성시, `method : post`를 넣어주면 된다.

```js
fetch("https://api.google.com/user", {
  method: "post",
  body: JSON.stringify({
    name: "yeri",
    batch: 1,
  }),
})
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      alert("저장 완료");
    }
  });
```

1. 두 번째 인자에 method 와 body를 보내주어야 합니다.
2. method는 post body는 JSON형태로 보내기 위해 JSON.stringfy
3. () 함수에 객체를 인자로 전달하여 JSON형태로 변환했습니다.

fetch 함수는 post로 데이터를 보낼 때 JSON.stringfy를 해주어야 하는 반면, axios는 객체를 그대로 작성해도 되는 편리한 점이 있습니다. 이렇듯 axios는 소소한 편의성을 제공해주고, 요청과 응답에 대한 확장성 있는 기능을 만들 수도 있습니다.

## Promise

프로미스는 작업이 모두 끝나면 알려주겠다는 약속을 뜻한다.
데이터를 가져오기 위해선 시간이 필요하다, 만약 거대한 데이터를 한번에 받아오라고 한 다음, 곧 바로 코드를 실행하려고 하면 제대로 동작하지 않을 수 있다.

이를 위해서 모든 데이터를 받고 그 다음 작업을 진행하겠다는 뜻으로 이해할 수 있다.

---

# DAta Fetching & 조건부 렌더링

```jsx
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Data Fetching -> Side Effect
    fetch("http://test.com/users") // (1)
      .then((res) => res.json()) // (2)
      .then((res) => setUsers(res)); // (3)
  }, []);

  return (
    <ul>
      {users.map((user) => {
        <li key={user.id}>{user.name ? "" : ""}</li>;
      })}
    </ul>
  );
}
```

위의 예제 코드는 가상의 API로부터 유저 목록을 받아오는 코드다.

데이터 호출은 Side Effect에 해당하므로 useEffect 안에서 사용해줘야한다.

- (1)번의 fetch() 함수는 첫 번째 인자로 데이터 요청을 보낼 url을 문자열로 받고, 두 번째 인자에는 데이터 요청에 대한 옵션을 객체로 넣습니다. 이상 자세한 정보는 MDN 문서에서 확인해주세요.
- (2)번에서는 앞선 요청에 대해 응답이 정상적으로 돌아왔다면 응답의 body에 들어있는 데이터를 자바스크립트 객체 형태로 변환시키고,
- (3)번에서 해당 객체를 setUsers 함수에 인자로 넣어 호출하여, users의 값을 업데이트 해줍니다.

---

## 조건부 렌더링시 에러 통제하기

프로젝트를 진행하다보면 특정 조건에서만 컴포넌트를 렌더링 해야하는 상황이 발생한다.

컴포넌트 함수 내부에서 특정 값에 따라 선택적으로 렌더링하는 것을 조건부 렌더링(conditional rendering)이라 부른다.

---

## 삼항 연산자 / 단축 평가

조건부 렌더링을 구현하기 위해서는 삼항 연산자 혹은 && 연산자를 사용할 수 있다.

`삼항 연산자` 의 경우 조건의 true / false 에 따라 각기 다른 UI 를 렌더링 할 때 사용가능하다.

`&& 연산자` 의 경우, 조건이 true 일때만 특정 UI 를 렌더링 하고 false 일때는 아무것도 렌더링 하지 않도록 할 때 사용한다.

```jsx
function Greetin(props) {
  const { isLogin, name, point } = props;

  return {
    <div>
      {isLogin ? (
        <div>
          <p>{name}님 환영합니다!</p>
          <p>현재 보유중인 포인트는 {point}원 입니다.</p>
        </div>
       ) : null}
     </div>
   }
}

//위 코드와 같이 삼항 연산자로 작성할 경우 false 일 경우의 값을 반드시 할당해 주어야합니다. 때문에 무의미한 null 을 입력했습니다.

function Greetin(props) {
  const { isLogin, name, point } = props;

  return {
    <div>
      {isLogin && (
        <div>
          <p>{name}님 환영합니다!</p>
          <p>현재 보유중인 포인트는 {point}원 입니다.</p>
        </div>
      )}
    </div>
  }
}
//이전 예제와는 달리 && 연산자를 활용해 줄 경우 true인 경우만 렌더링 하겠다는 의도를 전달하면서 동시에 null을 생략할 수 있어 가독성이 좋아집니다.
```

### &&연산자 사용 시 주의해야할 점!

- 변수가 숫자 타입인 경우 0은 false 이다.
- 변수가 문자열 타입인 경우 빈 문자열“”도 false이다.
