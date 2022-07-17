const foo = (numbers) => {
  let even = [];
  let odd = [];

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }

  if (even.length == 1) {
    return numbers.indexOf(even[0]);
  } else {
    return numbers.indexOf(odd[0]);
  }
};

// console.log(foo([1, 3, 5, 2, 7]));
// console.log(foo([2, 4, 6, 8, 3]));
