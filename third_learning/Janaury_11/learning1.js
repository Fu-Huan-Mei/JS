/*2023-1-11：第一遍理解记忆*/
/*关系运算符：检查两个值之间的关系是否成立：成立返回true,不成立则返回false*/
//1、内容：> >= < <=
let r = 19 > 11;
//console.log(r);//true
//2、注意：
//（1）非数值：当对两个非数值进行关系运算时，会先将其转换为数值再比较
r = "1" > 10;
//console.log(r);//false
//（2）字符串：当关系运算符的两端是两个字符串时，不会将字符串转为数值，而是逐位比较Unicode编码;可以利用该特点对字符串按照字母排序
r = "11" > "10";
//console.log(r);//true
r = "abc" < "b";
//console.log(r);//true
r = "12" < "2";
//console.log(r);//true  只比较了"1"和"2"
//检查num是否在5和10之间
let num = 6;
//错误写法
r = 5 < num < 10;//先判断5<num，再判断num<10
//正确写法
r = num > 5 && num < 10;
console.log(r);//true

