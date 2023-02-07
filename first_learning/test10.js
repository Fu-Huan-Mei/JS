/*2022-11-28
1、函数作用域（局部作用域）
(1)在函数作用域中，可以看到全局变量
(2)在全局作用域中无法访问到局部作用域中的变量
(3)当在函数作用域中操作变量时，会先在自身作用域中寻找，再去上一级寻找，直到找到全局作用域中，若无，则报错
(4)使用var关键字声明的变量，会在函数中所有代码执行之前被声明，函数声明会在函数中所有代码执行之前执行
2、debug
（1）
*/ 
console.log(d);

var d = 35;
console.log(d);
// var a = 10;
// function fun(){
//     var a = '我是函数中的变量a';
//     var b = 20;
//     console.log('a=',a);
// }
// fun();
// //console.log('b=',b);
// //console.log('a=',a);
// function fun2(){
//     console.log('a=',window.a);
// }
// fun2();
// 
// var c = 33;
// function fun5(){
//     console.log('c=',c);
//     c = 10;
//     //d未使用var关键字，则会成为全局变量
//     d = 100;
// }
// fun5();
// //定义形参就相当于在函数中声明变量
// var e = 23;
// function fun6(e){
//     console.log(e);
// }
// fun6();