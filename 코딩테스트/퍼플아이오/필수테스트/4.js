const foo = (num) => {
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

  return "apple";
};

foo();

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
kiwi : 1,3, 24, 26, 47, 49, 68, 70, 91, 93
pear : 2,21,23,42,44,46,65,67,69,88
apple: 9의 배수

*/
