/*
 * @Author: your name
 * @Date: 2020-10-31 14:47:42
 * @LastEditTime: 2020-10-31 16:55:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/6.hanshudekuozhan.js
 */
//1.rest参数--形式为(...变量名) 用于获取函数的多余参数 这样就不需要使用arguments对象了 rest参数搭配的变量是一个数组,该变量将多余的参数放入数组中

//2.函数的name属性

function foo () {}
console.log(foo.name)

//3.箭头函数

var f = v => v
//等同于
var f = function(v) {return v};

//如果箭头函数不需要参数 或  需要多个参数,就使用一个圆括号代表参数部分
var f = () => 5;
//等同于
var f = function(){ return 5};

var sum = (num1,num2) => num1 + num2;
//等同于
var sum = function(num1,num2){return num1 + num2};
