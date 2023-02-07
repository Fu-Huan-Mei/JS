/*2022-12-27
1、this：解析器在调用函数时每次都会向函数内部传递一个隐含的参数this；this指向一个对象，这个对象称为函数执行的上下文对象
根据函数的调用方式不同，this指向不同对象
（1）以函数形式调用时，this就是window
（2）以方法形式调用时，this就是调用该方法的对象
（3）以构造函数调用时，this就是调用对象
2、构造函数
（1）创建一个构造函数，专门用来创建Person对象，创建方式和普通函数没有区别，不同的是构造函数首字母大写;
（2）调用：普通函数直接调用；构造函数使用new关键字来调用
（3）执行流程：
第一步：创建新的对象
第二步：将新建的对象设置为函数中的this,在构造函数中，可以使用this来引用新建的对象
第三步：逐行执行函数中的代码
第四步：将新的对象作为返回值返回
3、toString()方法
4、垃圾回收（GC）：在JS中会自动将垃圾回收销毁
没有对象对其进行引用，此时将永远无法操作该对象，这种对象就是垃圾，会占用大量内存空间，导致程序运行变慢
将不再使用的对象设置为null即可
*/
// var obj = new Object();
// console.log(obj,typeof obj);
// var obj = null;//没有对象对其进行引用，此时将永远无法操作该对象，这种对象就是垃圾，会占用大量内存空间，导致程序运行变慢
// console.log(obj);
// function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
// //创建Person实例
// var per = new Person('孙悟空',18,'男');
// var r = per.toString();
// console.log(r);
// console.log(per.__proto__.hasOwnProperety('toString'));
// // per.toString = function(){
//     return 'hello'
// };

// function Person(name,age,gender){
//     this.name = name ;
//     this.age = age;
//     this.gender = gender;
//     //向对象中添加一个方法,在构造函数内部创建方法，构造函数每执行一次，就会创造一个sayName方法，执行一万次就会创建一万个方法
//     this.sayName = fun//方法都是相同的，占用内存空间，所以完全可以使对象共用一个方法,所以在外边定义方法，里面引用函数对象
// };
// //将函数定义在全局作用域中，污染了全局作用域的命名空间；并且很不安全
// function fun(){
//     console.log('hello!我是',this.name);
// }
// var per = new Person('孙悟空',18,'男');
// var per2 = new Person('猪八戒',28,'男');
// per.sayName();
// per2.sayName();
// console.log(per.sayName == per2.sayName);

// function Person(name,age,gender){
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.sayName = function(){
//         console.log(this.name);
//     }
// }
// //使用同一个构造函数创建的对象称为一类对象，称为一类；通过构造函数创建的对象成为类的实例
// var per = new Person('孙悟空',18,'男');//构造函数调用需要加上new关键字
// console.log(per);
// var per1 = new Person('猪八戒',28,'男');
// console.log(per1);
// console.log(per instanceof Person);//检查一个对象是否是类的实例
// console.log(per instanceof Object);

// function Dog(){

// }
// var dog = new Dog();
// console.log(dog instanceof Dog);
// console.log(dog instanceof Person);
// console.log(dog instanceof Object);


// //使用工厂方法创建对象，但是创建的对象都是Object
// function createPerson(name,age,gender){
//     //创建一个新的对象
//     var obj = new Object();
//     //向对象中添加属性
//     obj.name = name,
//     obj.age = age,
//     obj.gender = gender,
//     obj.sayName = function(){
//         console.log(this.name);
//     }
//     //将新的对象返回
//     return obj;
// }
// var obj1 = createPerson('孙悟空',18,'男');
// console.log(obj1);
// var obj2 = createPerson('猪八戒',28,'男');
// console.log(obj2);


// //创建对象
// var obj = {
//     name:'孙悟空',
//     age:18,
//     gender:'男',
//     sayName:function(){
//         console.log(this.name);
//     }
// };

// var name = '全局';
// function fun(){
//     console.log(this.name);
// };
// var obj = {
//     name:'孙悟空',
//     sayName:fun
// };
// var obj2 = {
//     name:'沙和尚',
//     sayName:fun
// };
// fun();
// obj.sayName();//相当于调用函数fun
// obj2.sayName();
// function fun(a,b){
//     console.log(a,b);
//     console.log(this.name);//指向全局对象  Object [global]
// }
// fun(123,456);
// var obj2 = {
//     name:'沙和尚',
//     sayName:fun
// };
// console.log(this.name);