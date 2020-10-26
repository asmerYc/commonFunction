/*
 * @Author: your name
 * @Date: 2020-10-26 09:14:20
 * @LastEditTime: 2020-10-26 17:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /commonFunction/common/es6/jsSkill.js
 */
//1.模板字符串--模板字符串提供了可以包含动态之的占位符,以美元符号和大括号标记
let name = 'asmer';
let intro = `Hello, this is ${name}`
console.log(intro)
//2.判断是否为整数
let number = 123;
let string = '123'
console.log(Number.isInteger(number));
console.log(Number.isInteger(string));
//3.值为数字
//你是否曾经注意到,即使是输入框类型为数字,event.target.value仍始终返回字符串类型的值?
//在事件处理程序中,我们使用event.target.value取出值,但是它返回一个字符串类型值,现在我们不得不将其解析成整数,如果输入框接受浮点数(12.33)怎么办
//使用parseFloat(),这样我们还得去处理各种异常

//现在 我们可以使用event.target.valueAsNumber 它将以数字形式返回值
function trackChange(event) {
  // let value = event.target && event.target.valueAsNumber;
}

//4.使用 && 运算符简化表达式

//test  我们考虑一个具有布尔值和函数的情况

let flag = true;

//单个标识符判断执行后续方法可以 写为以下  不用用If else去判断循环
flag && trackChange()

//5 使用 || 为变量设置默认值
let skill = '打球';
let skills = skill || '啥都会';

//6.获取随机项
//生成随机数或从数组中获取随机项是非常且方便的方法
let names = ['张三','李四','王五','赵六','马七','孙八'];
let randomName = names[Math.floor(Math.random() * names.length)]
console.log(randomName);
//通过指定一个最大值 一个最小值,在一个范围内生成一个随机数

//原理:用0-1之间的随机数,乘以最大值减去最小值 结果肯定是小于之前的差值  然后在加最小值,那所得结果 就在最小值和最大值的范围中间
let getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}
console.log('Get random', getRandom(0, 10));
// 7.函数默认参数

let greetings = (name, message='Hello,') => {
  return `${message} ${name}`;
}

console.log(greetings('Jack'));
console.log(greetings('Jack', 'Hola!'));

//8.扩展运算符
// 用于合并数组
let arr1 = ['张三','李四','王五'];
let arr2 = ['赵六','马七','孙八'];
let concat = [...arr1,...arr2];
console.log(concat);
//9.用于合并对象
let emp = {
  'id': 'E_01',
  'name': 'Jack',
  'age': 32,
  'addr': 'India'
 };
 
 let job = {
  'title': 'Software Dev',
   'location': 'Paris'
 };
 let merged = {...emp,...job};
 console.log(merged);
 //利用Object.assign()来合并对象
 console.log('Object Assign',Object.assign({},emp,job));
 //解构
 let emojis = ['🔥', '⏲️', '🏆', '🍉'];
 let [fire, clock, , watermelon] = emojis;
 console.log(fire, clock, watermelon);
 //让我在这里再介绍一个叫做“rest”运算符的东西。如果您想对数组进行解构，从而将一个或多个项目分配给变量并将其余部分暂放在另一个数组中，
 //就可以使用...rest来完成，如下所示
 let [fruit, ...rest] = emojis;
console.log(rest);

//9.交换变量
let fireSmall = '🔥';
let fruitSmall = '🍉';

[fruitSmall, fireSmall] = [fireSmall, fruitSmall];
console.log(fireSmall, fruitSmall);

//11.判断是否为一个数组 --- isArray
let groups = ['js','C','java'];
let objs = {};
console.log(Array.isArray(groups))
console.log(Array.isArray(objs))

//12. undefined 和 null
// undefined指的是还没有给变量定义值，但已经声明了该变量。
// 
// null本身是一个空且不存在的值，必须将其显式赋值给变量。
// 
// undefined和null并不严格相等，

console.log(undefined === null)

// 13.获取查询参数

//window.location对象具有许多实用方法和属性。使用这些属性和方法，我们可以从浏览器 URL 中获取有关协议、主机、端口、域等的信息。

//window.location.search

//search属性从位置url返回查询字符串,以这个url为例:https：//tapasadhiary.com？project = js
// location.search将返回? project=js
//我们可以使用另一个URLSearchParams的有用接口医技 location,search来获取查询参数的值
let project = new URLSearchParams(location.search).get('project');

 