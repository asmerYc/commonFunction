/*
 * @Author: your name
 * @Date: 2020-08-11 11:59:06
 * @LastEditTime: 2020-08-11 12:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/ajax/scripts/getHTTPObjct.js
 */
function getHTTPObject() {
  if(typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function () {
      try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch(e) {}
      try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch(e) {}
      try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch(e) {}
        return false;
      }
    }
    return new XMLHttpRequest()
  }

