const deepComparison = (obj1, obj2) => {
  const check1 = typeof obj1;
  const check2 = typeof obj2;

  if (check1 !== check2) {
    return false;
  }
  let keys1 = [];
  let keys2 = [];

  if (check1 === 'object') {
    if (Array.isArray(obj1) && !Array.isArray(obj2)) {
      return false;
    }
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
  }

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (key1 of keys1) {
    if (typeof obj1[key1] === 'object') {
      const checkDeep = deepComparison(obj1[key1], obj2[key1]);
      if (!checkDeep) {
        return false;
      }
    } else if (obj1[key1] !== obj2[key1]) {
      return false;
    }
  }

  return true;
};

const testObj1 = { val: { val: 5, a: { val: [5, 6, 7, 8, 9] } } };
const testObj2 = { val: { val: 5, a: { val: [5, 6, 7, 8, 9] } } };

console.log(deepComparison(testObj1, testObj2));
console.log(
  deepComparison(testObj1, Object.assign(testObj2, { fail: ['l', 'o', 'l'] }))
);
