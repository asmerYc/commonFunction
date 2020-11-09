/*
 * @Author: your name
 * @Date: 2020-11-04 10:22:38
 * @LastEditTime: 2020-11-04 11:45:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/9.symbol.js
 */
//symbol可以接受一个字符串作为参数,表示对Symbol实例的描述,主要是为了在控制台显示,或者转为字符串时,比较容易区分

let s1 = Symbol('foo');
let s2 = Symbol('foo');
console.log(s1)
console.log(s2)

const obj = {
  toString() {
    return 'abc';
  }
}
const sym = Symbol(obj);
console.log(sym)
//Symbol函数的参数只是表示对当前Symbok值的描述,因此相同参数的Symbol函数的返回值是不相等的
console.log(s1 === s2)
//Symbol值不能与其他类型的值进行运算,会报错

//Symbol的值可以显式转为字符串

console.log(String(sym))
console.log(sym.toString())

//Symbol值可以转为布尔值,但是不能转为数值
let sym2 = Symbol()
console.log(Boolean(sym2))

//2Symbol.prototype.description
console.log(sym.description)

//3.作为属性名的Symbol
//由于每一个Symbol的值都是不相等的,这以为着Symbol值可以作为标识符,用于对象的属性名,就能保证不会出现同名的属性,这对于一个对象由多个模块构成的
//情况非常有用,能防止某一个键被不小心改写或者覆盖
let mySymbol =Symbol();

//第一种写法
let a = {};
a[mySymbol] = 'hello!'

//第二种写法
let b = {
  [mySymbol]:'Hello!'
}
//第三种写法
let c = {};
Object.defineProperty(c,mySymbol,{value:'Hello!'});

console.log(a[mySymbol])
console.log(b[mySymbol])
console.log(c[mySymbol])

const mySymbol1 = Symbol();
const aa = {};
aa.mySymbol1  = 'Hello!';
console.log(aa.mySymbol1)
console.log(a[mySymbol1]);
console.log(a['mySymbol1'])


const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');