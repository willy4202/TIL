// const fruits = ["appe", "banana", "orange"];
// const result = fruits.join();

// console.log(result);

// join은 세퍼레이터를 기준으로 배열을 문자열로 바꿔주는 메서드다.

// const 과일들 = "사과, 바나나, 오렌지";
// const 결과 = 과일들.split();
// console.log(결과);

// 배열 거꾸로 만들기

// const array = [1, 2, 3, 4, 5];
// console.log(array.reverse());

// 배열 특정부분 삭제

// const array = [1, 2, 3, 4, 5];
// console.log(array.slice(2, 5));

// slice는 시작점과 끝부분을 정해주면 된다 만약 0과 2를 집어넣는다면, 0부터 시작해서 2앞까지 끊어서 삭제 되는 형태다.

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 65),
  new Student("E", 18, true, 82),
];

// 5q. 90점 이상인 학생만 찾아주세요
// find() 사용
// 첫번째로 찾아진 요소를 반환한다, predicate라는 함수를 콜백함수로 사용하는데, 찾지 못한다면 undefined를 반환한다.
// predicate라는 함수는 배열내의 모든 요소를 찾다가 요건을 충족하는 요소를 발견하면 함수를 멈추고 true를 반환한다

// console.log(students.find((student) => student.score === 90));

// 6q. 수업에 등록한 학생들만 골라서 돌려주세요.
// const result = students.filter((x) => x.enrolled === true);
// console.log(result);

/*
filter는 함수를 던져 true를 반환하는 요소들만 모아 새로운 배열을 만들어준다
*/

//7q. 배열에 있는 학생들의 점수만 뽑아서 배열로 만들어라!

// const result = students.map((x) => x.score);
// console.log(result);

//8q. 학생들 중에 점수가 50점 이하인 학생들이 있는지 체크해라
//const result = students.inArray(students.score < 50);

// some()메서드는 배열중에서 하나라도 조건을 만족한다면 true를 반환한다.
// const result = students.some((x) => x.score < 50);
// console.log(result);
// >>> true

// every()는 모든 요소들이 조건을 충족해야지 true가 반환된다
// const result1 = students.every((x) => x.score < 50);
// console.log(result1);
// >>>  false

/* 
9q. 학생들의 평균 점수를 구해라
reduce는 배열을 하나하나 돌면서 값을 누적하는 함수로
acc는 이전의 콜백 함수의 리턴값을 저장하고
cv는 현재 값을 계속해서 받아온다.
*/
const result = students.reduce((acc, cv) => {
  //   acc.score + cv.score / students.length;
  //   return acc;
  return acc + cv.score;
}, 0);

// console.log(result / students.length);

/*
10q. 학생들의 점수를 스트링으로 변환해라
const answer = students
  .map((x) => x.score)
  .filter((x) => x >= 50)
  .join();
console.log(answer);
*/

/*
11. 학생들의 점수를 문자로 만들고 정렬해라
*/

// sort는 이전값과 현재값이 전달된다.
// 만약 - 값을 리턴한다면, 이전값이 현재값보다 작다고 판단되는 식으로 정렬해

const answer = students
  .map((x) => x.score)
  .sort((a, b) => b - a)
  .join();

console.log(answer);
