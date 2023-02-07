/*
2022-12-26
1、基本数据类型：string boolean number null undefined 
在栈内存中存储，值与值之间独立存在，修改一个变量不会影响另一个
2、引用数据类型:object 保存顶起哦堆内存中，每创建一个新对象，就会开辟一个新的内存空间，变量保存地是内存地址（对象的引用）
两个对象保存得是同一个对象得引用
3、函数
4、return结束整个函数；返回值可以是任意数据类型，也可以是一个对象
5、枚举对象中得属性 语法：for(var 变量 in 对象){          } 对象中有几个属性，变量就会执行几次；每次执行时就会将对象中的属性名赋值给变量n
6、全局作用域：直接编写到script标签的JS代码；在页面打开时创建，关闭时销毁；有一个全局对象window，代表浏览器的窗口，由浏览器创建，可以直接使用；
创建的变量都会作为window对象的属性保存；创建的方法都会作为window对象的方法保存；全局变量，在页面任意位置均可访问到
变量的声明提前：使用var关键字声明的变量，会在所有代码执行前被声明（但不会赋值）；但是如果声明变量时不用var关键字，则变量不会被声明提前
函数的声明提前：使用函数声明形式创建的函数，会在所有代码执行之前被创建，所以可以在函数声明前调用该函数
7、函数作用域（局部作用域）：调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁；
每调用一次函数就会创建一个新的函数作用域，并且相互独立;
*/
//创建一个变量
// var a = 10;
// function fun(){
//     var a = '我是函数变量a!'
//     console.log('a=',a);//在函数作用域中，可以访问到全局作用域的变量
//     var b = 20;
// }
// fun();
// console.log('a=',a);
// console.log('b=',b);//但在全局作用域中，无法访问到函数作用域的变量


// fun();
// //使用函数声明形式创建的函数会被提前创建
// function fun(){
//     console.log('我是一个fun函数！');
// };

// fun2();//在此处调用时会报错
// //函数表达式不会被提前创建
// var fun2 = function(){
//     console.log('我是一个fun2函数！');
// };

// var a = 123;
// console.log(a);
// var obj = {
//     name:'沙师弟',
//     age:28,
//     gender:'男',
//     address:'流沙河'
// };
// for(var n in obj){//obj有几个属性，'hello'就会执行几次
//     // console.log('hello');
//     console.log(n);//找到属性名
//     console.log(obj[n]);//取到属性值
// };

// var a = 123;
// var b = a;
// console.log(a);
// function fun(){
//     return {name:'沙和尚'};
// }
// (function(){
//     console.log('我是一个匿名函数！');
// })();//立即执行函数，函数定义结束立即被调用，往往只会执行一次
// (function(a,b){
//     console.log(a);
//     console.log(b);
// })();

//创建一个对象
// var obj = new Object();
// //向对象中添加属性
// obj.name = '孙悟空';
// obj.age = 18;
// //对象的属性值可以是个函数
// obj.sayName = function(){
//     console.log(obj.name);
// };
// console.log(obj.sayName);
// // obj.sayName();//调方法



