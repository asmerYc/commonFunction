/*
 * @Author: your name
 * @Date: 2020-10-31 10:22:23
 * @LastEditTime: 2020-10-31 11:14:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/4.zifuchuandezinzengfangfa.js
 */
//2.String.raw()
console.log(String.raw`Hi\n${2+3}`)

//5.实例方法  includes()   startsWith() endsWith()
let s = 'Hello World';
console.log(s.startsWith('Hello'))
console.log(s.endsWith('!'))
console.log(s.includes('o'))
//这三个方法都支持第二个参数,表示开始搜索的位置
let s1 = 'Hello world!';

s1.startsWith('world', 6) // true
s1.endsWith('Hello', 5) // true
s1.includes('Hello', 6) // false

//上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

//实例方法:repeat() repeat方法返回一个新字符串,表示将原字符串重复n次
console.log('x'.repeat(3))
//如果是小数的话 会被取整 --- 向下取整
console.log('na'.repeat(2.9))

//7.实例方法  padStart(),padEnd()
//字符串补全长度功能   如果某个字符串不够指定长度,会在头部或者尾部补全,padStart()用于头部补全,padEnd()用于尾部补全
console.log('x'.padStart(5,'ab'))   // ababx
console.log('x'.padStart(4,'ab'))   // abax
console.log('x'.padEnd(5,'ab'))     // xabab
console.log('x'.padEnd(4,'ab'))     // xaba
// 第一个参数是字符串补全生效的最大长度 , 第二个参数是用来补全的字符串
// 如果原字符串的长度,等于或大于最大长度,则字符串补全不成效, 返回原字符串
console.log('xxx'.padStart(2,'ab'))  //xxx
// 如果用来补全字符串与原字符串,两者的长度之和超过了最大长度,则会截去超出位数的补全字符串
console.log('xx'.padStart(10,'0123456789'))  //01234567xx

//padStart常见的用途是为数值补全指定位数,下面代码是生成10位的数值字符串
console.log('1'.padStart(10,'0'))
console.log('12'.padStart(10,'0'))
console.log('123456'.padStart(10,'0'))

//8.实例  trimStart()  trimEnd()
// 他们的行为和trim是一致的  trimStart消除字符串头部的空格, trimEnd()消除尾部的空格,他们返回的都是新字符串,不会修改原始字符串
const string = ' abc ';
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());


