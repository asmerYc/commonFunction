/*
 * @Author: your name
 * @Date: 2020-07-17 16:19:30
 * @LastEditTime: 2020-07-17 16:19:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/moment/javacript系列之跟着underscore学习/debounce.js
 */

window.onload = function () {
  let count = 0;
  let container = document.getElementById("container");
  function getAction() {
    console.log(this);
    container.innerHTML = count++;
  }
  container.onmousemove = debounce(getAction, 1000);
};

// 防抖:你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
//如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，
//总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!
function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}
