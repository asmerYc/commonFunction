/*
 * @Author: your name
 * @Date: 2020-09-10 16:13:47
 * @LastEditTime: 2020-09-10 16:15:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editon  
 * @FilePath: /commonFunction/common/es6/promise.js
 */
function promise(){
  let promise =  new Promise(function(resolve,reject){
    resolve(1);
    console.log(2)
  });
  promise.then(res => {
    console.log(res)
  })
}
promise()