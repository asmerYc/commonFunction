/*
 * @Author: your name
 * @Date: 2020-09-17 15:12:40
 * @LastEditTime: 2020-09-17 15:17:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/rxjs/2.2.1observable.js
 */
import {Observable} from 'rxjs/Observable'

const source$ = Observable.of(1,2,3);
source$.subscribe(console.log)