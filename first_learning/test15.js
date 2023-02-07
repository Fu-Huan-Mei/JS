/*2022-12-6
1、Math
2、包装类
3、string（）对象的方法
4、正则表达式
5、
*/
var reg = /a|b|c/;
console.log(reg.test('a'));
var reg = /[abcdefg]/;
console.log(reg.test('a'));
var reg = /[A-Z]/;
console.log(reg.test('a'));
var reg = /abc|adc|aec/;
console.log(reg.test('abc'));
reg = /[^ab]/;
console.log(reg.test('ab'))
// console.log(reg,typeof reg);
// console.log(reg.test('abc'));
// var reg = new RegExp('a','i');
// //var str = 'b';
// // console.log(reg,typeof(reg))
// console.log(reg.test('b'));
// // 
// 
// // console.log(Math.ceil(1.1));
// console.log(Math.round(Math.random()*10));
// var num = new Number(3);
// //向对象中添加属性
// num.hello = 'abcd';
// console.log(num.hello);
// //向数值中添加属性
// var a = 3;
// a.hello = 'abc'
// console.log(a.hello);
// console.log(num,typeof(num));
// var str = new String('hello');
// console.log(str,typeof(str));
// var bool = new Boolean('hello');
// console.log(bool,typeof(bool));
// var bool = new Boolean(true);
// var bool1 = true;
// console.log(bool == bool1);
// var s = 123;
// s = s.toString( );
// s.hello = '123'//临时转为对象
// console.log(s.hello);//临时转为对象；但基本数据类型不可以保存这个属性
// console.log(s,typeof(s));
// var str = 'hello nihao';
// console.log(str.length);
// console.log(str[2]);
// console.log(str.charAt(6));
// console.log(str.charCodeAt(1));
// console.log(String.fromCharCode(0x2682));
// str = 'hello world';
// console.log(str.split('e'));
// console.log(str.toLowerCase());
// // console.log(str.indexOf('e'));
// // console.log(str.lastIndexOf('l'));
// console.log(str.lastIndexOf('l',2));
// console.log(str.slice(1,2));
// console.log(str.substring(1,2));
// console.log(str.substr(1,2));