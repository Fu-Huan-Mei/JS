/*正则表达式-对象*/
//1、含义：定义一个规则
//2、作用：检查字符串是否符合规则，或将字符串中符合规则的内容提取出来
//3、本质：JS中的对象，先创建正则表达式的对象
//4、创建：
//（1）通过构造函数创建正则表达式对象
//参数（字符串）：正则表达式 匹配模式
let reg = new RegExp("a","i");
console.log(reg);///a/i
//（2）使用字面量来创建正则表达式：/正则/匹配模式
reg = /a/i;
console.log(reg);///a/i
reg = new RegExp("\\w");
console.log(reg);///\w/
reg = /\w/;
console.log(reg);///\w/
//比如：通过一个正则表达式检查一个字符串是否符合规则
reg = new RegExp("a");//检查字符串中是否含有a
let str = "a";
//5、方法：test()方法：检查一个字符串是否符合正则表达式的规则，如果复合则返回true，否则返回false
r = reg.test(str);
console.log(r);//true
str1 = "b";
r1 = reg.test(str1);
console.log(r1);//false