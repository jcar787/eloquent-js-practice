const countBs = str => {
  let count = 0;
  for (const chr of str) {
    if (chr === 'B') {
      count++;
    }
  }
  return count;
};

const countChar = (str, key) => {
  let count = 0;

  for (const chr of str) {
    if (chr === key) {
      count++;
    }
  }
  return count;
};

console.log(countBs('BBC'));
console.log(countChar('kakkkkkklak', 'k'));
