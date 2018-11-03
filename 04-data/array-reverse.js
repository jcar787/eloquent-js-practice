const reverseArray = arr => {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

const reverseArrayInPlace = arr => {
  let result = arr;
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    result.shift();
  }
};

let myArr = [1, 2, 3, 4, 5];
console.log(reverseArray(myArr));
reverseArrayInPlace(myArr);
console.log('This is the array outside the function ->', myArr);
