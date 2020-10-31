/*
 * @Author: your name
 * @Date: 2020-10-30 15:28:30
 * @LastEditTime: 2020-10-30 15:50:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/3.zifuchuandekuozhan.js
 */
//2.字符串的遍历器接口
//es6 为字符串添加了遍历器的接口  for...of
// for(let codePoint of 'foo'){
//   console.log(codePoint)
// }

//这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。

Array.prototype.arrPro = () => {console.log(111)};
let arr = [1,2,3];
let obj = {
  name:"lal",
  sex:'男',
  height:'168cm'
}
for(let key in obj) {
  console.log(obj[key])
}
for(let x in arr) {
  console.log(x);
}
for(let k of arr) {
  console.log(k)
}