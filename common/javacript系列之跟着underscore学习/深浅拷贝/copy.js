/*
 * @Author: your name
 * @Date: 2020-07-27 12:16:15
 * @LastEditTime: 2020-07-27 12:30:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/深浅拷贝/copy.js
 */ 
//拷贝样式一门在面试中经常会被面试到的考点

//数据的浅拷贝:slice,concat返回一个新数组的特性来实现拷贝

//instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
//hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

let arr = ['old',1,true,null,undefined];
let new_arr = arr.concat([2]);
new_arr[0] = 'new'
console.log(new_arr)

function shallowCopy(obj) {
  //只拷贝对象
  if(typeof obj !== 'object') return;
  //根据obj的类型判断是新建一个数据还是对象
  let newObj = obj instanceof Array ? [] : {};
  //遍历obj 并且判断是obj的属性才拷贝
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function deepCopy(obj) {
  //只拷贝对象
  if(typeof obj !== 'onject') return;
  //根据obj的类型去判断是创建一个对象还是数组
  let newObj = obj instanceof Array ? [] : {};
  //遍历obj,并且判断是obj的属性才拷贝
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof(obj[key]) === 'object' ? deepCopy(obj[key]) : obj[key]; 
    }
  }
  return newObj
}
