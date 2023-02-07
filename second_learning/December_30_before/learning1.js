/*2022-12-14
1、计算机语言：
2、JS前端包括3部分：ECMAScript(标准) DOM(网页对象) BOM(浏览器对象模型)
3、JS代码编写位置：alert先执行，console.log后执行
4、JS代码执行顺序：自上而下执行
5、JS中的语法
（1）注释：单/多
（2）严格区分大小写
（3）JS中的每一条语句都是以分号结尾，如果不写分号，则浏览器会自动添加，但是会消耗一些系统资源，偶尔会加措分号
（4）字面量：不可改变的值，可以直接使用
（5）变量：可以保存字面量,可以保存字面量，使用var关键字来声明变量
（6）标识符：在JS中可以由我们自主命名的都可以成为标识符，命名标识符时，遵守如下规则：
标识符中还有字母 数字 下划线 $，不能以数字开头，不能是ES中的关键字或保留字，采用驼峰命名法（首字母小写，每个单词开头字母大写，其余字母小写）
（7）JS底层保存的都是Unicode编码，UTF-8万国码
6、数据类型：字面量的类型（6种）
(1)String：使用引号引起来,单/双都欧克,但不能混用;使用\作为转义字符，表示一些特殊符号时，可以使用\进行转义,区分字符串和变量  
(2)Number：所有数值都是Number类型，包括浮点数（小数）和整数,NaN表示not a number，整数运算基本可以保证精确度,但是浮点数运算不能把确保精确度
(3)Boolean:true false
(4)Null:null，表示空对象，使用typeof检查空的对象会返回object
(5)Undefined:undefined，表示未定义，当声明变量并未赋值时，会返回undefined
(6)Object对象：引用数据类型
7、typeof 变量：检查变量的类型
8、强制类型转换：将一个数据类型强制转换为其他的数据类型(String Number Boolean)
（1）将其他数据类型转换为string：
第一种：调用被转换数据类型的toString方法：被转换类型.toString()，该方法不会改变原变量的值，但会将转换结果返回
第二种：但是注意：null和undefined这两个值没有toString方法，可以调用String( )函数，将null转换为字符串null，将undefined转换为字符串undefined
（2）将其他数据类型转换为Number:
第一种：Number( )函数：
字符串转数字：纯数字字符串：直接将其转换为数字、非数字内容字符串+undefined转为数字时N：转为NaN
字符串时空串或全是空格的字符串+null转为数字：则转换为0
true:1  false:0
第二种：parseInt()函数:获取整数位、 parseFloat()函数：获取有效小数位，对于非String使用，会先将其转换为String，然后再进行操作
16进制：以0x开头;8进制：以0开头;2进制：0b开头;
（3）将其他数据类型转换为Boolean:调用Boolean()函数:数字情况：除了0和NaN，其余都是true;
字符串转布尔：除了空串，其余都是字符串；null和Undefined都是false；对象也会转为true
9、算数运算符（运算符：操作符，通过运算符，可以对一个或多个值进行运算,并获取运算结果 eg:typeof可以获得一个值的类型,返回一个字符串）
（1）算术运算符：+  任何值做- * / //  %取模（取余）  
（2）对非数字类型的值进行运算时，会先将其转换为数字（除了字符串加法），再进行运算；任何值和NaN做运算，都是NaN
（3）拼串：2个字符串相加;任何值和字符串做加法运算时，都会先将数字转为字符串，再拼串；
（4）转为字符串：为任意数据类型加上空串，就可以转换为字符串（隐式类型转换）
*/
console.log("c=",2);
// var v = "";
// var a = 123;
// var a = 12;
// var b = '1';
// result = a + b;
// console.log(result);
// // var a = 123;
// // var b = undefined;
// var result = a + b;
// console.log(result);
// var a = 123;
// var b = null;
// var result = a + b;
// console.log(result);
// var a = 123;
// var b = 456;
// var result = a + b;
// console.log(result);
// var a = true;
// var b = 1;
// var result = a + b;
// console.log(result);
// var result = typeof a;
// console.log(result,typeof result);

// var a = 123;
// a = Boolean(a);
// console.log(a);
// var num = 0b10;
// console.log(num);
// var num = 0x10;
// console.log(num);
// var num = 0012;
// console.log(num);
// // var a = "123px";
// a = parseInt(a);
// console.log(a);
// var a = "123b4556bbbb";
// a = parseInt(a);
// console.log(a);
// var a = "123.456";
// a = parseInt(a);
// console.log(a);
// var b = "123.456";
// b = parseFloat(b);
// console.log(b);
// var a = '';
// a = Number(a);
// console.log(a,typeof a);
// var a = undefined;
// a = Number(a);
// console.log(a,typeof a);
// var a = null;
// a = Number(a);
// console.log(a,typeof a);
// var a = true;
// a = Number(a);
// console.log(a,typeof a);
// var a = 123;
// a = Number(a);
// console.log(a,typeof a);
// //对象.toString()方法
// var a = 123;
// console.log(a,typeof a);
// var b = a.toString();
// console.log(b,typeof b);
// var a = true;
// a = a.toString();
// console.log(a,typeof a);
//String()函数
// var a = null;
// a = String(a);
// console.log(a,typeof a);
// var a = undefined;
// a = String(a);
// console.log(a,typeof a);
// var a = "123";
// console.log(a,typeof a);
// var a = undefined;
// console.log(typeof a);
// // var a = null;
// console.log(typeof a);
// // var a = null;
// console.log(a);
// var bool = false;
// console.log(bool);
// var num = 0.1 + 0.2;
// console.log(num);
// var a = NaN;
// console.log(a,typeof a);
// // var a = 123;
// // console.log(typeof a);
// // var b = "123";
// // console.log(typeof b);
// // console.log(a == b);
// console.log(Number.MAX_VALUE);//如果数值超过了最大值，则会返回Infinity表示正无穷,-Infinity表示负无穷  1.7976931348623157e+308
// console.log(Number.MIN_VALUE);//5e-324
// // a = Infinity;
// console.log(a);
// var str = "hello";
// console.log(str);
// var str = "我说：'你要\t加\n油';"// /t表示空格、
// console.log(str);
// console.log('hello!');
// //声明和赋值同时进行
// var a = 12;
// console.log(a);

