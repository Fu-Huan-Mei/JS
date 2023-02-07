/*第一遍理解记忆：2023-1-29*/
//在JS中，除了直接创建原始值外，也可以创建原始值的对象
//通过new String()可以创建String类型的对象  通过new Number()可以创建Number类型的对象  
//通过new Boolean()可以创建Boolean类型的对象  
let str = new String("hello");
let num = new Number(11);
let bool = new Boolean(true);
let bool2 = new Boolean(true);
console.log(bool==bool2);//false  比较的是对象的内存地址
/*包装类：5个*/
//1、概述：5个包装类：
//（1）String-->字符串包装为String对象、
//（2）Number-->数值包装为Number对象
//（3）Boolean-->布尔值包装为Boolean对象
//（4）BigInt-->大整数包装为BigInt对象
//（5）Symbol-->符号包装为Symbol对象
//2、作用：通过包装类可以将一个原始值包装为一个对象；当我们对一个原始值调用属性或方法时，
//JS解释器会临时将原始值包装为对应的对象，再调用该对象的属性或方法
str = "hello world";
str.name = "字符串";//添加name属性时，解释器会临时添加给str对象，但会在该行代码结束时立即销毁
console.log(str.name);//undefined
num = 11;
num = num.toString();
console.log(num);//11
//3、由于临时值会被临时转换为对象，那该对象中的方法都可以直接通过原始值来调用