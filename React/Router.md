# Router

페이지 이동시, 우린 어떻게 이동하나?

특정 경로를 이용해서 원하는 페이지를 보여줘야한다.

리액트는 단순 UI만 그려주는 라이브러리이기 때문에, 화면을 전환하기 위해선

다른 기능을 추가해줘야한다.

- react-router-dom을 이용해서 Routes Component를 구현

---

### 라우팅

경로에 따라 다른 화면을 보여주는 기술

react-router는 리액트의 라우팅 기능을 위해 가장 많이 사용되는 라이브러리다.

---

아래는 Router의 기본적인 세팅법이다.

컴포넌트 처럼 만들어뒀으니 참고만 해보자.

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
```

<BrowerRouter>로 감싸주고 내부에 <Routes>를 위치시킨다.

경로가 있는 곳을 알려주고, 해당 컴포넌트 내에 위치한 Route를 통해 이동할 수 있다.

앞에 경로가 없으면, `노드 모듈스`의 하위경로로 설정된다.

매번 명확한 경로를 설정해주자.

---

### 실제 이용법

### <Link> 컴포넌트 이용

- 리액트에서 만들어둔 자체 컴포넌트로 `a태그`와 사용법이 비슷하다.
- 실제로 컴파일시 DOM에서는 `<a>`태그로 변환된다.
- css에서 a태그 스타일을 걸면 link 컴포넌트도 함께 영향을 받는다.

리액트 a 태그 사용시 외부 페이지로 이동하게 되는데,

link는 프로젝트 내부에서 페이지를 전환하기 때문이다.

단점이 있다면, 로그인 버튼 같이 활성화되면 이동해라! 와 같은 조건을 걸 수 없다.

왜냐면, 링크기 때문에 그냥 클릭하는대로 이동하게 된다.

---

### useNavigate

일종의 함수 형태로 사용한다. (그래서 카멜케이스 적용)

```jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

```

함수의 실행된 결과를 네비게이트라는 변수에 담아 사용하는 방식이다.

자바스크립트 코드이기에, 링크와 다르게 자바스크립트 로직을 적용시킬 수 있다.

main으로 이동하는 함수를 만들고, 이를 변수의 인자로 담아 실행한다.

해당 방법을 사용하면 조건을 걸어 이동시킬 수 있다.

```jsx
// const goToMain = () => {
//   if(response.message === "valid user"){
//     navigate('/main');
//   } else {
//     alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.")
//     navigate('/signup');
//   }
// }
```

위와 같이 조건을 걸고 해당 조건을 충족해야 이동시킬 수 있도록 한다.
