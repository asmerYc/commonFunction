/*
 * @Author: your name
 * @Date: 2020-07-20 17:17:12
 * @LastEditTime: 2020-07-20 17:30:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/节流/throttle.js
 */ 

 window.onload = function () {
  let count = 0;
  let container = document.getElementById("container");
  function getAction(e) {
    console.log(this);
    console.log(e);
    container.innerHTML = count++;
  }
  container.onmousemove = throttle(getAction, 1000, true);
};

function throttle(func,wait) {
  let context,args;
  let previous = 0;
  return function() {
    let now = new Date().getTime();
    context = this;
    args = arguments;
    if(now -previous > wait) {
      func.apply(context,args);
      previous = now;
    }
  }
}