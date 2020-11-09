/*
 * @Author: your name
 * @Date: 2020-11-05 18:14:16
 * @LastEditTime: 2020-11-09 14:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/10.maporset.js
 */
//WeakSet
//set 类似于数组,但是成员都是唯一的,没有重复的值
const s = new Set();
[2,3,5,4,5,2,2].forEach(x => s.add(x));
console.log(s)
console.log([...s])

//set的实际应用
//1.去除数组重复成员的办法
let arr1 = [2,3,5,4,5,2,2]
let arr2 = [...new Set(arr1)]
console.log(arr2)
//2.去除字符串中的重复字母
let string1 = 'ababbc';
let string2 = [...new Set(string1)].join('')
console.log(string2);
//向set中加入值的时候,不会发生类型转换,所以5和'5'是两个不同的值,Set内部判断两个值是否不同,使用的算法叫做'Same-value-zero equality'
//它类似于精确相等运算符(===),主要的区别是向Set加入值时认为NaN等于自身
// Array.from可以把Set结构转为数组
const items = new Set([1,2,3,4,5]);
const array = Array.from(items)
//上边这个方法就提供了除数组重复成员的一种方法
function dedepu(array) {
  return Array.from(new Set(array));
}

//Set的实例属性和方法
//Set机构的实例有一下属性
//---Set.prototype.constructor:构造函数,默认就是Set函数
//---Set.prototypr.size:返回Set实例的成员总数
//Set实例的方法分为两个大类:操作方法,(用于操作数据)和遍历方法,(用于遍历成员),下面先介绍四个操作方法
//---Set.prototype.add(value):添加某个值.返回Set结构本身
//---Set.prototype.delete(value):删除某个值.返回一个布尔值,表示删除是否成功
//---Set.prototype.has(value):返回一个布尔值,表示该值是否为Set的成员
//---Set.prototype.clear():清除所有成员,没有返回值

let x = new Set()
x.add(1).add(2).add(2)
console.log(x)
console.log(x.size)
console.log(x.has(1))
console.log(x.has(2))
console.log(x.has(3))

console.log(x.delete(2))
console.log(x.has(2))

// Set结构的实例有四个遍历方法,可以用于遍历成员
//----Set.prototype.keys():返回键名的遍历器
//----Set.prototype.values():返回键值的遍历器
//----Set.prototype.entries():返回键值对的遍历器
//----Set.prototype.forEach():使用回调函数遍历每个成员
//Set的遍历顺序就是插入顺序,这个特性有时候非常有用,比如使用Set保存一个回调函数列表,调用的时候就能保证按照添加顺序调用
//(1)keys,values(),entries()
//上述三个方法返回的都是遍历器对象,由于Set结构没有键名,只有键值(或者说键名和键值是一个值)所以keys方法和values方法的行为完全一致
let set = new Set(['red','green','blue'])
for(let item of set.keys()) {
  console.log(items)
}  // red green blue
for(let item of set.values()) {
  console.log() //red green blue
}
for(let item of set.entries()) {
  console.log(item)
}
// ['red','red'] ['green','green'] ['blue','blue']

//2.forEach() Set结构的实例与数组一样,也拥有forEach方法,用于对每个成员执行某种操作,没有返回值
let set1 = new Set([1,4,9])
set1.forEach((value,key) => console.log(key +':'+value))
// 1:1 4:4 9:9

//(3)遍历的应用
//扩展运算符(...)内部使用for...of循环,所以也可以用于Set结构
let arr3 = [3,5,2,2,5,5];
let unique = [...new Set(arr3)]
console.log(unique)

//使用set 可以很容易实现并集(union),交集(intersect)和差级(Difference)
let a = new Set([1,2,3])
let b = new Set([2,3,4])

//并集
let union = Array.from(new Set([...a,...b]))
console.log(union,'union+++++')
//交集
let intersect = [...a].filter(x => b.has(x))
console.log(intersect)
//差集
let difference = [...a].filter(x => !(b.has(x)))
console.log(difference)

// WeakSet的一个用处:存储Dom节点,而不用担心这些节点从文档删除的时候 会引发内存泄露
//--内存泄露
//什么是内存泄露?
// 内存泄露是指一块被分配的内存既不能使用,又不能回收,直到浏览器的进程结束,浏览器中采取自动垃圾回收办法管理,但是由于浏览器垃圾回收方法有bug,会产生内存泄露
//2.内存泄露的几种情况
//2.1:当页面中元素被移除或替换时,若元素绑定的事件仍没被移除,在IE中不会作出恰当处理,此时要先手工移除事件,不然会存在内存泄露




