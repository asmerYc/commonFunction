/*
 * @Author: your name
 * @Date: 2020-09-17 15:12:40
 * @LastEditTime: 2020-10-22 11:59:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/rxjs/2.2.1observable.js
 */
const Observable = require('rxjs/Observable').Observable

const source$ = Observable.of(1,2,3);
source$.subscribe(console.log)