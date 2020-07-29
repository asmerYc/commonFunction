/*
 * @Author: your name
 * @Date: 2020-07-29 10:40:22
 * @LastEditTime: 2020-07-29 10:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/在数组中查找指定元素/findIndex.js
 */ 
let arr = [12,8,130,44];
//查找数组中大于12的元素
let index = arr.findIndex(item => item > 12)
console.log(index)

//findIndex的正向查找
function findIndex(arr,target) {
  for(let i =0;i<arr.length;i++) {
    if(arr[i] > target) {
      return i;
    }
  }
}
//逆向查找 lastFindIndex
function lastFindIndex(arr,target) {
  let i =arr.length -1;
  for(;i>=0;i--) {
    if(arr[i] > 12) {
      return i;
    }
  }
}
console.log(findIndex(arr,12))
console.log(lastFindIndex(arr,12))