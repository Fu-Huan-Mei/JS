/*2022-12-5
1、call( )
2、apply( )
3、调用函数时，浏览器每次都会传递2个隐含的参数：函数的上下文都西昂this；封装实参的对象arguments
4、arguments是一个类数组对象，可以通过索引来操作数据，也可以获取长度；在调用函数时，我们所传递的实参都会在arguments中保存;
arguments.length获取实参的长度；即使不定义形参，也可以通过arguments来使用实参，arguments[0]表示第一个实参；
它里面有一个属性叫做callee,这个属性对应一个函数，就是当前正在执行的函数对象
5、Date对象

*/ 
//创建一个Date对象
//如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间
var d = new Date();
console.log(d);
var d2 = new Date('12/03/2022 11:10:22');
console.log(d2);



// function fun(){
//     // console.log(arguments instanceof Array);
//     // //检查arguments是否是一个数组
//     // console.log(Array.isArray(arguments));
//     // console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments.callee == fun);
//     }
// fun();


// function fun(){
//     console.log(this.name);
// }
// var obj = {name:'hhh' };
// var obj2 = {name:'hello' };

// fun.call(obj,2,3);
// fun.apply(obj2,[2,3]);
