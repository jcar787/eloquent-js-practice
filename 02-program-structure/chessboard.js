const chessboard = (size = 8) => {
  for (let i = 0; i < size; i++) {
    let line = '';
    let flag = i % 2;
    for (let j = 0; j < size; j++) {
      if (j % 2 == flag) {
        line += ' ';
      } else {
        line += '#';
      }
    }
    console.log(line);
  }
};

chessboard();
console.log();
console.log();
chessboard(9);
