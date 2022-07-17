const foo = (numbers) => {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 1) {
      console.log(numbers[i]);
    } else {
    }
  }
};

foo([1, 2, 5, 7]);

/*

배열에서 각 요소마다, 홀짝인지 판별해서, 카운트 각각 올리기


두 카운트를 비교해서 하나를 선정
*/
