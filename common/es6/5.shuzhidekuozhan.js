/*
 * @Author: your name
 * @Date: 2020-10-31 11:27:29
 * @LastEditTime: 2020-10-31 14:29:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/5.shuzhidekuozhan.js
 */
//Number.isInteget()  //用来判断一个数值是否为整数
console.log(Number.isInteger(25))    //true
console.log(Number.isInteger(25.1))  //false 
console.log(Number.isInteger(25.0))  //true

//如果参数不是数值,Number.isInterger返回false


// Number.EPSILON -- 其实可以代表JavaScript的最小精度
console.log(Number.EPSILON)
console.log(Number.EPSILON.toFixed(20))

//引入一个咋么小的量的目的,在于为浮点数计算,设置一个误差范围.我们知道浮点数计算是不精确的
console.log(0.1+0.2)
console.log(0.1+0.2 - 0.3)
console.log((0.1+0.2 - 0.3).toFixed(20))

function withinErrorMargin(left,right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2,2);
}

//7 Math的扩展  Math.trunc用于去除一个数的小数部分,返回整数部分


console.log(Math.trunc(2.8))  // 2 返回的是整数的部分

//8 指数运算符 (**)
console.log(2**4)
console.log(Math.pow(2,4))
console.log(6 ** 6)
