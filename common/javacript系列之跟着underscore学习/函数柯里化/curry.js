/*
 * @Author: your name
 * @Date: 2020-07-29 14:51:11
 * @LastEditTime: 2020-07-29 16:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/函数柯里化/curry.js
 */ 
//柯里化:在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function ajax(type,url,data) {
  let xhr = new XMLHttpRequest();
  xhr.open(type,url,true);
  xhr.send(data)
}