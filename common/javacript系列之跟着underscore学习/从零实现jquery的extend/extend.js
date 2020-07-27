/*
 * @Author: your name
 * @Date: 2020-07-27 14:34:10
 * @LastEditTime: 2020-07-27 16:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/从零实现jquery的extend/extend.js
 */ 
function extend() {
  let name,options,copy;
  let length = arguments.length;
  let i = 1;
  let target =argumrnts[0];
  for(;i<length;i++) {
    options = arguments[i];
    if(options !== null) {
      for(name in options) {
        copy = options[name];
        if(copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}