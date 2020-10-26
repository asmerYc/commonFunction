/*
 * @Author: your name
 * @Date: 2020-10-19 10:10:58
 * @LastEditTime: 2020-10-19 10:32:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/每天一道面试题/panduanTest.js
 */
var isTrue = false;
function test() {
  let juge = true
  if(juge) {
    this.isTrue = false;
    console.log(this.isTrue,'第一个')
  } else {
    console.log(123)
  }
  this.isTrue = false;
  console.log(this.isTrue,'第二个')
}
test();