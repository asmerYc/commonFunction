/*
 * @Author: your name
 * @Date: 2020-08-11 12:01:09
 * @LastEditTime: 2020-08-11 20:18:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/jsDomArtist/ajax/scripts/getNewContent.js
 */
function getNewContent() {
  var request = new XMLHttpRequest();;
  //XMLHttpRequest对象最有用的就是open方法,它用来制定服务器上将要访问的文件,指定的请求类型:GET,POST或SEND 
  //方法的第三个参数用于指定请求是否以异步的方式发送和处理
  if(request) {
    var script = document.createElement('script');
    script.src = '../example.txt?callback=handleResponse';
    document.getElementsByTagName('head')[0].appendChild(script);
    // request.open("GET","../example.txt",true);
    // request.onreadystatechange = function() {
    //   if(request.readyState == 4 && request.status == 200) {
    //     alert("请求数据成功")
    //     // readyState  0-未初始化 1-正在加载 2-加载交互 3-正在交互 4-完成
    //     var para = document.createElement("p");
    //     var txt = document.createTextNode(request.responseText);
    //     para.appendChild(txt);
    //     document.getElementById("new").appendChild(para)
    //   }
    // };
    // request.send();
  } else {
    alert('Sorry, your browser doesn\'t support XMLHttpRequest')
  }
}
function handleResponse(data) {
  console.log(data)
}
addLoadEvent(getNewContent);