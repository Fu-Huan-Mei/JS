/*2023-1-12：第一遍理解记忆*/
/*1、不可变类型：原始值，不可改变，一旦创建无法修改*/
let a = 10;
a = 12;//当为一个变量重新赋值时，绝对不会影响其他变量
console.log(a);
/*
2、可变类型：对象
（1）创建：对象创建后，可以任意添加和删除修改对象中的属性*/
//创建对象
let obj = Object();
obj.name = "孙悟空";
console.log(obj);
//（2）注意：当对对象做相等或全等比较时，比较的是对象的内存地址
let obj2 = Object();
let obj3 = Object();
console.log(obj2 == obj3);//false

let obj4 = obj;
console.log("obj",obj);
console.log("obj4",obj4);
console.log(obj==obj4);//true
//（3）注意：如果有两个变量同时指向一个对象，通过一个变量修改对象的属性时，对另一个变量也会产生影响
obj4.name = "猪八戒";//当修改变量时，指向该对象的变量都会受到影响
console.log(obj.name,obj4.name);//猪八戒 猪八戒

