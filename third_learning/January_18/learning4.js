/*第一遍理解记忆：2023-1-18*/
/*数组(Array)*/
//1、简介：复合数据类型，在数组中可以存储多个不同类型的有序数据
//每个数据都有一个唯一的索引，可以通过索引来获取数据
//2、创建：数组
//(1)通过Array( )来创建数组
const arr1 = new Array();
console.log(arr1);//[ ]
//（2）数组字面量：通过[ ]来创建数组
const arr2 = [ ];//数组字面量
console.log(arr2);//[ ]
//3、索引：从0开始的整数
//4、元素：数组中存储的数据
//5、添加：向数组中添加元素：语法：数组[索引] = 元素
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;
console.log(arr1);//[ 10, 20, 30, 40 ]
//6、注意：
//（1）使用数组时，应该避免非连续数组，因为性能不好
//（2）如果读取不存在的元素，不会报错而是返回undefined
arr1[100] = 99;
console.log(arr1);//[ 10, 20, 30, 40, <96 empty items>, 99 ]
//7、读取：读取数组中的元素：语法：数组[索引]；如果读取不存在的元素，不会报错而是返回undefined
console.log(arr1[3]);//40
console.log(arr1[20]);//undefined
//8、length：
//（1）作用：获取数组的长度，获取的实际值是最大索引+1
//（2）语法：数组.length 
console.log(arr1.length);//101
//（3）添加：向数组的最后添加元素：语法：数组[数组.length] = 元素
arr1[arr1.length] = 100;
console.log(arr1);//[ 10, 20, 30, 40, <96 empty items>, 99, 100 ]
//（4）修改：length可以修改数组
arr1.length = 5;
console.log(arr1);//[ 10, 20, 30, 40, <1 empty item> ]