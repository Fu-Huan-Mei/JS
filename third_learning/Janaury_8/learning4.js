 /*2023-1-10：第一遍：理解记忆*/
/*变量的内存结构*/
let a = "哈哈";
console.log(a);
//1、内存：存储数据
//2、变量中，并不存储任何值，而是存储内存地址
let b = "哈哈";
console.log(b);

/*常量*/
//1、含义：不可改变的量
//2、声明：使用const声明常量，只能赋值一次，重复赋值会报错
const PI = 123;
console.log(PI);

/*标识符*/
//1、含义：在JS中，所有由我们 自主命名 的内容  eg:变量名、函数名、类名......*/
//2、命名规范：
//（1）只能含有字母 数字 下划线 $，但不能以数字开头
let age = 10;
console.log(age);
let $age = 20;
console.log($age);
_years_old = 30;
console.log(_years_old);
//（2）不能是JS中的关键字和保留字,不建议使用内置的函数或类名作为变量名
let alert = "警告";
console.log(alert);
//3、命名方法：
//（1）驼峰命名法：首个单词的首字母小写，其余单词开头大写  eg:maxLength
//（2）大驼峰命名法：每个单词的首字母大写   eg:MaxLenghth
//（3）常量的字母会全部大写   eg:const PI = 123;





