// 다이나믹 프로그래밍을 이용해 피보나치 수열 문제 풀기

function fibo(n) {
  let arr = [0, 1];
  if (n < 3) {
    arr[n] = 1;
  } else if (!arr[n]) {
    arr[n] = fibo(n - 1) + fibo(n - 2);
  }
  return arr[n];
}

console.log(fibo(6));
