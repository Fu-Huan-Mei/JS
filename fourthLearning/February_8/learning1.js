/*2023-2-8 */
/*1、数据类型：
原始值：数值(number)、大整数(bigInt)、字符串(string)、布尔值(boolean)、空值(null)、未定义(undefined)、符号(symbol)
对象 
2、对象
（1）含义：复合数据类型，可以存储不同类型的复杂数据*/
//（2）创建
//第一种：使用new关键字创建对象
let obj = new Object();
//（3）属性：对象中存储的数据
//（4）增：添加：向对象中添加属性:对象.属性名 = 属性值
obj.name = "孙悟空";
obj.age = 18;
//（5）查：读取：对象中的属性：对象.属性名
console.log(obj.name);//孙悟空
//（6）改：修改：对象.属性名 = 新属性值
obj.name = "猪八戒";
console.log(obj.name );
//（7）删：删除：delete 对象.属性名
delete obj.name ;
console.log(obj.name );//undefined
