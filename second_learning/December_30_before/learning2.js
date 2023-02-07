/*2022-12-15
1、一元运算符：正号 负号 使用+号将其他数据类型转换为number
2、自增：后加加：a++=原变量的值/自增前的值和前加加:++a=原变量新值/自增后的值,都会立即使原变量自增1；
3、自减：变量在自身基础上-1,a--和--a
4、逻辑运算符：! && ||
取反（！）：非布尔值运算：先转换为布尔值，在进行取反;
&&(与)：对符号两侧布尔值进行与运算并返回原值：一假则假,短路的与，找true
||(或)：找false；非布尔值：与 或 运算，先转换为布尔值，再进行运算
5、赋值运算符
（1）=：将符号右侧的值赋给左侧变量
（2）+=:a += 1 a = a+1
（3）-=：
6、关系运算符：比较两个值之间的
（1）>：返回true or false
（2）>=：大于或等于
（3）<=：小于或等于
（4）非数值：先转换为数值，再进行比较
（5）任何值和NaN做比较，都是false
（6）比较两个字符串时，比较的是unicode编码，一位一位进行比较，
如果比较两位一样，则比较下一位，所以借用此来对英文进行排序
（7）在JS使用转义字符输出unicode编码:\uxxxx;
（8）在网页中输出编码：&#编码，注意转换进制
7、相等运算符：== ，使用==比较两个值时，如果类型不等，则先进行类型转换，再进行比较
8、undefined衍生自null，所以二者相等
NaN不和任何值相等，包括它本身
isNaN()函数：判断一个值是否为NaN:是则返回true，否则返回false
!=：两个值是否不相等，如果不相等返回true，相等返回false；自动进行类型转换，转换后相等返回false
=== ：全等，和相等类似，但是不会做自动类型转换,如果两值类型不同，直接返回true
!==：不全等，不会做自动类型转换，如果两值类型不同，直接返回true
9、条件运算符（三元运算符）
语法：条件表达式 ？语句1：语句2；
执行流程：先对条件表达式进行求值：如果该值为true，则执行语句1，并返回执行结果；
如果该值为false，则执行语句2，并返回执行结果
使用（）改变优先级
10、语句（statement）:自上而下顺序一条一条执行，使用{}为语句分组，一个{}中语句也称一个代码块，再代码块后边补写分号
11、代码块：只具有分组作用，无其他用途
12、流程控制语句：JS程序执行：自上而下一行一行执行
13、语句的分类
（1）条件分支语句
（2）条件判断语句
（3）循环语句
14、条件判断语句
（1）含义：
（2）语法：
if(条件表达式)
    语句
（3）执行流程：先对条件表达式进行求值判断：true,执行语句；false，不会执行；
if语句只会控制紧随其后地语句，如果希望控制多条语句，则加上{}即可控制多条语句

*/
var a = 14;
if(a > 10 && a <= 20){
    console.log('a大于10且小于等于20');
}
// var a = 20;
// if(a > 10)
//     console.log('a大于0');
// console.log("hello");
//比较三个数的最大值
// var a = 10;
// var b = 2;
// var c = 5;
// max = a > b ?a : b
// console.log(max);
// max = b > c?b : c;
// console.log(max);
// a > b?console.log('a大'):console.log('b大');
// true?console.log('语句1'):console.log('语句2');
// // console.log(null === undefined);
// console.log("123" === 123);
// // console.log("abcd" != "abcd");
// // console.log(1 != 1);
// console.log(null == 0);
// console.log(1 == 1);
// console.log(true == 1);
// console.log("\u2620");

// var r = 1 > NaN;
// console.log(r);
// console.log("abc" < "ab");
// console.log("c" < "");
// var r = 2;
// r += 2;
// console.log(r);
// var r = NaN && null;
// console.log(r);
// var r = 0 && 2;
// console.log(r);
// var r = 0 || 2;
// console.log(r);
// var r = "你看我出不出来"&&true;
// console.log(r);
// var r = true || "你看我出不出来";
// console.log(r);
// var r = true&&"你看我出不出来";
// console.log(r);
// var a = true && null;
// console.log(a);
// var r = true||false;
// console.log(r);
// // var b = 10;
// b = !!b;
// console.log('b=',b);
// var a = true;
// a = !!a;
// console.log('a=',a);
// var num = 10;
// console.log(num--);
// num--;
// console.log(num);
// var c= 10;
// c++;
// console.log(c++);
// c++;
// console.log(c++);
// var a = 1;
// console.log(a++);
// a = a++;
// console.log(a);
// console.log(++a);
// // var a = 1;
// // //变量立即自增1
// a++;
// console.log(a);
// var b = "hello";
// b = +b;
// console.log(b,typeof b );