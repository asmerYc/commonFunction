/*
 * @Author: your name
 * @Date: 2020-07-27 17:55:31
 * @LastEditTime: 2020-07-27 20:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/数组扁平化/flatten.js
 */ 

 //数组扁平化
 //1.reduce写法
 let arr = [1,2,[1,2,[1,2,3,[1,2,3]]]];
 function platten(arr) {
   return arr.reduce((acc,cur) => {
      return acc.concat(Array.isArray(cur) ? platten(cur) : cur)
   },[])
 }

 //2.原始循环写法
 function platten1(arr) {
   let res = [];
   for(let i =0;i<arr.length;i++) {
     if(Array.isArray(arr[i])) {
      res = res.concat(platten1(arr[i]))
     } else {
      res.push(arr[i])
     }
   }
   return res
 }
 //3.es6扩展运算符写法
function platten2(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr =[].concat(...arr);
  } 
  return arr
}



console.log(platten(arr))
console.log(platten1(arr))
console.log(platten2(arr))