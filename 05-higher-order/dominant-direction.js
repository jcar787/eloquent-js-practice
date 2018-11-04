const SCRIPTS = require('./scripts');

const getDirection = charVal => {
  for (script of SCRIPTS) {
    const { direction, ranges } = script;
    const result = ranges.find(
      range => charVal >= range[0] && charVal <= range[1]
    );
    if (result) {
      return direction;
    }
  }
};

const getMaxDirection = map => {
  const keys = Object.keys(map);
  const result = { max: map[keys[0]], direction: keys[0] };
  for (key of keys) {
    if (map[key] > result.max) {
      result.max = map[key];
      result.direction = key;
    }
  }
  return result.direction;
};
const dominantDirection = text => {
  const map = text.split('').reduce(
    (acum, char) => {
      const key = getDirection(char.charCodeAt(0));
      if (key) {
        acum[key]++;
      }
      return acum;
    },
    {
      ltr: 0,
      rtl: 0,
      ttb: 0
    }
  );
  return getMaxDirection(map);
};

console.log(dominantDirection('Hey, مساء الخير'));
// console.log(SCRIPTS);
