const days = [
  [1, 3, 4, 10, 5],
  [10, 3, 4, 2],
  [20, 4, 2, 10, 20],
  [3, 5, 3, 7, 8, 4],
  [10, 5, 11, 21],
  [1, 5000, 3000, 4000, 3000, 2000, 1000, 5000, 4000, 1, 3000],
];

const stocks = (array) => {
  const results = [];
  const profitEveryDay = [];

  for (let n = 0; n < days.length; n++) {
    const arr = array[n];
    const list = [];
    for (let u = 0; u < days[n].length; u++) {
      if (arr[u] > arr[u - 1] && arr[u] < arr[u + 1]) {
        continue;
      } else {
        list.push(arr[u]);
      }
    }
    const buy = [];
    const sell = [];

    for (let p = 0; p < list.length; p++) {
      if (list[p] < list[p + 1]) {
        buy.push(list[p]);
      }
      if (list[p] > list[p - 1]) {
        sell.push(list[p]);
      }
    }
    results.push({
      id: `day ${n + 1}`,
      stocks: { buy: buy, sell: sell },
    });
    const profit = [];
    for (let y = 0; y < results.length; y++) {
      for (let i = 0; i < results[y].stocks.buy.length; i++) {
        const profitPerDay =
          results[y].stocks.sell[i] - results[y].stocks.buy[i];
        profit.push(profitPerDay);
      }
    }
    profitEveryDay.push({
      id: `day ${n + 1}`,
      profit: profit.reduce((prev, current) => prev + current),
    });
  }

  return profitEveryDay;
};

const res = stocks(days);

console.log(res);

const getDay = (days, day) => {
  const result = days.filter((e) => e.id === day);

  return result;
};

// const dayToBeShown = stocks(days);
// const result = getDay(dayToBeShown, "day 6");

// console.log(result);
