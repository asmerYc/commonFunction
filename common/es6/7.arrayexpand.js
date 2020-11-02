/*
 * @Author: your name
 * @Date: 2020-11-02 14:03:16
 * @LastEditTime: 2020-11-02 15:07:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/7.arrayexpand.js
 */
//数组的扩展
//1.扩展运算符
//  扩展运算符(spread)是三个点(...) 类似于rest参数的逆运算,将一个数组转为用逗号分割开的有序数列
console.log(...[1,2,3])
//该运算符主要用于函数调用
function push(array,...items) {
  array.push(...items);
}

function add(x,y) {
  return x + y;
}

//替代函数的apply方法
//es5写法
function f(x,y,z) {
  //
}
var args = [2,3,4]
f.apply(null,args)

//es6的写法
let args1 = [2,3,4]
f(...args1)

//Math.max
//es5的写法
var maths = [1,2,3,4];
console.log(Math.max.apply(null,maths))

//es6的写法
console.log(Math.max(...maths))

//通过push  将一个数组添加到另一个数组的尾部
//es5  
var arr1 = [0,1,2];
var arr2 = [3,4,5];
console.log(Array.prototype.push.apply(arr1,arr2))
console.log(arr1.push.apply(arr1,arr2))

//es6
arr1.push(...arr2)

//扩展运算符的应用
//(1)复制数组
//数组是复合类型数据  直接复制的话 只是复制了指向底层数据结构的指针,而不是克隆一个全新的数组
//es5只能用变通的方法来复制数组
const a1 = [1,2];
const a2 = a1.concat()
console.log(a2[1] = 3)
console.log(a1)
console.log(a2)

//扩展预算福可以将字符串变成真正的数组
console.log([...'hello'])

//2.Array.from()用于将两类对象转为真正的数组,类似数组的对象(array-like OBject)和可遍历的对象(iterable)
let arrayLike = {
  '0':'a',
  '1':'b',
  '2':'c',
  length:3,
}
//es5的写法
// console.log([].slice.call(arrayLike))
console.log(Array.prototype.slice.call(arrayLike))
//es6的写法
let arr22 = Array.from(arrayLike)
