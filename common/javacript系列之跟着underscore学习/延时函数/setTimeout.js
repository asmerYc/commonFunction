/*
 * @Author: your name
 * @Date: 2020-07-20 16:09:11
 * @LastEditTime: 2020-07-20 16:30:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/moment/javacript系列之跟着underscore学习/延时函数/setTimeout.js
 */ 

 // setTimeout的返回值----Promise
//  function testSettimeout() {
//   let check = false;
//   let promise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//       check = true;
//       resolve(check)
//     })
//   })
//   return promise;
//  }
//  testSettimeout().then((check) => {
//   console.log(check)
//  })

 //setTinmeout的callBack
  function retun(check) {
    console.log(check);
  }

  function callBackTest(callback) {
    let check = false;
    setTimeout(() => {
      check = true;
    })
    callback&&callback(check)
  }
  callBackTest(retun(check))