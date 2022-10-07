const digit = "7676767676";

const reduceTo = (array) => {
  if (array.length === 1) return array[0];

  const reduced = array
    .reduce((prev, current) => prev + current)
    .toString()
    .split("")
    .map((e) => Number(e));
  return reduceTo(reduced);
};

const superDigit = (num, k) => {
  let MULTIPLIED = "";

  for (let i = 0; i < k; i++) {
    MULTIPLIED += num;
  }

  const toBeProcessed = MULTIPLIED.split("").map((e) => Number(e));

  return reduceTo(toBeProcessed);
};

const res = superDigit(digit, 6);

console.log(res);
