/*
 * @Author: your name
 * @Date: 2020-07-27 15:03:08
 * @LastEditTime: 2020-07-27 17:52:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/求数组最大最小值/extreme.js
 */ 
let arr = [6, 4, 1, 8, 2, 11, 23];
//1.原始办法求最大值

function max(obj) {
  let result = obj[0];
  for(let i =0;i<obj.length;i++){
    result = Math.max(result,arr[i]);
  }
  console.log(result)
}

function max1(obj) {
  let res = obj.reduce((prev,next) => {
    return Math.max(prev,next)
  })
  console.log(res)
}

//使用sort排序 拿最后一位
function max2(obj) {
  obj.sort((a,b) => a - b)
  console.log(obj[obj.length - 1])
}

//使用apply
function max3(obj) {
  console.log(Math.max.apply(null,obj))
}
// es6
function max4(obj) {
  console.log(Math.max(...obj))
}
max(arr)
max1(arr)
max2(arr)
max3(arr)
max4(arr)
