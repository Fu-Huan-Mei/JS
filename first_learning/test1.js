//单行注释
//2022-11-17
/*
JS注释
多行注释，注释的内容不会被执行，但在源代码中可以查看
1、JS中严格区分大小写
2、JS中每条语句以分号（；）结尾
3、JS中会自动忽略多个空格和换行，所以可以进行格式化
字面量和变量
1、字面量：不可改变的量 eg:1.2.3.4
2、变量：保存字面量，变量的值可以任意改变，变量更容易使用，通过变量去保存字面量，很少使用字面量 eg:x = 1
3、变量的使用：声明变量，使用var关键字 eg:var a;为变量赋值 eg: var a = 1;生命和复制同时进行
标识符
1、再js中所有的可以有我们自己命名的都是标识符 eg:变量名、函数名、属性名
2、遵守规则：标识符中可以含有字母、数字、下划线、$；不能以数字开头；不能是JS中的关键字或保留字；
3、命名规范：采用驼峰命名法：首字母小写，其余单词首字母大写，其余字母小写neg:helloWorldOurFamily;JS标识符实际上都是UTF-8
基本数据类型：String（引号，但不能单双引号混用）、Number、Boolean、Null、Undefined、Object（引用数据类型）
*/
//var a ;
//console.log(a);
//var a = 1;
// console.log(a);
// console.log("hello world");
//alert('hello world')
//var str = 'hello';//str表示变量
//str = '哈哈哈:\n嘿\t嘿';// /n表示换行；/t 表示tab键；//表示/；
//不能使用JS对精确度要求较高的运算，但是证书没有什么问题
//var bool = true;
//console.log(bool,typeof(bool))
//var bool = false;
//console.log(bool,typeof bool)
//null专门用来表示空对象,所以检查类型为对象
//var a = null;
//console.log(a,typeof(a));
//当我们声明变量，但并不赋值时，它的值j就是undefined
//var b ;//等价于var b = undefined
//console.log(b,typeof b)
 /*
强制类型转换：只讲一个数据类型强制转换为其他的数据类型
类型转换主要指：String、Number、Boolean
1、将其他数据类型转换为string：toString()方法、String()函数、
2、将其他数据类型转换为Number：NUmber()函数、字符串：ParseInt()、parseFloat():将一个字符串中的有效整数内容读取出来、非字符串：先转为字符串，再转换位Number
3、将其他数据类型转换为Boolean,使用Boolean()函数
*/
// var a = 123;
// console.log(Boolean(a));
// a = -123;
// console.log(Boolean(a));
// a = 0;
// console.log(Boolean(a));
// a = 0.9897;
// console.log(Boolean(a));
// b = 'hhhh'
// console.log(Boolean(b));
// b = '123';
// console.log(Boolean(b));
// b = '123.0';
// console.log(Boolean(b));
// b = 'Null';
// console.log(Boolean(b));
// b = 'Undefined';
// console.log(Boolean(b));
// c = NaN;
// console.log(Boolean(C));
// var a = '123.456.78' 
// //a = a.toString()
// //a = parseFloat(a)//字符串转Number(3种情况)
// //console.log(a,typeof(a))
// var b = false
// //b =  b.toString()
// //b = Number(b)//布尔值转数字：1或2
// //b = parseInt(b)
// console.log(b,typeof(b))

// var c = null
// //c = String(c)
// //c = Number(c)//空值转数字结果为0
// console.log(c,typeof(c));
// var d = undefined;
// //d = String(d);
// //d = Number(d)//未定义转数字：结果为NaN
// console.log(d,typeof(d));
// //e = 198.23
// //e = parseInt(e)
// console.log(e,typeof(e))
//运算符
// var a = 123;
// var result = typeof a;//c先保存再输出，求a的类型，获取a的类型
// console.log(result);
// console.log(typeof a);//直接输出
// console.log(typeof result)
// var a = 123;
// b = a + 1;
// console.log(b,typeof b);
// b = a + true;//当对非Number类型的数据类型进行运算时，会先将其转换为数字，再进行运算；
// console.log(b,typeof b);
// b = a + NaN;//任何值和NaN做运算时，都得NaN
// console.log(b,typeof b);
// b = a + false;
// console.log(b,typeof b);
// b = '123' + '456';//两个字符串相加：拼串
// console.log(b,typeof b);
// b = '123' + a;//拼串
// console.log(b,typeof b);
// b = '锄禾日当午;'+ 
// '汗滴禾下土;' + 
// '谁知盘中餐;' + 
// '粒粒皆辛苦;'
// console.log(b,typeof b);
// b = '123' + 567;
// console.log(b,typeof b);
// b = '123' + true;//任何值和字符串做加法时，都会先转换为字符串，再做拼串
// console.log(b,typeof b);
// console.log(String(true))
// b = 123;
// b = b + '';//隐式类型转换：由浏览器自动完成，实际上也是调用了String()函数（常用）
// console.log(b,typeof b);
// b = 123;
// b = b.toString();
// console.log(b,typeof b);






