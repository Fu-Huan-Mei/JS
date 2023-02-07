/*自增和自减 */
//1、++（自增）:使原来的变量立即增加1
let a = 10;
a++;
console.log(a);//11
//（1）前自增：a++:自增前的值（旧值）
let b = a++;
console.log(b);//11
//（2）后自增：++a:自增后的值（新值）
b = ++a;
console.log(b);//13
let n = 5;
//       5      7   7
let r = n++ + ++n + n;
console.log(r);//19

//2、自减：使原来的变量立即减少1
//（1）前自减:(--a)：新值
let c = 5;
--c;
console.log(c);//4
//（2）后自减:(a--)：旧值
c = 5;
c--;
console.log(c);//4

