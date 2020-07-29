/*
 * @Author: your name
 * @Date: 2020-07-27 11:02:08
 * @LastEditTime: 2020-07-29 11:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/javacript系列之跟着underscore学习/类型判断/judgeType.js
 */ 
// 类型判断在 web 开发中有非常广泛的应用，简单的有判断数字还是字符串，进阶一点的有判断数组还是对象，
//再进阶一点的有判断日期、正则、错误类型，再再进阶一点还有比如判断 plainObject、空对象、Window 对象等等。

//1.typeof 是一元操作符，放在其单个操作数的前面，操作数可以是任意类型。返回值为表示操作数类型的一个字符串。
console.log(typeof('你好'))
//js的数据类型:string | number | boolean | undefined | object | null | symbol

function judgeType(test) {
  let map = {
    "[object Undefined]":'undefined',
    "[object Null]":'null',
    "[object String]":'string',
    "[object Number]":'number',
    "[object Boolean]":'boolean',
    "[object Function]":'function',
    "[object Array]": 'array',
    "[object Object]":'object',
    "[object Symbol]":'symbol',
    "[object Date]":'date',
    "[object Error]":'error',
    "[object RegExp]":'regexp',
  }
  return map[Object.prototype.toString.call(test)];
}
function a() {
  console.log(111)
}
console.log(judgeType(a))

//判断是否是空对象
function isEmptyObject(obj) {
  let name;
  for(name in obj) {
    return false;
  }
  return true
}

//判断是否是window对象
function isWindow(obj) {
  return obj  != null && obj === obj.window;
}
//判断是否是数组和类数组
function isArrayLike(obj) {

  // obj 必须有 length属性
  var length = !!obj && "length" in obj && obj.length;
  var typeRes = type(obj);

  // 排除掉函数和 Window 对象
  if (typeRes === "function" || isWindow(obj)) {
      return false;
  }

  return typeRes === "array" || length === 0 ||
      typeof length === "number" && length > 0 && (length - 1) in obj;
}
