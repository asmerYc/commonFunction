/*
 * @Author: your name
 * @Date: 2020-07-29 20:54:40
 * @LastEditTime: 2020-07-29 20:58:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/函数组合/combine.js
 */ 
//需求:我们需要一个函数,输入"kevin",返回 HELLO KEVIN
function upperCase(x) {
  return x.toUpperCase();
}
function hello(x) {
  return 'HELLO,' + x;
}
function greet(x) {
  return hello(upperCase(x))
}
console.log(greet('kevin'))