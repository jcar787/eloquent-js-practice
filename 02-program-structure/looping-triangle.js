const printTriangle = (length = 7) => {
  let print = '';
  for (let i = 0; i < length; i++) {
    print += '#';
    console.log(print);
  }
};

printTriangle();
console.log();
printTriangle(3);
console.log();
printTriangle(9);
