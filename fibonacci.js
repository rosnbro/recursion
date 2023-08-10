function fibs(n) {
  let fib = [0];
  if (n <= 0) return 'cmon now';
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      fib.push(1);
    } else {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
  }
  return fib;
}

function fibsRec(n, fib = [0], first = 0, second = 1) {
  if (n <= 0) return 'cmon now';
  if (fib.length == n) return fib;
  fib.push(second);
  let third = first + second;
  return fibsRec(n, fib, second, third);
}

console.log(fibs(10));
console.log(fibsRec(10));