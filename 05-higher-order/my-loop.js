const myLoop = (val, testFn, updateFn, bodyFn) => {
  while (testFn(val)) {
    bodyFn(val);
    val = updateFn(val);
  }
};

myLoop(10, n => n > 0, n => n - 1, console.log);
