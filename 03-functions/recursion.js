const isEven = num => {
  if (Math.abs(num) == 0) {
    return true;
  }
  if (Math.abs(num) == 1) {
    return false;
  }
  return isEven(Math.abs(num) - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
