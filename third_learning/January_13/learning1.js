/*第一遍理解记忆：2023-1-13*/
/*函数 (Function)*/
//1、概述：函数也是一个对象；具有其他对象所有功能，可以存储代码和调用代码
// console.log("hello");
// console.log("你好！");
// console.log("萨瓦迪卡！");

//2、创建
//（1）函数声明：function 函数名/对象( ){  函数体（语句）   }
function fn(){
    console.log("函数声明！");
}
fn();
console.log(typeof fn);//function
//（2）函数表达式：const 变量名 = function( ){   语句   }
const fn2 = function(){
    console.log("函数表达式！");
}
fn2();
//（3）箭头函数：([] ) => {  语句  }
const fn3 = ( )=>{
    console.log("箭头函数！");
}
fn3();

//3、调用：
//（1）调用函数：执行函数中存储的代码
//（2）语法：函数名/对象(  )
fn();
fn2();
fn3();
//（3）注意：函数每次调用时，都会重新创建默认值
function fn2(a={name:"沙和尚"}){
    console.log("a=",a);
    a.name = "唐僧";
    console.log("a=",a);
}
fn2();//沙和尚 唐僧
fn2();//沙和尚 唐僧
let obj2 = {name:"沙和尚"};
function fn2(a=obj2){
    console.log("a=",a);
    a.name = "唐僧";
    console.log("a=",a);
}
fn2();//沙和尚 唐僧
fn2();//唐僧 唐僧

//4、检查：typeof检查函数对象时，会返回function
console.log(typeof fn);//function

//5、参数：任何值
//（1）分类：
//形式参数：在定义函数时，可以在函数的（）中指定数量不等的参数;在函数中定义参数就相当于在函数内部声明了对应的变量但没赋值
function fn4(a){
    console.log(a);
}
fn4();
//实际参数：在调用函数时，可以在函数的（）中传递数量不等的实参
function fn4(a,b){
    console.log(a);
}
fn4(1,2);
//（2）数量分配情况：
//情况一：如果实参和形参数量相同，则对应的实参会赋值给对应的形参
function fn4(a,b)/*形参a b*/{
    console.log(a);
}
fn4(1,2);//实参1和2
//情况二：如果实参多于形参，则多余的实参不会使用
function fn4(a){//a =1
    console.log(a);
}
fn4(1,2);
//情况三：如果形参多余实参，则多余的形参为undefined
function fn4(a,b,c){//a =1 b=2 c=undefined
    console.log(a);
}
//箭头函数
fn4(1,2);
const fn5 = (a,b)=>{
   console.log(a,b); 
}
//情况四：当箭头函数中只有一个形参时，可以省略（）
const fn6 = (a) =>{
    console.log("a=",a);
}
fn6(123);
//（3）默认值：定义参数时，可以为形参指定默认值，会在没有对应实参时生效
const fn7 = (a=10,b=20,c=30) =>{
    console.log("a=",a);
    console.log("b=",b);
    console.log("c=",c);
}
fn7(1,2,3);
//（4）对象：也可以作为实参传递，传递的是变量的内存地址
function fn(a){
    a = {};//修改变量时，只会影响当前变量 obj不受影响
    console.log("a=",a);
    a.name = "猪八戒";//修改对象时，如果有其它变量指向该对象，则所有指向该对象的变量都会受到影响  obj会受影响
}
//对象可以作为参数传递
let obj = {name:"Bob"};
fn(obj);//传递实参时并不是变量本身，而是变量中存储的值（内存地址）
console.log(obj);
//（5）函数：作为参数（一等对象/函数）
function f(a){
    console.log("a=",a);
}
//在JS中，函数也是一个对象
f(123);//123
function f1(){
    console.log("我是f1");
}
f(f1);//将函数f1作为参数传递给f函数,动态传递代码
f(function(){
    console.log("我是匿名函数！")
});
f(()=>console.log("我是箭头函数！"))
//练习：定义一个函数可以求任意两个数的和
function sum(a,b){
    console.log(a + b);
}
sum(1,1);
const sum2 = function(){
    console.log(1+1);
}
sum2();
