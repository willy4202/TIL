// const foo = (num) => {
//   let calc = 0;

//   let sum = num
//     .toString()
//     .split("")
//     .reduce((acc, curr) => acc + parseInt(curr), 0);

//   calc = num - sum;
//   if (calc <= 100) {
//     console.log("hi");
//   } else {
//     console.log("bye");
//   }
//   return calc;
// };

// console.log(foo(325));

/*
각 자릿수를 계속 더한후 기존의 num에서 : 처리하기
숫자가 100이하라면, 코드 블록에 있는 과일 코드를 들고와서 return

초기 숫자가 100 이하라면 1번 이상
자릿수 계산식 실행 후 
과일코드 Return 진행하기

이떄 과잁코드는 다른 방식으로 입려해야하나?
 */
/*
1 : kiwi;
2 : pear;
3 : kiwi;
4 : banana;
5 : melon;
6 : banana;
7 : melon;
8 : pineapple;
9 : apple;
10 : pineapple;
11 : cucumber;
12 : pineapple;
13 : cucumber;
14 : orange;
15 : grape;
16 : orange;
17 : grape;
18 : apple;
19 : grape;
20 : cherry;
21 : pear;
22 : cherry;
23 : pear;
24 : kiwi;
25 : banana;
26 : kiwi;
27 : apple;
28 : melon;
29 : banana;
30 : melon;
31 : pineapple;
32 : melon;
33 : pineapple;
34 : cucumber;
35 : orange;
36 : apple;
37 : orange;
38 : grape;
39 : orange;
40 : grape;
41 : cherry;
42 : pear;
43 : cherry;
44 : pear;
45 : apple;
46 : pear;
47 : kiwi;
48 : banana;
49 : kiwi;
50 : banana;
51 : melon;
52 : pineapple;
53 : melon;
54 : apple;
55 : cucumber;
56 : pineapple;
57 : cucumber;
58 : orange;
59 : cucumber;
60 : orange;
61 : grape;
62 : cherry;
63 : apple;
64 : cherry;
65 : pear;
66 : cherry;
67 : pear;
68 : kiwi;
69 : pear;
70 : kiwi;
71 : banana;
72 : apple;
73 : banana;
74 : melon;
75 : pineapple;
76 : melon;
77 : pineapple;
78 : cucumber;
79 : pineapple;
80 : cucumber;
81 : apple;
82 : grape;
83 : orange;
84 : grape;
85 : cherry;
86 : grape;
87 : cherry;
88 : pear;
89 : cherry;
90 : apple;
91 : kiwi;
92 : banana;
93 : kiwi;
94 : banana;
95 : melon;
96 : banana;
97 : melon;
98 : pineapple;
99 : apple;
100 : pineapple;
*/

/*
kiwi 10, pear, banana, melon, pineapple, 
apple, cucumber, orange, grape, cherry,

모든 과일이 10번씩,
1,3, 24, 26, 47, 49, 68, 70, 91, 93
*/

const four = (num) => {
  let result = num;
  do {
    let sum = result
      .toString()
      .split("")
      .reduce((acc, cur) => {
        return acc + parseInt(cur);
      }, 0);

    result -= sum;
  } while (result > 101);

  console.log(result);
  // TODO #1
  // 여기까지 한 자리씩 더한 다음 원래 숫자에서 뺸 결과값, 만약 이게 100보다 크다면 한번 더 진행하기!

  // TODO #2
  // 만약 이 결과가 100보다 작다면, 그대로 과일 코드 들고와서 리턴하기
};

// console.log(four(325));
four(325); // 99?
four(249); // 99?
// 인자는 무조건 두자리수로만 들어온다.

/*
 do ... while문 사용
 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 무조건 코드 블록이 한 번 이상 실행된다.

 만약, 이렇게 실행하고 나서 나온 결과값 Result가 100이하라면 과일 코드 탐색하기
 아니라면, 계속해서 반복문 돌기

 이때, 반복문에서 처음엔 파라미터가 들어오고,
 그 다음엔 result를 쪼개서 실행해야한다.

 지금은 num만 계속 잘랐다가 다시 붙이는 형태
 reduce를 써야하는걸까?
*/
