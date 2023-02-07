/*逻辑运算符*/
//1、逻辑非：对一个值进行非运算
//（1）符号：！
//（2）布尔值：取反：true变false，false变true
let a = true;
a = !a;
//console.log(a);//false
//（3）非布尔值：取反：先将其转为布尔值，再取反;可以利用该特点将其他类型转为布尔值
let b = 1;
b = !b;
//console.log(b);//false
//可以利用该特点将其他类型转为布尔值,取两次反
b = 1;
b = !!b;
//console.log(b);//false

//2、逻辑与：对两个值进行与运算
//（1）符号：&&
//（2）布尔值：全真才真，一假则假
let r = true && true;
//console.log(r);//true
//（3）找false：与运算找false：找到直接返回，没有则返回true
r = true && false;
//console.log(r);//false
//（4）非布尔值：先转换为布尔值，再运算，但最终会返回原值:如果第一个值为false，则返回第一个值；如果第一个值为true，则返回第二个值
//r = true && console.log("hello");//hello
//console.log(r);//undefined
r = 1 && 2;//2
//console.log(r);

//3、逻辑或：对两个值进行或运算
//（1）符号：||
//（2）布尔值：一真则真，全假才假
//（3）找true：或运算找true：如果有true,则直接返回；没有true则返回false
//（4）非布尔值：先转布尔值再运算
r = 1 || 2;
//console.log(r);//1
r = null || undefined;
//console.log(r);//undefined
r = NaN || null;
//console.log(r);//null
r = 1 || 2 && 1;
//console.log(r);//1
r = "hello" || NaN || "hh";
//console.log(r);//hello
r = NaN || undefined;
//console.log(r);//undefined