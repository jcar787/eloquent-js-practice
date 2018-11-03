const range = (start, end, step = 1) => {
  const result = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
};

const sum = nums => {
  let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
};

console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
