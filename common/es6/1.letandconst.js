var a = [];
//在for循环中 设置循环变量的那部分是一个父级作用域，而循环体内部是一个单独的作用域
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[2]();
//不允许重复声明

//3.块级作用域
//为什么我们需要块级变量

//3.1--内层变量可能会覆盖外层变量
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
f();
//3.2--用来技术的循环变量泄漏为全局变量
var s = "hello";
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i);

//es6的块级作用域
// let实际上为javaScript增加了块级作用域

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
    console.log(n, "内层n");
  }
  console.log(n, "外层n");
}
f1();

//块级作用域与函数声明

//const 的本质
//const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动
// 对于简单类型的数据（数值，字符串，布尔值）值就保存在变量指向的那个内存地址，因此等同于常量。
// 但是对于符合类型的数据(主要是对象或者数组)，变量指向的内存地址，保存的只是一个指向实际数据的指针
// const 只能保证这个指针是固定的（即总是指向另一个固定的地址）
const foo = {};
//为foo添加一个属性
foo.prop = 123;
console.log(foo.prop);
// foo = {};

//上边的代码中 常量foo存储的是一个地址，这个地址指向的是一个对象，不可变的是这个地址，即不能把foo指向另一个地址
// 但是对象本身是可变的 所以依然还是可以给这个对象添加新的属性的

//4 顶层对象的属性
var a = 1;
console.log(window.a, "window--a");

let b = 1;
console.log(window.b, "window--b");
