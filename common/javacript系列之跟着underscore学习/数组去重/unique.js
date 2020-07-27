/*
 * @Author: your name
 * @Date: 2020-07-20 20:27:12
 * @LastEditTime: 2020-07-27 10:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/数组去重/unique.js
 */ 
 let array = [1,3,4,2,1,2,3,4,5];
function unique(arr) {
  for(let i =0;i<arr.length;i++) {
    for(let j = i + 1;j<arr.length;j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j,1);
        j--
      }
    }
  }
  return arr.sort((a,b) => a-b);
}
function unique1(arr) {
  let res = [];
  for(let i = 0;i<arr.length;i++) {
    if(res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res.sort((a,b) => a-b);
}

function unique2(arr) {
  let newArr = arr.sort((a,b) => a - b);
  return Array.from(new Set(newArr));
}
function unique3(arr) {
  let arrSort = arr.sort((a,b) => a - b);
  let res = [];
  for(let i =0;i<arr.length;i++) {
    if(arr[i] !== arr[i+1]);
    res.push(arr[i]);
  }
  return res;
}
//简化版
unique4 = (a) => [...new Set(a)]

//使用filter简化外层循环
function unique5(arr) {
  let res = arr.filter((item,index,array) => {
    return arr.indexOf(item) === index;
  })
  return res
}
console.log(unique(array))
console.log(unique1(array))
console.log(unique2(array))
console.log(unique3(array))
console.log(unique4(array))
console.log(unique5(array))