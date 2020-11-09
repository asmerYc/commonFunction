/*
 * @Author: your name
 * @Date: 2020-11-09 14:30:20
 * @LastEditTime: 2020-11-09 16:50:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/11.map.js
 */
// Map结构
//es6提供了Map数据结构,它类似与对象,也是键值对的集合,但是'键'的范围不限于字符串,各种类型的值(包括对象)都可以当键.也就是说object结构提供了'字符串-值'的对应
//Map结构提供了'值-值'的对应 是一种更完善的hash结构的实现 
const m = new Map();
const o = {p: 'He     llo World'};

m.set(o, 'content');
m.get(o)
console.log(m.get(o));
console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));

//作为构造函数,map接受一个数组作为参数,该数组的成员是一个个表示键值对的数组
const items = [
  ['name','张三'],
  ['title','Author'],
];
const map = new Map();
items.forEach(
  ([key,value]) => map.set(key,value)
)
console.log(items)
console.log(map)

const set = new Set([
  ['foo',1],
  ['bar',2]
]);
const m1 = new Map(set);
console.log(m1)
m1.get('foo');
const m2 = new Map([['baz',3]])
console.log(m2)

const m3 = new Map(m2)
console.log(m3)

//如果对于一个键多次复制,后边的值将覆盖掉前面的值
const map1 = new Map();
map1.set(1,'aaa')
map1.set(1,'bbb')
console.log(map1.get(1))

//如果读取一个未知的值,则会返回undefined
console.log(new Map().get('asdffff'));  //undefined

//注意:只有对统一个对象的引用,Map结构才将其视为同一个键,这一点要非常小心
const map3 = new Map();
map3.set(['a'],555);
console.log(map3)
console.log(map3.get([ 'a' ]))

// 上面的set和get方法表面上是针对同一个键,但实际上这是两个不同数组实例,内存地址是不一样的,因此get方法无法读取该键,返回Undefined
//同理.同样值的两个实例,在Map结构中被视为两个键

const map4 = new Map();
const k1 = ['a'];
const k2 = ['a'];
map4.set(k1,111).set(k2,222);
console.log(map4.get(k1))
console.log(map4.get(k2))

//由上可知,Map的键实际上是跟内存地址绑定的,只要是内存地址不一样,就视为练个键,这就解决了同名属性碰撞(clash)的问题
//我们在扩展别人库的时候,如果使用的是对象作为键名,就不用担心自己的属性和原作者的属性同名

//如果Map的键使用一个简单类型的值(数字,字符串,布尔值),则只要两个值严格相等,Map则将其视为一个键,比如0 和 -0 布尔值 true和字符串true则是两个不同的键
// 另外,unfefined和null也是两个不同的键,虽然NaN不严格相等于自身,但Map将其视为同一个键

let mpp = new Map();
mpp.set(-0,133);
console.log(mpp.get(+0));

mpp.set(true,1)
mpp.set('true',1)
console.log(mpp.get(true))

mpp.set(undefined,3)
mpp.set(null,4)
console.log(mpp.get(undefined))


mpp.set(NaN,123)
console.log(mpp.get(NaN))



//实例的属性和操作方法
//Map的结构实例有一下属性和操作方法

//(1)size属性
//size属性返回Map结构的成员总数
//(2).Map.prototype.set(key,value)
// set方法设置键名 key对应的键值为value,然后返回整个Map结构,如果key已经有值,则键值会被更新,否则就新生成该值
const m11 = new Map();
m11.set('edition',6)  //键是字符串
m11.set('edition',6)  //键是数值
m11.set('edition',6)  //键是 undefined

//set方法 返回的是当前的Map对象 因此可以采用链式写法
let msp = new Map()
.set(1,'a')
.set(2,'b')
.set(3,'c')

//(3) Map.prototype.get(key)
//get方法读取key对应的键值.如果找不到key.返回Undefined

const msa = new Map();
const hello = function() {console.log('hello')}
msa.set(hello,'hello Es6!')  //键是函数
console.log(hello)

//(4)Map.prototype.has(key)
//has方法用于返回一个布尔值,表示某个值是否在当前的Map对象之中
//(5)Map.prototype.delete(key)
//delete方法删除某个键,返回true,如果删除失败,返回false

//(6)Map.prototype.clear()
//clear方法用于清除所有成员,没有返回值


//遍历方法
  
// Map结构原生提供三个遍历器生成函数和一个遍历方法
//---Map.prototype.keys():返回键名的遍历器
//---Map.prototype.values():返回键值的遍历器
//---Map.prototype.entries():返回所有成员的遍历器
//---Map.prototype.forEach():返回键名的遍历器

//需要特别主要的是.Map的遍历顺序就是插入顺序

const maps = new Map([
  ['F','no'],
  ['T','yes']
])
for(let key of maps.keys()) {
  console.log(key)
}
// 'F'  'T'
for(let value of maps.values()) {
  console.log(value)
}
// 'no'  'yes'

for(let item of map.entries()) {
  console.log(item[0],item[1]);
}
// 'F'  'no'
// 'T'  'yes'
// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"



// Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
const map9 = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

console.log([...map9.keys()])
// [1, 2, 3]

console.log([...map9.values()])
// ['one', 'two', 'three']

console.log([...map9.entries()])
// [[1,'one'], [2, 'two'], [3, 'three']]

console.log([...map9])
// [[1,'one'], [2, 'two'], [3, 'three']]

//结合数组的map方法,filter方法,可以实现Map的遍历和锅里(Map本身没有map和filter方法)

const map0 = new Map()
.set(1,'a')
.set(2,'b')
.set(3,'c');
const map6 = new Map([...map0].filter(([k,v]) => k < 3) );
// 产生map结构 {1 => 'a',2 => 'b'}
console.log(map6)

// 与其他数据结构的相互转换
//(1) Map转换为数组
// MaP转换为数组最方便的方法,就是使用扩展运算符(...)
const myMap = new Map()
.set(true,7)
.set({foo:3},['abc']);
console.log(...myMap)

//(2).数组转为Map

console.log(new Map([
  [true,7],
  [{foo:3},['abc']]
]))

//(3)Map转为对象
// 如果所有 Map 的键都是字符串，它可以无损地转为对象。
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
