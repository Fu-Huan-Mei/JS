/*2023-1-10：第一遍：理解记忆*/
/*基本数据类型：原始值：不可变：一旦创建，不可更改*/ 
//1、数值(Number)
//（1）整数
let n = 10;
// console.log(n);
//（2）浮点数（小数）
let b = 1.234;
//console.log(b);
//（3）JS中的数值并不是无限大，当数值超过一定范围后会显示近似值，所以不能计算精度较高的运算
let a = 999999999999999999999999999;
console.log(a);//1e+27(科学计数法)
let sum = 0.3 + 0.2;
//console.log(sum);
let sum1 = 0.1 + 0.2;
//console.log(sum1);
//(4)Infinity  表示无穷
let c = Infinity;
//console.log(c);
//（5）NaN  表示非法的数值
a = 1 - "a";
//console.log(a);//NaN(Not a Number)
//（6）BigInt 表示大整数，以n结尾，表示数字无限大
a = BigInt;
//console.log(a);
a = 10n;//以n结尾表示大整数
console.log(a);
//（7）其他进制的数字
//二进制：以0b开头
a = 0b1010;
//console.log(a);
//八进制：以0o开头
a = 0o1010;
//console.log(a);
//十六进制：以0x开头
a = 0x1010;
//console.log(a);

//2、字符串(String)
//（1）表示：在JS中使用 单引号/双引号 来表示字符串
a = "hello";
// console.log(a);
//（2）转义字符：\"-->"   \'-->'   \\-->\   \t-->制表符  \n-->换行
a = "hell\\o";
console.log(a);
a = "你真'美'";
// console.log(a);
a = "今天\n天气真不错!"
// console.log(a);
//（3）模板字符串：反单引号  可以嵌入变量
let name = "孙悟空";
a = "你好，{name}";
// console.log(typeof a);
c = "哈哈哈";
// console.log(c,typeof c);

//3、布尔值(Boolean):主要用来进行逻辑判断，只有两个true（真）和false（假),使用typeof检查一个布尔值时会返回"boolean"
let bool = true;
// console.log(bool);

//特殊：4、空值(Null)：表示空对象，只有一个null，使用typeof会返回"object"，无法检查空值
a = null;
// console.log(a);

//5、未定义(Undefined)：只声明未赋值，使用typeof会返回"undefiined"
a = undefined;
// console.log(a,typeof a);
let d;
//console.log(d);

//6、符号(Symbol)：创建唯一的标识，使用typeof会返回"symbol"
c = Symbol();//调用Symbol（）创建一个符号
console.log(c);//Symbol()

/*类型检查
1、typeof运算符:检查不同值的类型（变量中值的类型）
2、*/ 
a = 10;
//console.log(typeof a);
b = 10n;
//console.log(typeof n);
// console.log(a,b);
// console.log(a+b);//报错