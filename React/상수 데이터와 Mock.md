# 상수 데이터

이름 그대로 변하지 않는 데이터. 즉, 정적인 데이터

UI 구성에 필요하지만 동적으로 변하지 않아서 백엔드 API등을 통해서 가져올 필요가 없는 정적인 데이터를 상수 데이터로 만들어 UI를 효율적으로 구성할 수 있다.

### 왜 사용하는 걸까?

반복되는 UI를 하드코딩으로 대처하면, 코드가 길어져 가독성이 떨어지고 유지보수가 어렵게 된다.

반복되는 UI를 상수 데이터 + `map()`함수의 조합을 이용해서 간결하게 표현이 가능하다. 추후 수정할 필요가 생겼을 경우에는 해당하는 부분의 내용만 변경해주면 된다.

## 실습

```jsx
import React from "react";
import Comment from "./Comment/Comment";
import "./CommentList.scss";

function CommentList() {
  return (
    <div className="commentList">
      <h1>댓글</h1>
      <ul>
        <Comment
          name="wecode"
          comment="Welcome to world best coding bootcamp"
          isLiked={true}
        />
        <Comment name="joonsikyang" comment="Hi therer." isLiked={false} />
        <Comment name="jayPark" comment="Hey." isLiked={false} />
      </ul>
    </div>
  );
}

export default CommentList;
```

위와 같이 정적인 데이터를 처리하려고 할때, 댓글을 추가하거나 변동사항을 적용 시키려면 `Comment`라는 컴포넌트를 불러와 일일이 이름을 지정해서 데이터를 넣어줘야한다.

```jsx
const COMMENT_LIST = [
  {
    id: 1,
    userName: "wecode",
    content: "Welcome to world best coding bootcamp!",
    isLiked: true,
  },
  {
    id: 2,
    userName: "joonsikyang",
    content: "Hi there.",
    isLiked: false,
  },
  {
    id: 3,
    userName: "jayPark",
    content: "Hey.",
    isLiked: false,
  },
];

export default COMMENT_LIST;
```

```jsx
import React from "react";
import Comment from "./Comment/Comment";
import COMMENT_LIST from "./commentData";
import "./CommentList.scss";

function CommentList() {
  return (
    <div className="commentList">
      <h1>댓글</h1>
      <ul>
        {COMMENT_LIST.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
```

그러나 이런식으로 상수데이터를 처리해서 별도의 파일에서 관리해줄 수 있다.
데이터를따로 불러와서 임포트한 이후 `map`을 이용해서 컴포넌트를 렌더링 하고 있다.
상수 데이터의 길이가 길거나 여러 파일에서 공통적으로 사용하는 경우에는 JS파일로 만들어도 좋고, 간단한 데이터인 경우에는 내부에서 선언해서 사용하기도 해도된다.

## 규칙

- 상수 데이터는 별도의 JS 파일로 분리하거나, 필요한 파일 내부에서 선언해서 사용할 수 있다.
- 별도의 JS파일로 분리할 경우 export / import를 해줘야 한다.

---

# Mock data

백엔드 개발이 완료되지 않은 상태에서 프론트딴에서 필요로 의해 만들어둔 샘플 데이터.

### 이유

프론트엔드에서 진행하려 하는데 필요한 백엔드 api가 완성되어 있지 않을 수 있다.

이럴때 무작정 프론트에서 해당 api가 들어올때까지 기다리는 것이 아니라 상황을 대비하기 위해, UI가 의도한 대로 구현되는지 확인해야한다.

`mock data`를 만드는 과정에서 백엔드 API에서 보내주는 `response`가 어떤 형태인지, `key-value`값을 확인하고 미리 `mock data`와 백엔드 `response`의 형태를 맞춰보면서 개발을 진행한다면 추후 실제 API를 훨씬 수월하게 연결 할 수 있다.

---

## 실습

댓글은 UI에 사용되고 변화하는 값이다. React에서는 이런 값을 state로 관리하면서 변화를 감지해 UI를 업데이트 한다.

댓글 목록을 http 통신을 이용해서 API를 요청, 응답을 통해 가져오고 그걸 state값의 초기값으로 사용하면 유저가 페이지에 들어왔을 당시의 최신 정보를 보여줄 수 있는 셈이다.

`mock Data`는 백엔드 `api`를 모방하기에 실제 응답값의 형태인 `JSON`파일로 만들어줘야한다.

```json
commentData.json
[
  {
    "id": 1,
    "userName": "wecode",
    "content": "Welcome to world best coding bootcamp!",
    "isLiked": true
  },
  {
    "id": 2,
    "userName": "joonsikyang",
    "content": "Hi there.",
    "isLiked": false
  },
  {
    "id": 3,
    "userName": "jayPark",
    "content": "Hey.",
    "isLiked": false
  }
]
```

`http://localhost:3000/images/seokyoung/data/commentData.json`

해당 경로에 JSON 파일을 만들어주고 npm start를 통해 찾아가보자.

이를 API 주소로 생각하고 http 요청을 통해 API 요청을 보내고 응답을 받아보자.

```jsx
import React, { useState, useEffect } from "react";
import Comment from "./Comment/Comment";
import "./CommentList.scss";

function CommentList() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="commentList">
      <h1>Main Page</h1>
      <ul>
        {commentList.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
```

`useEffect`, `fetch`, `then`등 새로운 방법들을 찾아볼 수 있다.

- `js`에서 `http` 요청을 보낼때는 `fetch` 함수를 사용한다.
- `fetch` 함수는 첫번째 인자로 `http`요청을 보낼 `API`주소 두 번째 인자로 요청을 보낼때의 옵션들을 객체 형태로 받는다.
- 데이터를 요청하는 시점을 특정해야하는데, 여기서는 useEffect 훅을 활용하여 컴포넌트가 렌더링 된 이후 데이터를 요청한다. 요청이 성공적으로 완료되면 setCommentList 함수를 사용하여 commentList state 를 응답 받은 값으로 바꿔준다.

> mock data의 구조를 정할때도 프론트엔드 개발자 혼자서 정하지말고, 백엔드와 상의하면서 백엔드에서 응답으로 줄 수 있는 응답의 형태와 맞춰서 구조를 잡으면서 소통하고 협업하면서 진행하는게 원활한 개발을 위한 지름길입니다🙌
