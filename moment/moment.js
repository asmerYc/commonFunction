/*
 * @Author: your name
 * @Date: 2020-07-08 16:05:08
 * @LastEditTime: 2020-07-16 20:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/moment/moment.js
 */ 
var moment = require('moment')
var now = moment()
var day = moment("1995-12-25");
// console.log(moment().day())
const string = "2020-07-10 20:10:00"
// console.log(string.split(" ")[0])
// console.log(moment(string).format('YYYY-MM-DD'))


console.log(new Date())
console.log(moment())
console.log(moment(new Date()))
console.log(moment(string))
console.log(moment('1995-12-14'))