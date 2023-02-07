/*2022-12-28
1、正则表达式
（1）简介：定义字符串的一些规则，计算机考研根据正则表达式来检查一个字符串是否符合规则，获取负责规则的内容
（2）创建：语法：var 变量 = /正则表达式/匹配模式
（3）量词：设置一个内容出现的次数
{n}正好出现n次 {m,n}出现m-n次 {n,}至少出现n次以上 
+表示至少一个  *表示0个或多个  ?表示0个或1个  ^表示开头/^a/  $表示结尾/a$/  
同时使用^和$，则必须完全符合正则表达式 
（4）语法
.表示查找单个字符，除了换行和行结束符，即任意字符
（5）转义字符：\.表示.  \\表示\  
*/
// \w  查找任意字母、数字、下划线  [A-z0-9_]

// \W	查找非单词字符。[^A-z0-9_]
// \d	查找数字。[0-9]
// \D	查找非数字字符。[^0-9]
// \s	查找空白字符。
var str = str.repalce(/^\s*|\s*$/g,'');//匹配开头或结尾的空格
// \S	查找非空白字符，除了空格
// \b	匹配单词边界。
// var reg = /\bchild\b/;//独立单词，不包含其他字母
// console.log(reg.test('childwngratt'));
// console.log(reg.test('hellochildren'));
// console.log(reg.test('child'));


// \B	匹配非单词边界。
// \0	查找 NUL 字符。
// \n	查找换行符。
// \f	查找换页符。
// \r	查找回车符。
// \t	查找制表符。
// \v	查找垂直制表符。
// \xxx	查找以八进制数 xxx 规定的字符。
// \xdd	查找以十六进制数 dd 规定的字符。
// \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
 
// var reg = /\./;
// var r = 'a.b.cd';
// console.log(reg.test(r));
//创建一个正则表达书，检查一个字符串是否是一个合法的手机号
/*手机号的规则（11位）：
第一位：以1开头   ^1
第二位：不能是0 1 2    [3-9]
第三位以后任意数，但是长度是9    [0-9]{9}$  
*/
// var phoneReg = /^1[3-9][0-9]{9}$/;
// var phoneStr = '13278617321';
// console.log(phoneReg.test(phoneStr));
// var reg = /./;
// console.log(reg.test('!!!!'));

// var reg = /a{3}/;
// console.log(reg.test('aaa'));
// var reg = /ab{3}c/;
// console.log(reg.test('abbbc'));
// var reg = /(abd){3}/;
// console.log(reg.test("abdabdabd"));
// var reg = /a{3,}/;
// console.log(reg.test('aaaa'));

//如何让计算机来检查电子邮件？？
/*邮件的规则：
1、 */
//使用构造函数创建正则表达式:参数：2个：正则表达式，匹配模式(i表示忽略大小写；g表示全局匹配模式)
// var reg = new RegExp('a');//该正则表达式用来检查一个字符串中是否含有a
// var str = 'a';
// var r = reg.test(str);
// //正则表达式的测试：test()
// console.log(r);

// var str = 'abdcjukklpp';
// var r = reg.test(str);
// console.log(r);
//使用字面量来创建正则表达式：语法var 变量 =/正则表达式/匹配模式
// var reg = /a|b/;
// console.log(reg.test('abcd'));
// var reg = /[abcdefg]/;
// console.log(reg.test('abcd'));
/*
1、[]里的内容也是或关系*/ 
// var str = '1a2b3c4d5e6f7A8B9C';
// var r = str.split(/[a-z]/);//
// console.log(r);
// // var r = str.match(/[a-z]/ig);
// console.log(r);
// console.log(r[2]);
/*repalce()方法表示替换：将字符串中指定内容替换为新的内容；参数：被替换的内容、新的内容 */
// var r = str.replace(/[a-z]/gi,'');//空串时替换后全是字母
// console.log(r);


