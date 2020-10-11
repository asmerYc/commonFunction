/*
 * @Author: your name
 * @Date: 2020-09-04 15:28:53
 * @LastEditTime: 2020-09-04 16:26:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/每天一道面试题/promise.js
 */
function promise() {
  let promise1 = new Promise(function(resolve,reject){
    resolve(1)
  })
  let promise2 = new Promise(function(resolve,reject){
    resolve(2)
  })
  let promise3 = new Promise(function(resolve,reject){
    resolve(3)

  })

  Promise.all([promise1,promise2,promise3]).then(res => {
    console.log(res);
  })
}

// promise.race=====  race是竞速的意思,这个参数中的prom
function promiseRace(){
  let promise2 = new Promise(function(resolve,reject){
    reject('this is an error')
  })


  let promise3 = new Promise(function(resolve,reject){
    resolve(3)

  })
  let promise1 = new Promise(function(resolve,reject){
    resolve(1)
  })
  Promise.race([promise3,promise2,promise1]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
promise()
promiseRace()