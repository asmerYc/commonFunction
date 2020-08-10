/*
 * @Author: your name
 * @Date: 2020-08-07 14:49:21
 * @LastEditTime: 2020-08-07 14:51:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/charpter_four/showPic.js
 */
function showPic(pic) {
  let source = pic.getAttribute("href");
  let text = pic.getAttribute('title');
  let desc = document.getElementById('description')
  let placeholder = document.getElementById('placeholder');
  console.log(desc.childNodes[0].nodeValue)
  console.log(desc.lastChild);
  
  placeholder.setAttribute('src',source)
  desc.firstChild.nodeValue =text
}