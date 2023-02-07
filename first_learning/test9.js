//2022-11-25
/*
1、return 返回值:return 变量;如果return不跟任何值或不写return，则返回undefined；可以返回任意类型的值
2、实参可以是任何值
3、返回值可以是任意数据类型
4、立即执行函数：
5、枚举对象中的属性
(1)有几个属性，循环体就会执行几次：使用for in 语句；每次执行时，会将对象中属性的名字赋值给变
6、作用域：一个变量的作用范围
(1)全局作用域：直接编写在script标签中的JS代码，都在全局作用域；全局作用域再页面打开时创建，关闭时销毁；
在全局作用域中有一个全局对象window，代表浏览器的窗口，由浏览器创建，我们可以直接使用，我们创建对象都会作为window的属性保存,创建的函数会作为window的方法保存
变量的声明提前：使用var关键字声明的变量，会在所有代码执行之前执行，但是如果不用var关键字，则变量不会被声明提前
函数的声明提前：使用函数声明形式创建的函数，会在所有代码执行之前执行被创建，所以我们可以在函数声明前来调用函数
在页面每一部分都可以访问到，范围较广
(2)局部作用域（小全局作用域）：调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁,每调用一次就会创建一个新的函数作用域，他们之间相互独立；在函数作用域中，可以访问到全局作用域中的变量；
但是不能在全局作用域中访问到函数作用域中的变量;在函数作用域中操作一个变量时，会先在自身作用域中寻找，如果有就直接使用，没有则向上一级作用域中寻找；如果全局作用中也没有，会报错
就近原则,
声明提前：使用var关键字声明的变量，会在函数中所有代码执行之前被声明，函数声明也会在函数中所有代码执行之前被执行（调用）
不适用var的变量，就是全局变量
形参就相当于在函数作用域中声明了变量
*/
function fun5(a){
    console.log(a);
}
fun5();
// var c = 33;
// function fun5(){
//     console.log('c=',c);
//     c = 10;//全局的c
//     var c = 10;//局部的c
// }
// fun5();
// console.log('c=',c);
//var a = 10;
// function fun(){
//     //封闭区域
//     var a = '我是fun2函数中的a'
//     var b = 20;
//     //console.log('a=',a);
//     function fun2(){
//         console.log('a=',a)
//     }
//     fun2();
// }
// //console.log('a=',a);//first
// fun()
//second
//console.log('b=',b)
// console.log('a=',a);
// var a = 123;
// console.log('a=',a);
//fun();
//fun2();
//函数声明形式创建的函数
// function fun(){
//     console.log('我是fun函数');
// }
// //使用函数表达式创建的函数
// var fun2 = function(){
//     console.log('我是fun2函数');
// }
//构造函数
// console.log(fun);
// var fun = new function(){}
//console.log(fun);
//fun2();
// function fun(){
//     var a = 123;
// }
// fun();
// var b = 123;
// //console.log(window.b);
// function fun(){
//     console.log('我是fun函数');
// }
// fun();

// var obj={
//     name:'孙悟空',
//     age:18,
//     gender:'男',
//     address:'花果山'
// };
// for(var a in obj){
//     //a表示属性名
//     //console.log(a);
//     //可以传递变量，找到属性值
//     console.log('属性名=',a,'属性值=',obj[a]);
// };
//创建一个对象
// var obj = new Object();
// //向函数中添加属性
// obj.name = '哈哈哈';
// obj.age = 18;
// //对象的属性值可以是任意数据类型，也可以是个函数
// obj.sayName = function(){
//     console.log(obj.name);
// };
// function fun(){
//     console.log(obj.name);
// };
// //调用函数：函数对象（）
// //函数也可以成为对象的属性，如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法：调用这个函数就说调用对象的方法，但是只是名称上的区别
// //sayName就是obj的方法
// //调方法(不怎么懂)
// obj.sayName();
// //调函数(不怎么懂)
// fun()
// //document.write()
// var obj2 = {
//     name:'小石头',
//     age:13,
//     gender:'男',
//     sayName:function(){
//         console.log(obj2.name);
//     }
// }
//console.log(obj.sayName);
//只想调用一次
// var fun = function(){
//     console.log('我是一个匿名函数');
// }
//函数对象（），立即执行函数：函数定义完，立即被调用
//立即执行函数：往往只会执行一次，没有变量取保存
// (function(){
//     console.log('我是一个匿名函数');
// })();
// (function(a,b){
//     console.log('a=',a);
//     console.log('b=',b);
// })(123,456);
// //创建函数
// function sum(a,b,c){
//     var sum = a + b + c;
//     return sum;
// }
// //调用函数
// var result = sum(1,2,3);
// console.log(result);
// function even(num){ 
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// var result = even(3);
// console.log('result=',result) 
//简单
// function even(num){ return num % 2 == 0;
// }
// var result = even(3);
// console.log('result=',result) 
//定义一个圆的面积的函数：根据半径来计算圆的面积，并返回计算结果
//size()调用函数，相当于使用函数返回值
//size函数对象，相当于直接使用函数对象
// function size(r){
//     console.log(3.14 * r * r);
// }
// size (10);

// function fun(b){
//         console.log('b=',b)
        
//     }
//     //实参也可以是一个函数
//     fun(size);
//     fun(size());
//创建一个函数：可以在控制台中输出一个人的信息
// function person(a){
//     console.log('a=',a);
// }
//person('猪八戒',18,'女','高老庄');
//创建一个对象:参数过多时，参数可以装在一个对象中，通过对象传递
// var obj = {
//     name:'孙悟空',
//     age:28,
//     gender:'男',
//     address:'花果山'
// };
// person(obj);
//  /*实参可以是一个对象，也可以是一个函数*/
// function fun(b){
//     //console.log('b=',b)
//     b(obj)
// }
// //实参也可以是一个函数
// fun(person);
// function fun2(){
//     //返回一个对象
//     var obj = {'沙和尚':'男'}
//     return obj;
//     //返回值可以是任意数据类型
// }
// var a = fun2();
// console.log(a);
// //在函数内部还可以再声明函数（无限声明函数）
// function fun3(){
//     function fun4(){
//         console.log('我是fun4');
//     }
//     //将函数对象作为返回值返回
//     return fun4;
//     //将函数fun4的返回值作为返回值返回，但是未定义
//     //return fun4();
// }
// a = fun3();
// console.log(a);
// a();
// fun3()()