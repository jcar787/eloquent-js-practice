function flat(arr) {
  return arr.reduce((acum, ele) => acum.concat(ele), [])
}
const myArr = [[1,2,3],[4,5],[6,7,8],[9]]
console.log(myArr)
console.log(flat(myArr))