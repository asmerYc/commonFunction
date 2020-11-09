/*
 * @Author: your name
 * @Date: 2020-11-02 20:55:30
 * @LastEditTime: 2020-11-02 21:19:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/8.objectExpand.js
 */
let arrInfo = [
  {name:'张三',age:18,children:[{name:'小张三',age:12,children:[]}]},
  {name:'李四',age:17,children:[{name:'小李四',age:13,children:[]}]}
]
function treeFn(arr) {
  arr.forEach(item => {
    const extra = {
      isLeaf:!item.children
    };
    Object.assign(item,extra);
    if(!extra.isLeaf) {
      treeFn(item.children)
    }
  })
  return arr
}
console.log(treeFn(arrInfo))
