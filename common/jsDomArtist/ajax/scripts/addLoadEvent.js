/*
 * @Author: your name
 * @Date: 2020-08-11 11:58:50
 * @LastEditTime: 2020-08-11 16:12:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/ajax/scripts/addLoadEvent.js
 */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if(typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();func();
    }
  }
}