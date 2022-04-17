## React로 사고하기

리액는 앱을 설계하는 과정에서 특별함이 생긴다고 한다.

JSON API와 목업을 받았다고 가정해보자.

![](https://velog.velcdn.com/images/willy4202/post/30a64337-0f37-4788-a26c-05c26eae11cc/image.png)

해당 이터는 카테고리, 가격, 재고 여부, 이름 등의 데이터로 분류 할 수 있다.

```jsx
[
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
```

---

## UI를 컴포넌트 구조로 나누기

가장 먼저 할 일은 모든 컴포넌트화를 시키는 것이다. 그러나 처음에는 어떤 기준으로 컴포넌트를 만들어야할지 어려울 것이다.
한 가지 팁이 있다면 `단일 책임 원칙`이다. 하나의 컴포넌트는 한 가지 일을 해야한다는 것이다.

하나의 컴포넌트가 커지기 시작한다면 이보다 작은 하위 컴포넌트로 분리해줄 필요가 있다.

![](https://velog.velcdn.com/images/willy4202/post/35f73c73-0e9c-4727-9f7c-12193348c805/image.png)

해당 컴포넌트는 5개로 이뤄져있다.

1. `FilterableProductTable`(노란색): 예시 전체를 포괄합니다.
2. `SearchBar`(파란색): 모든 유저의 입력(user input) 을 받는다.
3. `ProductTable`(연두색): 유저의 입력(user input)을 기반으로 데이터 콜렉션(data collection)을 필터링 해서 보여줍니다.
4. `ProductCategoryRow`(하늘색): 각 카테고리(category)의 헤더를 보여줍니다.
5. `ProductRow`(빨강색): 각각의 제품(product)에 해당하는 행을 보여줍니다.

컴포넌트를 분리했다면, 다음은 계층 구조로 나열해보자.

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

모형의 다른 컴포넌트 내부에 나타나는 것은 계층 구조의 자식으로 표현할 수 있다.

---

## 구현하기 전 생각해야할 점

### 정적으로 만들기

이렇게 데이터 구조를 만들었으면, 정적인 형태로 만들어보자. 다른 컴포넌트를 재사용하는 컴포넌트를 만들고 `props`를 이용해 데이터를 전달해주자. 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법이다. 정적 버전을 만들기 위해서는 `state`를 사용할 이유가 없다.

### Top-down, Bottom-up

또한, 앱을 만들때 `Top-down`, `Bottom-up` 방식을 적용할 수 있다. 보통 계층 구조의 상위에있는 컴포넌트를 만들거나 하층부에 있는 컴포넌트부터 구현하는 방식의 차이다.

간단한 예시를 보여주기 위해서는 `Top-down`을 차용해서 만드는 게 쉽다.
그러나 프로젝트가 커지면 `Bottom-up`으로 만들고 테스트를 작성하면서 만드는 것이 쉽다.

이 단계가 끝나면 컴포넌트들은 라이브러리를 가지게 된다. 최상단 컴포넌트는 prop으로 데이터 모델을 건내받고, 데이터 모델이 변경된다면 `ReactDom.render()`을 호출하는 방식으로 UI를 업데이트 한다.

---

## 최소한의 UI state 찾기

UI를 상호작용하게 만들려면 데이터 모델을 변경할 수 있는 방법이 있어야 한다. React에선 이를 `state`를 통해 변경할 수 있다.

웹 앱을 만들기 위해서는 변경 가능한 state의 최소 집합을 찾아야한다. 여기서 핵심은 `DRY`, (dont repeat yourself)중복배제 원칙이다.애플리케이션이 필요하는 가장 최소한의 state가 무엇인지 찾고, 나머지 모든 것들은 필요에 따라 계산되도록 만들어야한다.

예를 들어 TODO 리스트를 만든다고 가정할때, 아이템을 저장하는 배열만 유지하고, 개수를 표현하는 state는 별도로 만들지 않아도 된다. 개수를 렌더링 하고 싶다면, 배열의 길이를 계산하기만 하면 되니까 말이다.

### 어떤 데이터가 state가 돼야하나?

그렇다면 어떤 게 state가 돼야할까? 이는 각각 데이터의 대해 세 질문을 던져서 확인할 수 있다.

1. 부모로부터 `props`를 통해 전달되나?
2. 시간이 지나도 변하지 않나?
3. 컴포넌트 안의 다른 `state`나 `props`를 가지고 계산 가능한가?

세 질문을 던져보고, 이에 해당한다면 모두 `state`가 아니다.

앞선 예시를 살펴보자, 제품의 원본 목록은 `props`를 통해 전달되므로 `state`가 아니다. 또한, 검색어와 체크박스는 시간이 지남에 따라 변하긴 하지만, 다른것들로부터 계산될 수 없기때문에 `state`가 아니다. 마지막으로 필터링된 목록 또한 state가 아니다.
제품의 원본 목록과 검색어, 체크 박스의 값을 통해 계산할 수 있기 때문이다.

결과적으로 애플리케이션은 다음과 같은 `state`를 가진다.

- 유저가 입력한 검색어
- 체크박스의 값

---

## 그럼 어떻게 적용해야하나

앱에서 필요한 최소한의 state를 탐색했다. 어떤 컴포넌트가 state를 변경하거나 소유해야할지 결정하는게 가장 어렵게 느껴진다.

> React는 계층 구조를 따라 아래로 내려가는 단방향 데이터 흐름을 따른다.

공식문서에 따르면 다음과 같은 과정을 통해 state를 가져야하는 컴포넌트에 대해 설명한다

- state를 기반으로 렌더링하는 모든 컴포넌트를 찾으세요.
- 공통 소유 컴포넌트 (common owner component)를 찾으세요. (계층 구조 내에서 특정 state가 있어야 하는 모든 컴포넌트들의 상위에 있는 하나의 컴포넌트).
- 공통 혹은 더 상위에 있는 컴포넌트가 state를 가져야 합니다.
- state를 소유할 적절한 컴포넌트를 찾지 못하였다면,
  state를 소유하는 컴포넌트를 하나 만들어서 공통 오너 컴포넌트의 상위 계층에 추가하세요.

해당 전략을 예시에 추가한다면 다음과 같이 정의할 수 있다.

- ProductTable은 state에 의존한 상품 리스트의 필터링해야 하고 SearchBar는 검색어와 체크박스의 상태를 표시해주어야 합니다.
- 공통 소유 컴포넌트는 FilterableProductTable입니다.
- 의미상으로도 FilterableProductTable이 검색어와 체크박스의 체크 여부를 가지는 것이 타당합니다.

state를 FilterableProductTable에 두고, 먼저 인스턴스 속성인 `this.state = {filterText: '', inStockOnly: false}` 를 FilterableProductTable의 constructor에 추가하여 애플리케이션의 초기 상태를 반영합니다.

그리고 나서 filterText와 inStockOnly를 ProductTable와 SearchBar에 prop으로 전달합니다. 마지막으로 이 props를 사용하여 ProductTable의 행을 정렬하고 SearchBar의 폼 필드 값을 설정하세요.

이제 애플리케이션의 동작을 볼 수 있습니다. filterText를 "ball"로 설정하고 앱을 새로고침 해보세요. 데이터 테이블이 올바르게 업데이트 된 것을 볼 수 있습니다.

![](https://velog.velcdn.com/images/willy4202/post/0f6d27df-2308-47d8-bf79-c097ced26bcb/image.png)
