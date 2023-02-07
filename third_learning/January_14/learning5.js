/*第一遍理解记忆：2023-1-14*/
/*debug：作用：调试代码*/
//1、debugger/直接点击代码的断点：在代码中打断点
// debugger;//代码会停止


/*立即执行函数*/
//1、在开发中，应该尽量减少直接在全局作用域中编写代码,所以代码要编写到局部作用域中，不会互相干扰
var a = 10;
var a = 20;
//2、如果只用let声明变量，可以使用{}来创建块作用域
{
    let a = 10;
}
{
    let a = 20;
}
function fn(){
    var a = 10;
}

function fn2(){
    var a = 20;
}
//3、希望创建一个只执行一次的匿名函数
(function(){
    let a = 10;
})//函数以（）开头
//调用匿名函数
// (function(){
//     let a = 10;
// })();
//4、立即执行函数(IIFE)：匿名函数，只会调用一次；可以利用IIFE创建一个一次性的函数作用域，避免变量冲突
(function(){
    let a = 10;
    console.log(a);
}());
(function(){
    let a = 20;
    console.log(a);
}());