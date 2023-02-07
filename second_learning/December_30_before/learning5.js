/*2022-12-19
1、label：循环语句
2、break:退出循环，只会与离它最近的循环起作用，适用于循环和switch语句
3、continue：跳过当次循环
4、对象
（1）简介：JS中的基本数据类型：String Number Boolean Null Undefined ，单一的值，值与值之间无任何联系,不能成为一个整体
（2）JS中的引用数据类型：Object  对象，复合数据类型，可以保存多个变量，多个不同数据类型的属性
（3）分类：
内建对象：由ES标准中定义的对象，在任何ES视线中都可以使用  eg:String Number Boolean
宿主对象：由JS的运行环境提供的对象，主要是浏览器提供的对象 eg:BOM DOM
自定义对象：由开发人员自己创建的对象
（4）创建对象
属性：在对象中保存的值   语法：对象.属性名 = 属性值
属性名:不强制要求遵守标识符的规范,尽量遵守规范；
如果使用特殊属性名，不能采用.的方式来操作  语法：对象['属性名'] = 属性值
在[]中可以传递变量，变量值是多少就会读取哪个属性，更灵活
属性值：任意数据类型，也可以是一个对象   
in：‘属性名’ in 对象

*/
var obj2 = new Object();
console.log('name' in obj2);

//运算符优先级最高：new   []   
var obj = new Object();
//向对象中添加属性
obj.name = '孙悟空';
console.log(obj.name);
console.log('name' in obj);
// obj['123'] = 789;
// console.log(obj['123']);

// //使用new关键字调用的函数，是构造函数constructor
// var obj = new Object();
// //向obj中添加name属性
// obj.name = '孙悟空';
// obj.gender = '男';
// obj.age = 18;
// console.log(obj);
// //读取对象中的属性：对象.属性名
// console.log(obj.name);
// console.log(obj.gender);
// console.log(obj.age);
// //如果读取对象中没有的属性，不会报错但会返回Undefined
// console.log(obj.hhh);
// //修改对象的属性  语法：对象.属性名 = 属性值
// obj.name = '猪八戒';
// console.log(obj.name);
// //删除对象的属性  语法：delete 对象.属性名
// delete obj.name; 
// console.log(obj.name);



// console.log(obj,typeof obj);//使用typeof检查对象时，会返回object
// var name = '孙悟空';
// var gender = '女';
// var age = 18;
// // outer:
// for(var i =0;i<5;i++){
//     console.log('外层循环',i);
//     for(var j=0;j<5;j++){
//         // break outer;
//         // break;
//         console.log('内层循环',i);
//     }
// }

//在程序执行前，开启计时器
// console.time('test');
// for(var i =0;i<5;i++){
//     console.log('外层循环',i);
//     for(var j=0;j<5;j++){
//         break;
//         console.log('内层循环',j);
//     }
// }
// //终止计时器:0.19s
// console.timeEnd('test');

// //在程序执行前，开启计时器
// console.time('test');
// for(var i =0;i<5;i++){
//     console.log('外层循环',i);
//     for(var j=0;j<5;j++){
//         // break outer;
//         continue;
//         console.log('内层循环',j);
//     }
// }
// //终止计时器:0.353
// console.timeEnd('test');

//在程序执行前，开启计时器
// console.time('test');
// for(var i =0;i<5;i++){
//     console.log('外层循环',i);
//     for(var j=0;j<5;j++){
//         // break outer;
//         // continue;
//         console.log('内层循环',j);
//     }
// }
// //在程序结束后，终止计时器:0.358
// console.timeEnd('test');


