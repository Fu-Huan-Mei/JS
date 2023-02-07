/*2022-11-19
1、逻辑运算符：！（非运算）、&&（与:同时）（找false)：如果第一个值为True,会看第二个值、||（或）（找true）:如果第1个值为false,则继续看第二个值
2、赋值运算符：将符号右侧的值赋值给左侧的变量:=、+=、%=、%=、/=
3、关系运算符：比较2个值之间的大小关系：如果关系成立，返回True;如果关系不成立，则返回false;>、>=、
4、其他运算符：==和!=(不相等：如果不等，返回true，否则返回false)：自动类型转换、!==(不全等）和===（全等）：不会自动类型转换，如果类型不同，则返回False;
5、三元运算符：条件表达式？语句1：语句2；
*/



// console.log(true === false)
// console.log(10 !== 10)
// console.log()


// a = 1;
// b = 1;
// console.log(a == 1);
// console.log('1'==1);//使用==来比较2个值时，会自动进行类型转换，再进行比较
// console.log(NaN == 0);
// console.log(true == 'hello')//字符串和布尔值都转换为number
// console.log(null==0);//
// console.log(undefined == null);
// console.log(NaN == NaN)//NaN不和任何值相等，包括它本身;可以通过isNaN()来判断一个值是否是NaN
// console.log(NaN == 1);
// console.log(isNaN(NaN));//返回True和false
// console.log(isNaN(undefined));
// console.log(isNaN());
// varconsole.log(isNaN(undefined)); a = 5 > 4;
// console.log(a);
// var a = 9 > 9;
// console.log(a);
// var a = 3 < 9;
// console.log(a);
//非数值之间的关系比较:先将其转换为数字，再进行比较;如果符号2侧的值都是字符串，不会将其转换为数字进行比较，而会比较字符编码
// var a = true > 9;
// console.log(a);
// var a = NaN < undefined;//任何值和做NaN做任何比较，返回值都是false
// console.log(a);
// var a = Undefined < 2;
// console.log('a' < 'b');
// console.log('10' > '2');
// console.log('abc' < 'b');
// console.log('a' < 'b');
// console.log('abc' < 'ab');//比较字符串编码时，一位一位进行比较，如果2位一样，则比较下一位，所以可以借用它来为i英文进行排序
// console.log('c' < '');
// console.log('%' < '&');
// console.log(+'10' > +'2');
// console.log(Number('10') > Number('2'));
//console.log('\u2620')
// var a = 123;
// a = a + 5;
// console.log(a);
// var a = 123;
// a += 5;
// console.log(a);
// a = 5;
// a -= 5;
// console.log(a);
// a *= 5
// console.log(a);
// a %= 5;
// console.log(a);
// var a = '1' || '0';//对于非布尔值进行与、或运算，会先将其转换为布尔值，再运算，并且返回原值
// console.log(a);
// var a = '1' || '2';// 
// console.log(a);
// var a = 0 || NaN; 
// console.log(Boolean('NaN')) //只要是字符串，返回布尔值都为true                         
// console.log(a);
// var a = 1 || 2;
// console.log(a);
// var a = NaN || '  '; 
// console.log(a);
// var a = NaN || 'HHHH'; 
// console.log(a);
// // var a = NaN || 0;//
// console.log(a);
// var a = 1.23 || 2.354;//找false
// console.log(a);
// var a = true && '你看我出不出来';
// console.log(a)
// var a = false && '你看我出不出来';
// console.log(a)
// var a = false || '你看我出不出来';
// console.log(a);
// var a = true || '你看我出不出来';
// console.log(a);
// var a = true;//布尔值：直接取反
// a = !!a;
// console.log('a=',a,typeof a)
// a = 0;//非布尔值取反：先将其转换为布尔，再取反；可以利用这特点，为任意数取2次反，来将其转换为布尔值
// a =!!a;
// console.log(a);