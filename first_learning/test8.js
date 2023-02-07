/*2022-11-24
1、对象（object)：塑料袋（容器）
（1）分类：内建对象(ES);宿主对象（JS的运行环境)eg:console、document;自定义对象（开发人员创建的对象）
（2）操作：增删查改
（3）属性名:不强制要求遵守标识符规范，声明都可以使用，但是尽量按照标识符规范去做;特殊属性名：对象["属性名"] = 属性值
（4）属性值：任意数据类型
2、数据类型：单一：基本数据类型（string、number、boolean、null、undefined)和复合：引用数据类型(object:对象)
3、栈内存：基本数据类型；JS中的变量都是保存在栈内存中，基本数据类型直接在栈内存中存储，值与值之间独立存在，修改以后不会互相影响
4、堆内存：对象保存在堆内存中，每创建一个新的对象，就会在堆内存中开辟新的内存空间，保存的是内存地址(对象的引用)，如果两个变量保存的是同一个对象的引用
5、对象字面量：创建对象 语法：var obj = { };可以直接指定对象的属性：{属性名：属性值,属性名：属性值};名值对结构
6、函数的构造：function也是一个对象，可以封装代码，需要时来执行代码；
7、函数的参数：
*/
//方式一：构造函数：创建一个函数对象，可以将要封装的代码以字符串的形式传递给函数,封装到函数的代码不会立即执行，函数中的代码会在函数调用时执行：函数对象（）;
//调用函数时，函数中的代码会含顺序执行；
// var fun = new Function("console.log('hello world');");
// console.log(fun);
// fun.hello = "hello";
// console.log(fun.hello);
// fun();
/*



}
方式一：使用构造函数（不用）
方式二：函数声明创建函数：function 函数名（形参1，形参2，形参3......）{
    语句（函数体）
方式三：使用函数表达式来创建一个函数：var 函数名 = function([形参1，形参2，形参3......]){语句......}
}
*/
//看在函数的括号中指定一个或多个形参（形式参数：占地），多个形参之间使用逗号隔开,声明形参就相当于在函数内部声明了变量，但并没有赋值
// function sum(a,b){
//     //var a = 1;
//     //var b = 2;
//     sum = a + b
//     console.log('sum=',sum);
// }
// sum(1,)
//在调用函数时，可以在（）中指定实参，实参会赋值给对应的形参;调用函数时，解析器不会检查实参的类型，注意是否可能会接受非法参数;
//也不会检查实参的数量，多余的实参不会被赋值给形参，实参可以时任意数据类型
//返回值:return 值，return后的值将会作为函数的执行结果返回，可以定义一个变量来节后该结构;return后的语句都不会执行；
//如果return后不跟任何值，会返回undefined；return可以返回任意类型的值
// function sum(a,b,c){
//     var result = a + b + c;
//     return
//     console.log('hello');//死代码
// }
// //变量d的值就是函数的执行的结果，函数返回什么，d的值就是什么
// var d = sum(1,2,3);
// console.log('d=',d);
// //赋值语句
var a = console.log('hello');
console.log(a);

// function fun2(){
//     //封装起来的代码
//     console.log('越努力越幸运');
//     console.log('越努力越幸运');
//     console.log('越努力越幸运');
//     console.log('越努力越幸运');
// }
// //调用函数才会执行
// fun2()
//     name:'孙悟空',
//     gender:'男',
//     age:18
//     test:{name:'沙师弟'}
// }
// console.log(obj.test);
// var obj1 = new Object();
// obj1.name = '沙和尚';
// var obj2 = obj1;
// obj2.name = '沙和尚';
// console.log(obj1 == obj2);
// console.log(obj2.name);
// var a = 123;
// var b = 123;
// console.log(a == b);
//引用数据类型：对象(object)（变量）
// var obj = new Object();
// obj.name = '孙悟空';
// obj.name = '猪八戒';
// var obj2 = obj;
// console.log(obj.name);
// console.log(obj2.name);
// //基本数据类型：str、num、bool、null、undefined
// var a = 123;
// var b = a;
// a++;
// console.log('a=',a);
// console.log('b=',b);
//in：检查一个对象中是否含有知道你过的属性：“属性名” in 对象
//对象：很抽象
//属性值：任意数据类型
// var obj2 = new Object();
// obj2.test = obj2 ;
// obj2.name = '猪八戒';
// console.log(obj2.test.name);
// var obj = new Object();
// console.log("test2" in obj);
// obj.test = obj;//属性值：任意数据类型，也可以是一个对象
// console.log(obj.test);
// obj.test='hello';
// obj.test = true;
// obj.test = null;
// obj.test = undefined;
// obj.test = 123;
// console.log("test" in obj);
// console.log(obj.test);
// var obj = new Object();
// object["123"] = "789";
// object["nihao"] = "你好";
// var n = '123';
// console.log(obj["123"]);
// console.log(obj[n]);
// var obj = new Object();
// //属性名：不强制要求遵守标识符规范，声明都可以使用，但是尽量按照标识符规范去做;特殊属性名：对象["属性名"] = 属性值
// obj.name = '付欢梅';
// obj.age = 25;
// obj.gender = '女';
// console.log(obj.name);
// obj["123"] = 123;
// obj["nihao1"]= '你好';
// console.log(obj["nihao1"]);
// console.log(obj["123"] );
// var obj = new Object();//构造函数：专门用来创建对象的函数
// //console.log(typeof obj)
// //在对象中保存的值称为属性：语法：对象.属性名 = 属性值
// obj.name = '孙悟空';
// obj.gender = '男';
// obj.age = 18;
// console.log(obj)
// //读取对象属性：对象。属性名
// console.log(obj.name);
// console.log(obj.hello);//如果读取对象中没有的属性，不会报错，但会返回undefined
// //修改对象的属性值：对象.属性名=新值
// obj.name = '猪八戒';
// console.log(obj.name);
// obj.gender = '女';
// //删除对象的属性：语法：delete 对象.属性名
// delete obj.name;

