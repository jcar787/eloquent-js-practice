const arrayToList = arr => {
  if (arr.length == 0) {
    return null;
  }
  return { value: arr[0], next: arrayToList(arr.slice(1)) };
};

const listToArray = obj => {
  const result = [];
  for (let node = obj; node; node = node.rest) {
    result.push(node.value);
  }
  return result;
};

const prepend = (value, obj) => {
  return { value, next: obj };
};

const nth = (obj, pos) => {
  if (!obj) {
    return null;
  }
  if (pos === 0) {
    return obj.value;
  }
  return nth(obj.next, pos - 1);
};

const test = arrayToList([10, 20, 30, 40]);
console.log(test);
console.log(listToArray(test));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30, 50]), 2));
