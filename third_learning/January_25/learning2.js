/*第一遍理解记忆：2023-1-25*/
/*对象的序列化*/
/*1、概述：JS中的对象在使用时，都是存储在计算机的内存中；序列化是指将对象转换为一个可以存储的格式；
在JS中，对象的序列化通常将对象转换为字符串*/
const obj = {
    name:"孙悟空",
    age:18,
    gender:"男"
}
console.log(obj);//{ name: '孙悟空', age: 18, gender: '男' }
/*2、作用（对象转换为字符串后）：可以将字符串在不同的语言之间进行传递，可以直接对字符串进行读写操作，
使JS对象可以在不同语言之间传递
（1）作为数据交换的格式
（2）用来配置文件*/
/*3、如何进行序列化？JSON：JS对象表示法：JS都西昂序列化后转换为一个字符串，该字符串称为JSON字符串：创建*/
//（1）JSON.stringify()：将obj转换为JSON字符串
const str = JSON.stringify(obj);//将对象转换为JSON字符串
console.log(str);//{"name":"孙悟空","age":18,"gender":"男"}
//（2）JSON.parse()：将JSON格式的字符串转为对象
const obj2 = JSON.parse(str);//
console.log(obj2);//{ name: '孙悟空', age: 18, gender: '男' }
console.log(obj==obj2);//false
//（3）在程序配置文件时，手动编写JSON字符串   eg: '对象'
const str2 = '{"name:""猪八戒","age":28}';
console.log(str2);//{"name:""猪八戒","age":28}
/*4、编写JSON注意事项：
（1）JSON字符串有两种类型：JSON对象{ }、JSON数组[ ]*/
const str3 = '{}';
const str4 = '[]';
//（2）JSON字符串的属性名必须使用双引号引起来
// str2 = '{"name:""猪八戒","age":28}';
//（3）JSON中可以使用的属性值（元素）：数字(Number)、字符串(String)、布尔值(Boolean)、
//空值(Null)、对象(object {})、数组(Array[])
const str5 = '["hello",true,undefined,[]]';
console.log(str5,typeof str5);//["hello",true,undefined,[]]  string
//5、JSON格式和JS对象的格式基本一致：JSON字符串如果属性是最后一个，则不要加,

