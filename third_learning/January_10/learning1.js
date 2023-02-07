/*2023-1-10：第一遍：理解记忆*/
/*类型转换：将一种数据类型转换为其他类型*/
let a = 10;
//console.log(a,typeof a);

/*转换为字符串*/
//强制类型转换：1、调用xxx的toString()方法：XXX.toString()
a = a.toString();//创建字符串
//console.log(a,typeof a);
//由于Null和undefined没有toString(),所以调用函数时会报错
//强制类型转换：2、调用String()函数:String(xxx)
let b = null;
b = String(b);
//console.log(b,typeof b);//对于null，则直接转换为"null"
b = undefined ;
b = String(b);
//console.log(b,typeof b);//对于undefined，则直接转换为"undefined"
let c = true;
//console.log(c,typeof  c);
c = String(c);
//console.log(c,typeof  c);
//3、隐式类型转换
//（1）拼串:+
//（2）""

/*转换为数字（数值）*/ 
//1、任何类型：使用Number()函数：Number(XXX)
a = "123";
a = Number(a);
//console.log(a,typeof a);
//2、转换情况：
//（1）字符串：如果字符串是合法数字,则转换为相应的数字
a = "3.14";
a = Number(a);
//console.log(a,typeof a);
//（2）字符串：如果字符串是非法数字,则转换为NaN
a = "11px";
a = Number(a);
//console.log(a,typeof a);
//(3) 字符串：如果字符串是空串或纯空格的字符串，则转换为0
a = "";//空串
a = Number(a);
//console.log(a,typeof a);
a = "            ";//纯空格的字符串
a = Number(a);
//console.log(a,typeof a);
//（4）布尔值：true转换为1，false转换为0
//（5）null转为0
//（6）undefined专为NaN
//3、特殊情况：将字符串转为数值
//（1）parseInt()将字符串转为整数:会自左向右读取一个字符串，直接读取到字符串中所有有效整数；取整
a = "123px";
a = parseInt(a);
//console.log(a,typeof a);
a = "12334.89ass";
a = parseInt(a);
// console.log(a,typeof a);
a = parseFloat(a);
//console.log(a,typeof a);
//（2）parseFloat()将字符串转为浮点数
a = "123.4556";
a = parseFloat(a);
//console.log(a,typeof a);
b = 456.123;
b = parseInt(b);
//console.log(b,typeof b);
//4、隐式转换：+

/*转换为布尔值：true和false*/
//1、显式转换：使用Boolean()函数  隐式转换：！！
a = 1;
a = Boolean(a);
console.log(a);
//2、转换情况:所有表示空性的/错误的值都会转为false：0和NaN 空串 Null和Undefined false 
//（1）数字/值:0和NaN转换为false,其余是true
a = 0;
a = Boolean(a);
console.log(a);
a = null;
a = Boolean(a);
console.log(a);
a = Infinity;
a = NaN;
//（2）字符串:空串转为false，其余是true
a = "a";
a = Boolean(a);
console.log(a);
//（3）null和undefined都会转换为false
//（4）对象：转为true

