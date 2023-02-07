/*2022-12-7
1、字符串和正则表达式相关方法
2、正则表达式
3、DOM
*/ 
// var str = '1a2b3c4d5e6f';
// // var res = str.split('c');
// var res = str.split(/[a-f]/);//根据任意字母来将字符串拆分
// console.log(res);
// var str = 'hello abc hello abc';
// // var res = str.search('abc');
// //搜索字符串中是否含有abc、hello
// var res = str.search(/abc|h/);
// console.log('res=',res);
// var str = '1AAAa2b3c4d5e6f7';
// var res = str.match(/[a-f]/gi);
// console.log(Array.isArray(res));
// console.log('res=',res);
// var str = '1AAAa2b3c4d5e6f7';
// var res = str.replace(/[a-f]/gi,'');
// console.log('res=',res);
// 创建一个正则来检查一个字符串中是否含有aaa
// var reg = /a{3}/;
// console.log(reg.test('aaa'));
// var reg = /ab{3}/;
// console.log(reg.test('bbb'));
// // var reg = /a{4}b{3}/;
// // console.log(reg.test('aaaabbb'));
// // console.log(reg.test('abbb'));
// // var reg = /a{1,3}/;
// console.log(reg.test('aaa'));
// var reg = /ab+c/;
// console.log(reg.test('abcabcabc'));
// var reg = /ab*c/
// console.log(reg.test('abcabcabc'));
// var reg = /ab?c/;
// console.log(reg.test('abcabcabc'));
// var reg = /^a$/;
// console.log(reg.test('abca'));
// var reg = /^a|a$/;
// console.log(reg.test('abc'));
//检查手机号码是否正确：手机号规则：一共11位，第一位是1，第二位是3~9任意数字，第三位以后是任意数字（共9个）
// var reg = /^1[3-9][0-9]{9}$/
// var tele = '110789012343';
// console.log(reg.test(tele));
//检查一个字符串中是否含有.
// var reg = /\./;
// console.log(reg.test('jjj'));
//去掉字符串中的空格
// var str = '           ad   min    ';
// //去除空格就是使用''来替换空格
// str = str.replace(/\s/g,"");
// console.log(str);
// //去除开头的空格
// str = str.replace(/^\s*/,"");
// console.log(str);
// //去除结尾的空格
// str = str.replace(/\s*$/,"");
// console.log(str);
// //整合上述:匹配开头和结尾的空格
// str = str.replace(/^\s* | \s*$/g,"");
// console.log(str);
//邮件正则表达式
// var mail = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-Z]{2,5}){1,2}$/;
// var e = '3533643117@qq.com';
// console.log(mail.test(e));


