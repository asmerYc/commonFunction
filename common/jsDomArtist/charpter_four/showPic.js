/*
 * @Author: your name
 * @Date: 2020-08-07 14:49:21
 * @LastEditTime: 2020-08-10 21:13:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/charpter_four/showPic.js
 */

function prepareGallery() {
  if(!document.getElementsByTagName) return false;
  if(!document.getElementById) return false;
  if(!document.getElementById("imagegallery")) return false;
  let gallery = document.getElementById('imagegallery');
  let links = gallery.getElementsByTagName('a');
  for(let i =0;i<links.length;i++) {
    links[i].onclick = function() {
      return showPic(this) ? false : true;
    }
  }
}


function showPic(pic) {
  if(!document.getElementById("placeholder")) return false;
  let source = pic.getAttribute("href");
  let placeholder = document.getElementById('placeholder');
  if(placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute('src',source)




  if(document.getElementById('description')) {
    let text = pic.getAttribute('title') ? pic.getAttribute('title')  : '';
    let desc = document.getElementById('description');
    if(desc.firstChild.nodeType === 3) {
      desc.firstChild.nodeValue = text;
    }
  }
  return true;
}