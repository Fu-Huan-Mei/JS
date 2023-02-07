/*2022-12-27
1、数组（Array)
（1）简介：也是一个对象，和普通对象功能类似，也是用来存储数据的，不同的是普通对象使用字符串作为属性名，而数组使用索引作为属性名
（2）索引：从0开始的整数
（3）存储性能：比普通对象好，经常使用数组来存储数据
（4）找对象：创建
（5）方法
*/ 
//使用构造函数来创建数组对象
// var arr = new Array();
// // console.log(arr);
// // console.log(typeof arr);
// //向数组中添加元素 语法：数组[索引] = 值
// arr[0] = 10;
// console.log(arr);
// arr[1] = 22;
// console.log(arr);
// //向数组的最后位置添加元素：数组[数组.length] = 值
// arr[arr.length] = 20;
// console.log(arr);
// //读取数组中的元素：语法：数组[索引]
// console.log(arr[0]);
// //连续数组：length属性获取元素的个数，数组的长度
// console.log(arr.length);
// //非连续数组：length属性获取最大索引+1
// arr.length = 1;
// console.log(arr);
// arr.length = 3;
// console.log(arr);
var arr = new Array(10);
console.log(arr);
console.log(arr.length);

//使用字面量来创建数组 语法：[ ]
var arr = [];
console.log(arr);
//创建时就可指定数组中的元素
var arr = [18,'age','女'];
console.log(arr);
var arr = ['hello',1,true,null,undefined];
var obj = {name:'孙悟空'};
arr[arr.length] = obj;
console.log(arr);

