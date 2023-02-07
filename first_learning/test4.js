/*2022-11-20
1、条件运算符：语法：条件表达式？语句1；语句2；
2、运算符的优先级：在JS中，在表中位置越靠上优先级越高；如果优先级一样，则从左往右运算
3、代码块：{}括起来的语句，在代码块的后边不需要编写了；只具有分组作用;代码块内的内容在外边完全可见
4、语句：程序是由一条一条语句构成的，语句按照自上向下顺序一条一条执行；
5、流程控制语句：条件判断语句、条件分支语句、循环语句
6、条件判断语句：if(条件表达式)  if语句在执行时，先对条件表达式进行求值判断：true，执行if后的语句；false，不会执行if后的语句；写{}，结构清晰
                    语句
*/
//练习
var score = prompt('请输入小明的成绩:')//可以弹出一个提示框，该提示框中会带有一个文本框，用户可以在里面输入一段内容，该函数需要传入字符串作为该函数的参数
// var age = 70;
// if(age >= 60){
//     console.log('你已经退休了！')
// }else{
//     console.log('你还没有退休！！')
// }
// var age = 10;
// if(age >= 60){
// console.log('你已经退休了！');
// }else{
// console.log('你还没有退休！');
// }
// var age = 200;
// if(age > 17 && age <= 30){
//     console.log('你已经成年了！')
// }else if(age > 30 && age <= 60){
//     console.log('你已经中年了')
// }else if(age > 60 && age <= 80){
//     console.log('你也退休了')
// }else{
//     console.log('你岁数真大')
// }
// var age = 200;
// if(age > 100){
//     console.log('活着真没意思！')
// }else if(age > 80){
//     console.log('你也老大不小了！')
// }else if(age > 60){
//     console.log('你也退休了')
// }else if(age > 30){
//     console.log('你已经中年了')
// }else if(age > 17){
//     console.log('你已经成年了')
// }else{
//     console.log('你还是个小孩子')
// }
// var age = 100;
// if(age < 18){
//     console.log('你还未成年！')
// }else if(age < 30){
//     console.log('你已经步入青年期！')
// }else if(age < 60){
//     console.log('你已经中年了')
// }else{
//     console.log('你退休了！')
// }

// console.log('hello');
// console.log('你好！');
// var a = 1?'true':'false';
// console.log('a=',a);
// var a = NaN?'true':'false';
// console.log('a=',a);
// var a = 'hello'?'true':'false';
// console.log('a=',a);

// true? console.log('语句1'):console.log('语句2');
// false? console.log('语句1'):console.log('语句2');
// {
// var a= 1,b=2,c=3;
// console.log(a,b,c);
// var result = 1 + 2 * 3;
// console.log('result=',result);
// var result = 1 || (2 && 3);//如果||（找假）优先级高，或者一样高，则返回3；如果&&（找真）优先级高，则返回1；
// console.log('result=',result);
// }

