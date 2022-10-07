const fibonacci = (n) => {
  const start = [0, 1];
  for (let i = 0; i < n; i++) {
    if (i === 0) continue;
    if (i >= 1) {
      start.push(start[i - 1] + start[i] ** 2);
    } else {
      start.push(start[i] + start[i - 1]);
    }
  }
  return start;
};

const result = fibonacci(6);

console.log(result);
