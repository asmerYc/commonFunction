/*
 * @Author: your name
 * @Date: 2020-08-14 17:45:41
 * @LastEditTime: 2020-08-15 10:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/每天一道面试题/200813.js
 */
// 题目描述:下面代码中a在什么情况下会打印1?
// var a = '';

//answer1

// 如果原始类型和对象比较，对象会转为原始类型的值在进行比较。
// 对象转换为原始类型的值，先调用对象的 valueOf 方法，如果返回的还是对象，再接着调用 toString 方法
// var a = {
//   i:1,
//   toString:function(){
//     return a.i++
//   }
// }
// if(a==1 && a==2 && a==3) {
//   console.log(666)
// }
// answer2

//比较巧妙的方式，array也是对象，
//对于数组对象，toString 方法返回一个字符串，该字符串由数组中的每个元素的 toString() 方法返回值，再经过调用 join() 方法连接（由逗号隔开）组成。
//数组 toString 方法会调用本身的 join() 方法，这里把自己的 join() 方法改写为 shift() 方法，每次返回第一个元素，而且每次数组删除第一个值，正好可以使判断成立。
var a = [1,2,3];
a.join = a.shift
if(a==1 && a==2 && a==3) {
  console.log(666)
}