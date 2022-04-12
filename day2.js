/*
reverse 함수에 정수인 숫자를 인자로 받습니다. 그 숫자를 뒤집어서 return해주세요.

x: 숫자 return: 뒤집어진 숫자를 반환!

예들 들어, x: 1234 return: 4321

x: -1234 return: -4321

x: 1230 return: 321

수ㅅ자만 
*/

const reverse = (x) => {
  // 여기에 코드를 작성해주세요.
  const a =
    parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);

  // console.log(x.toString())
  // console.log(x.toString().split(''))
  // console.log(x.toString().split('').reverse())
  // console.log(x.toString().split('').reverse().join(''))
  // console.log(parseFloat(x.toString().split('').reverse().join('')))
  // console.log(parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x))

  //  console.log(Math.sign(x))
  //  console.log(a)

  return a;
};

reverse(-2561);
