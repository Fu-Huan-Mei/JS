/*第一遍理解记忆：2023-1-14*/
/*window对象 */
//1、概述：在浏览器中，浏览器为我们提供了一个window对象，可以直接访问；window对象代表浏览器的窗口
//2、作用：
//（1）对浏览器窗口进行各种操作；
//（2）存储JS中内置对象和浏览器的宿主对象
console.log("window");//内置对象
Number();//宿主对象
//3、访问：window对象的属性可以通过window对象访问，也可以直接访问
// window.console.log(123);
console.log(123);
//4、注意：向window对象中添加的属性会自动成为全局变量
// window.a = 10;//相当于a = 10;
a = 10;
console.log(a);//10
//5、声明变量
//（1）var：声明变量，但是var不具有块作用域；在全局中使用var声明的变量，都会作为window对象的属性保存
var b = 20;//window.b = 20;
console.log(b);//20
//（2）let：声明变量，在全局中使用let声明的变量不会存储在window
//6、使用function声明的函数，都会作为window的方法保存
function fn(){
    console.log("我是fn");
}
fn();//相当于window.fn()调方法
function fn2(){
    let c = 10;
    var d = 20;//var虽然没有块作用域，但有函数作用域
     d = 30;//在局部作用域中，如果没有使用var或let声明变量，则变量会自动成为window对象的属性即全局变量
}
fn2();
// console.log(c);//报错
console.log(d);