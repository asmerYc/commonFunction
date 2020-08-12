/*
 * @Author: your name
 * @Date: 2020-08-11 09:30:32
 * @LastEditTime: 2020-08-11 12:01:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/charpter_seven/example.js
 */
window.onload = function() {
  let testdiv = document.getElementById('testdiv');
  let parea = document.createElement('p');
  let emarea = document.createElement('em');
  let txt1 = document.createTextNode('This is');
  let txt2 = document.createTextNode(' my ');
  let txt3 = document.createTextNode(' content');
  emarea.appendChild(txt2);
  parea.appendChild(txt1);
  parea.appendChild(emarea);
  parea.appendChild(txt3);
  testdiv.appendChild(parea);
  document.getElemen
}