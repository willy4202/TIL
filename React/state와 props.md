state, props를 모른다면 사용하지를 못한다.

1. 클래스형 컴포넌트와 함수 컴포넌트의 특징과 훅의 필요성에 대해 이해해보자.
2. state, props의 개념에 대해 한 문장으로 설명할 수 있다.
3. state를 통해 ui변경을 표현할 수 있다.
4. props를 이용해 부모 요소의 state를 자식 요소에서 반영시킬 수 있다.
5. props를 이용해 자식요소에서 상위를 바꿀 수 있다.

---

## Hooks

> 함수 컴포넌트에서 리액트 `state`의 생명주기 기능을 연동 할 수 있게 해주는 함수다

- `react` 공식 문서

클래스 없이도 react를 사용할 수 있게 해주는 것으로, 함수형으로 작성할 수 있게 된다.

hooks내에 있는 함수 하나하나를 지칭하는 말이다.

함수형 컴포넌트에서 클래스형 컴포넌트에서 활용할 수 있는 기능을 사용할 수 있게 해주는 것이다.

### 규칙

1. 최상위에서만 `Hook`을 호출해야 한다.
   반복문, 조건문 중첩된 함수 내에서 Hook을 실행하지 말자

![](https://velog.velcdn.com/images/willy4202/post/44ac67a4-647b-4dc9-81ea-5eb8ec6dc514/image.png)

---

## State

- 컴포넌트 내부에서 가지고 있는 컴포넌트의 상태값
- state는 화면에 보여줄 컴포넌트의 UI 상태
- state는 컴포넌트 내에서 정의하고 사용하며 얼마든지 데이터가 변경될 수 있다.

사용자가 어떤 액션을 취했을 때 바뀔 수 있을 것이다.
이렇게 동적으로 바뀌는 부분을 `state`로 관리하면 좋다.

반대로 말하자면 정적인 부분을 `state`로 관리할 필요가 없다는 뜻

바뀌는 값들은 모두 `state`로 바꿔주면 좋다.
나중에 더 많은 공부를 하고나서, 다른 방법을 활용하면 된다.

### 예시

`Hook`중에서도 `useState`라는 함수를 `Import` 해서 사용하자.
![](https://velog.velcdn.com/images/willy4202/post/d6dfa930-0708-4eb6-a189-6b6ade9da0ad/image.png)

```jsx
const [color, setColor] = useState('red')'

```

배열 형태를 보더라도 두려워하지 말자
이건 구조분해할당이라는 방식을 사용한 것 뿐이다.

`useState()`를 찍어보면 다음과 같은 결과를 볼 수 있다.

![](https://velog.velcdn.com/images/willy4202/post/f34a3452-7d91-48e7-9d5c-fc1a32a3d23d/image.png)

![](https://velog.velcdn.com/images/willy4202/post/ec4fe405-d051-459f-85f4-20d4267264a3/image.png)

여기서 `state`의 초기값을 `jsx`문법으로 작성해주면 화면에 red가 렌더링 되는 것을 볼 수 있다. 이를 활용하기 위해선 인라인 스타일을 적용해보자.

![](https://velog.velcdn.com/images/willy4202/post/40bcc8cf-44a4-4f6b-a1cc-402945459124/image.png)

이렇게 표기하면 바로 적용이 되는데,
동적으로 버튼을 눌렀을때 색상이 바뀌는 방식으로 만들고 싶다.

![](https://velog.velcdn.com/images/willy4202/post/c979e6e7-ccbe-43d6-b467-c674c7cd5ae0/image.png)

그땐 `setColor`를 통해 값을 다시 세팅해주면 된다.
버튼에 `onClick`을 달아 이를 작동시킬 함수를 달아주면 끝이다.

`setColor`의 원리를 잠시 뜯어보자.

![](https://velog.velcdn.com/images/willy4202/post/f367a0f9-f072-48cf-8874-c332a8c83044/image.png)

굳이 state말고 이렇게 변수로 처리하면 어떻게되나?

![](https://velog.velcdn.com/images/willy4202/post/cd1f0c57-5467-498b-bf13-785cb381053e/image.png)

명백한 차이가 있다.
동적인 값을 이용해서 update를 시켜줘야하는데, 데이터 자체는 바뀔 수 있어도
뿌려주는 ui도 함께 렌더링 해줘야하니까 이런 상황이 발생하는 것이다.

setState를 사용하면 새롭게 화면이 렌더링 되기 때문이다.
순차적으로 컴포넌트의 코드를 읽어내려가면서 return을 다시 실행하면서 화면이 업데이트 된다.

---

## Props

state와 props는 독립적인 요소다.
같이 사용할 수도 있을뿐, 반드시 같이 사용해야하는 건 아니라는 걸 인지하자.

- 부모 컴포넌트로부터 전달 받은 데이터를 지니고 있는 객체다
- 어떤 값이든 모두 자식 컴포넌트에 전달할 수 있다.

부모에서 자식 컴포넌트에게 보낼 수 있다.
자식에서 부모에게 넘겨줄 수 없다.
리액트에서 정보 흐름은 단방향 수직적인 특성을 띄고 있기 때문이다.

`Child`라는 컴포넌트를 만들어서 비교해보자.

![](https://velog.velcdn.com/images/willy4202/post/bd2b7b9e-e688-4dfa-9f9f-706af82282f7/image.png)

여기서 `test`라는 데이터에 담겨있는 `'도현'`이라는 데이터는
`child` 컴포넌트에서 `test`라는 이름으로 사용하겠다는 뜻이다.

이때 props는 객체 형태로 데이터를 건내준다.
![](https://velog.velcdn.com/images/willy4202/post/5c5a2823-3740-458e-b53a-30c718dbfcb6/image.png)

하나의 값이 들어갈 필요도 없다. 여러가지도 다룰 수 있다.
![](https://velog.velcdn.com/images/willy4202/post/3f68c3e1-b5dd-4cde-97d7-6b244e887177/image.png)

![](https://velog.velcdn.com/images/willy4202/post/d7096068-ee94-4682-a7c0-e090b35f794a/image.png)

알맞은 변수명을 사용하는 것이 좋다.

불리언, null, 배열, 객체 등 다양한 데이터를 담을수도 있고, 직접 넣을수도 있다.
어떤 것이든 props로 넘겨줄 수 있다.

이제 이렇게 전달받은 데이터를 사용해보자.

![](https://velog.velcdn.com/images/willy4202/post/66e81713-b45f-4e7c-a50e-e06f21010710/image.png)

객체니까 `.`으로 접근하면 된다.

- props도 구조분해할당이 가능하다는 것을 잊지말자.

자식의 컴포넌트가 그 자식에게 던져주는 것도 가능하다.
![](https://velog.velcdn.com/images/willy4202/post/5637c8b7-317b-4ca4-ba44-60fdbb3e5f85/image.png)

모든 데이터는 사용가능하고, 어디든지 보내 줄 수 있다.
어떤 형태든지 제한을 두지 말자.

심지어 함수도 넘겨줄 수 있다.
![](https://velog.velcdn.com/images/willy4202/post/a73213d8-6916-453f-b31f-338419e24b66/image.png)

![](https://velog.velcdn.com/images/willy4202/post/70ca8dc9-e30d-4680-8a41-904d51165a43/image.png)

이를 자식 컴포넌트에서도 활용할 수 있다.
이때 자식 컴포넌트에서도 사용한 porps.함수는 부모 영역에서 선언한 함수라고 표시된다.
선언은 상위에서 실행했기 때문이다.

![](https://velog.velcdn.com/images/willy4202/post/c9c055e4-68cd-4820-9d5e-13933baf58aa/image.png)

![](https://velog.velcdn.com/images/willy4202/post/3912d8b8-34c0-4849-a789-31a7767fdf41/image.png)

만약 상위에서 실행한 함수라도,

---

## state와 props

위에서 만들어둔 함수와 스테이터스를 같이
props로 자식 컴포넌트에게 던져준다.
![](https://velog.velcdn.com/images/willy4202/post/86e1001a-696e-49a5-86da-b0a4ddfd2d06/image.png)

이때 하위 코드를 다음과 같이 수정해준다면,
다음과 같은 실행 결과를 얻을 수 있다.

![](https://velog.velcdn.com/images/willy4202/post/e9b6c4e0-6dd5-4329-b33c-445243003dff/image.png)

![](https://velog.velcdn.com/images/willy4202/post/2202c7ce-e295-4d38-9882-09fe5e347d2e/image.png)

state, props를 모른다면 사용하지를 못한다.

1. 클래스형 컴포넌트와 함수 컴포넌트의 특징과 훅의 필요성에 대해 이해해보자.
2. state, props의 개념에 대해 한 문장으로 설명할 수 있다.
3. state를 통해 ui변경을 표현할 수 있다.
4. props를 이용해 부모 요소의 state를 자식 요소에서 반영시킬 수 있다.
5. props를 이용해 자식요소에서 상위를 바꿀 수 있다.

---

## Hooks

> 함수 컴포넌트에서 리액트 `state`의 생명주기 기능을 연동 할 수 있게 해주는 함수다

- `react` 공식 문서

클래스 없이도 react를 사용할 수 있게 해주는 것으로, 함수형으로 작성할 수 있게 된다.

hooks내에 있는 함수 하나하나를 지칭하는 말이다.

함수형 컴포넌트에서 클래스형 컴포넌트에서 활용할 수 있는 기능을 사용할 수 있게 해주는 것이다.

### 규칙

1. 최상위에서만 `Hook`을 호출해야 한다.
   반복문, 조건문 중첩된 함수 내에서 Hook을 실행하지 말자

![](https://velog.velcdn.com/images/willy4202/post/44ac67a4-647b-4dc9-81ea-5eb8ec6dc514/image.png)

---

## State

- 컴포넌트 내부에서 가지고 있는 컴포넌트의 상태값
- state는 화면에 보여줄 컴포넌트의 UI 상태
- state는 컴포넌트 내에서 정의하고 사용하며 얼마든지 데이터가 변경될 수 있다.

사용자가 어떤 액션을 취했을 때 바뀔 수 있을 것이다.
이렇게 동적으로 바뀌는 부분을 `state`로 관리하면 좋다.

반대로 말하자면 정적인 부분을 `state`로 관리할 필요가 없다는 뜻

바뀌는 값들은 모두 `state`로 바꿔주면 좋다.
나중에 더 많은 공부를 하고나서, 다른 방법을 활용하면 된다.

### 예시

`Hook`중에서도 `useState`라는 함수를 `Import` 해서 사용하자.
![](https://velog.velcdn.com/images/willy4202/post/d6dfa930-0708-4eb6-a189-6b6ade9da0ad/image.png)

```jsx
const [color, setColor] = useState('red')'

```

배열 형태를 보더라도 두려워하지 말자
이건 구조분해할당이라는 방식을 사용한 것 뿐이다.

`useState()`를 찍어보면 다음과 같은 결과를 볼 수 있다.

![](https://velog.velcdn.com/images/willy4202/post/f34a3452-7d91-48e7-9d5c-fc1a32a3d23d/image.png)

![](https://velog.velcdn.com/images/willy4202/post/ec4fe405-d051-459f-85f4-20d4267264a3/image.png)

여기서 `state`의 초기값을 `jsx`문법으로 작성해주면 화면에 red가 렌더링 되는 것을 볼 수 있다. 이를 활용하기 위해선 인라인 스타일을 적용해보자.

![](https://velog.velcdn.com/images/willy4202/post/40bcc8cf-44a4-4f6b-a1cc-402945459124/image.png)

이렇게 표기하면 바로 적용이 되는데,
동적으로 버튼을 눌렀을때 색상이 바뀌는 방식으로 만들고 싶다.

![](https://velog.velcdn.com/images/willy4202/post/c979e6e7-ccbe-43d6-b467-c674c7cd5ae0/image.png)

그땐 `setColor`를 통해 값을 다시 세팅해주면 된다.
버튼에 `onClick`을 달아 이를 작동시킬 함수를 달아주면 끝이다.

`setColor`의 원리를 잠시 뜯어보자.

![](https://velog.velcdn.com/images/willy4202/post/f367a0f9-f072-48cf-8874-c332a8c83044/image.png)

굳이 state말고 이렇게 변수로 처리하면 어떻게되나?

![](https://velog.velcdn.com/images/willy4202/post/cd1f0c57-5467-498b-bf13-785cb381053e/image.png)

명백한 차이가 있다.
동적인 값을 이용해서 update를 시켜줘야하는데, 데이터 자체는 바뀔 수 있어도
뿌려주는 ui도 함께 렌더링 해줘야하니까 이런 상황이 발생하는 것이다.

setState를 사용하면 새롭게 화면이 렌더링 되기 때문이다.
순차적으로 컴포넌트의 코드를 읽어내려가면서 return을 다시 실행하면서 화면이 업데이트 된다.

---

## Props

state와 props는 독립적인 요소다.
같이 사용할 수도 있을뿐, 반드시 같이 사용해야하는 건 아니라는 걸 인지하자.

- 부모 컴포넌트로부터 전달 받은 데이터를 지니고 있는 객체다
- 어떤 값이든 모두 자식 컴포넌트에 전달할 수 있다.

부모에서 자식 컴포넌트에게 보낼 수 있다.
자식에서 부모에게 넘겨줄 수 없다.
리액트에서 정보 흐름은 단방향 수직적인 특성을 띄고 있기 때문이다.

`Child`라는 컴포넌트를 만들어서 비교해보자.

![](https://velog.velcdn.com/images/willy4202/post/bd2b7b9e-e688-4dfa-9f9f-706af82282f7/image.png)

여기서 `test`라는 데이터에 담겨있는 `'도현'`이라는 데이터는
`child` 컴포넌트에서 `test`라는 이름으로 사용하겠다는 뜻이다.

이때 props는 객체 형태로 데이터를 건내준다.
![](https://velog.velcdn.com/images/willy4202/post/5c5a2823-3740-458e-b53a-30c718dbfcb6/image.png)

하나의 값이 들어갈 필요도 없다. 여러가지도 다룰 수 있다.
![](https://velog.velcdn.com/images/willy4202/post/3f68c3e1-b5dd-4cde-97d7-6b244e887177/image.png)

![](https://velog.velcdn.com/images/willy4202/post/d7096068-ee94-4682-a7c0-e090b35f794a/image.png)

알맞은 변수명을 사용하는 것이 좋다.

불리언, null, 배열, 객체 등 다양한 데이터를 담을수도 있고, 직접 넣을수도 있다.
어떤 것이든 props로 넘겨줄 수 있다.

이제 이렇게 전달받은 데이터를 사용해보자.

![](https://velog.velcdn.com/images/willy4202/post/66e81713-b45f-4e7c-a50e-e06f21010710/image.png)

객체니까 `.`으로 접근하면 된다.

- props도 구조분해할당이 가능하다는 것을 잊지말자.

자식의 컴포넌트가 그 자식에게 던져주는 것도 가능하다.
![](https://velog.velcdn.com/images/willy4202/post/5637c8b7-317b-4ca4-ba44-60fdbb3e5f85/image.png)

모든 데이터는 사용가능하고, 어디든지 보내 줄 수 있다.
어떤 형태든지 제한을 두지 말자.

심지어 함수도 넘겨줄 수 있다.
![](https://velog.velcdn.com/images/willy4202/post/a73213d8-6916-453f-b31f-338419e24b66/image.png)

![](https://velog.velcdn.com/images/willy4202/post/70ca8dc9-e30d-4680-8a41-904d51165a43/image.png)

이를 자식 컴포넌트에서도 활용할 수 있다.
이때 자식 컴포넌트에서도 사용한 porps.함수는 부모 영역에서 선언한 함수라고 표시된다.
선언은 상위에서 실행했기 때문이다.

![](https://velog.velcdn.com/images/willy4202/post/c9c055e4-68cd-4820-9d5e-13933baf58aa/image.png)

![](https://velog.velcdn.com/images/willy4202/post/3912d8b8-34c0-4849-a789-31a7767fdf41/image.png)

만약 상위에서 실행한 함수라도,

---

## state와 props

위에서 만들어둔 함수와 스테이터스를 같이
props로 자식 컴포넌트에게 던져준다.
![](https://velog.velcdn.com/images/willy4202/post/86e1001a-696e-49a5-86da-b0a4ddfd2d06/image.png)

이때 하위 코드를 다음과 같이 수정해준다면,
다음과 같은 실행 결과를 얻을 수 있다.

![](https://velog.velcdn.com/images/willy4202/post/e9b6c4e0-6dd5-4329-b33c-445243003dff/image.png)

![](https://velog.velcdn.com/images/willy4202/post/2202c7ce-e295-4d38-9882-09fe5e347d2e/image.png)

함수 선언이 부모컴포넌트에서 이뤄진 것이라면 실행 할 수 있는 트리거는 자식 컴포넌트에게 전달해줘도 괜찮은것이다.
