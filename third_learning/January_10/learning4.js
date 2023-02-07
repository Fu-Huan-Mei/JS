/*一元运算符：+(正) -(负) */
//1、正号：不会改变数值的符号
let a = 10;
a = +a;
console.log(a);//10
//2、负号：对数值进行符号的取反
let b = 10;
b = -b;
console.log(b);
//3、注意：当我们对非数值类型进行正负运算时，会先将其转换为数值在进行运算
let c = "123";
c = +c;
console.log(c);//123
c = -c;
console.log(c);//-123
