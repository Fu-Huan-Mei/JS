 /*2023-1-11：第一遍理解记忆*/
/*代码块：{}*/
//1、创建：{}，为代码分组;同一组代码块，要么都执行，要么都不执行
{
let a = 10;
console.log(123);
}
{
console.log("哈哈哈");
console.log("嘻嘻嘻");
}
//2、let和var：
//（1）let：声明的变量具有块作用域，在代码块中声明的变量无法在代码块的外部访问
{let a = 10;}
console.log(a);//报错：访问不到
//（2）var：声明的变量不具有块作用域，在代码块中声明的变量可以在代码块的外部访问
{var a = 10;}
console.log(a);//10