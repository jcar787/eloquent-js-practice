const min = (x, y) => {
  if (x < y) {
    return x;
  } else if (y < x) {
    return y;
  }
  return x;
};

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(5, 5));
