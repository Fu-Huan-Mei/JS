//2022-11-18
/*
进制：16进制（以0x开头）、8进制（以0开头）、2进制（以0b开头）

*/
// var a = 0x10;
// console.log(a);
// b = 0b10;
// console.log(b);
// c = 08;
// console.log(c);
// d = '070';
// console.log(parseInt(d,8))
// var a = 123;
// console.log('a='+ a)//拼串
// b = 2 * 8; 
// console.log(b,typeof b);
// b = 3 * NaN;
// console.log(b,typeof b);
// b = 7 * 'kkkkkk';
// console.log(b,typeof b);
// b = '123';
// b = Number(b);
// b = b - 0;//可以利用这一特点做隐式类型转换：可以通过为一个值：-0、*1、/1来将其转换为Number，原理同Number()函数转换（了解）
// console.log(b,typeof b);
//取模（取余）
// b = 1090 % 5;
// console.log(b,typeof b);
// b = 9 % 4;
// console.log(b,typeof b);
// b = null % 3;//null转换为数字时的结果为：0
// console.log(b,typeof b);
//一元运算符
// 自增（后++和前++）：无论是哪一种，都会立即使原变量的值自增1；不同的是2者值不同：a++的值自增以前的值(原变量的值)，++a的值是原变量自增后的值
//自减：通过自减可以使变量在自身的基础上-1；两中：a-- 和 --a：都会使a自减1；不同的是二者的值不同：a--是变量的原值，自减以前的值；--a是自减以后的值
// 练习：自减和自增
// var n1= 10;
// n2 = 20;
// n = n1++;
// console.log('n='+n);//10
// console.log('n1='+n1);//11(立刻自增1)
// n = ++n1;
// console.log('n='+n);//12
// console.log('n1='+n1);//12
// n = n2--;
// console.log('n='+n);//20
// console.log('n1='+n2);//19
// n = --n2;
// console.log('n='+n);//18
// console.log('n1='+n2);//18
// var a = 10;
// a = !a;//取反操作'
// console.log('a='+a);
// var a = true && true;//&&一假则假，全真才真，找假：如果第一个值为true，则继续找第二个值
// console.log('a='+a);
// var a = true && false;
// console.log('a='+a);
// var a = false && false;
// console.log('a='+a);
var a = 1 && 2;
console.log('a='+a);
//||或运算：一真则真，全假才假，找真：如果第一个值为true,则不会检查第二个值
var a = 1 || 2;
console.log('a='+a);
var a = 123 && true;
console.log('a='+a);
var a = 123 || true;
console.log('a='+a);
