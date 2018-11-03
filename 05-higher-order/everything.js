const every = (arr, fn) => !arr.some(el => !fn(el));

console.log(every([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n < 10));
