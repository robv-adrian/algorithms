let a = 2;
let x = 3;
let b = 3;
let y = 5;

const cangur = () => {
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < 30; i++) {
    arr1.push((a += x));
    arr2.push((b += y));
  }

  const Arrays = arr1.concat(arr2).sort((a, b) => a - b);
  const result = [];

  for (let b = 1; b < Arrays.length; b++) {
    if (Arrays[b] === Arrays[b - 1]) {
      result.push(Arrays[b]);
    }
  }

  return result;
};
console.log(cangur());
