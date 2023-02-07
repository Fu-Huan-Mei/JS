/*
2022-11-30
*/
// console.log(d);
// console.log(c);
// var a = 10;
// var b = 'hello';
// c = true;
// function fun(){
//     console.log('hello')
// }
// var d = 35;
//浏览器会在调用函数时每次都向函数内部传递一个隐含的参数，
//这个隐含的参数就是this，this指向一个对象，该对象称为函数得上下文都西昂，根据函数得调用方式不同，this会指向不同的对象
//(1)以函数形式调用，this永远是window
//(2)以方法形式调用，this就是调用方法的那个对象,使程序调用更加灵活
// var obj = {
//     name:'孙悟空',
//     age:18,
//     gender:'男',
//     sayName:function(){
//         console.log(this.name)
//     }
// }
//使用工厂方法创建对象，无法区分对象是谁
// unction createPerson(name,age,gender){
    //创建一个新对象
// var obj = new Object();
// //向对象中添加属性
// obj.name=name;
// obj.age=age;
// obj.gender=gender;
// obj.sayName=function(){
// console.log(this.name);
//     }
//     //将新的对象返回
//     return obj;
// var obj2 = createPerson('猪八戒',28,'男');
// var obj3 = createPerson('沙和尚',19,'男');
// var obj4 = createPerson('孙悟空',10,'男');
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
//创建一个狗的对象
// function createDog(name,age){
//     var obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.sayHello = function(){
//         console.log('汪汪~~')
//     }
//     return obj;
// }
// var dog = createDog('猪八戒',28);
// dog.sayHello();
//创建一个构造函数，专门用来创建Person对象，构造函数就是一个普通函数，创建方式和普通函数没有区别，
//但是首字母大写，而且调用方式也不同：普通函数直接使用，构造函数使用new关键字来调用
//构造函数执行流程：1、立刻创建一个新对象2、将新建对象设置为函数中的this，在构造函数中可以使用this3、逐行执行函数中的代码4、将新建对象作为返回值返
//使用同一个构造函数创建的对象称为一类对象，我们将通过一个构造函数创建的对象，称为该类的实例,所有对象都是object的后代
function Person(name,age,gender){
    //console.log(this);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function(){
        console.log(this.name);
    }
    
}
var per = new Person('猪八戒',28,'男');//将新建对象作为返回值返回
console.log(per);

function Dog(){

}
var dog = new Dog();
console.log(dog);
//使用instanceof可以检查一个对象是否是一个类的实例
console.log(per instanceof Person);
console.log(per instanceof Object);
console.log(dog instanceof Dog);
// obj.sayName()
// var obj2 = {
//     name:'猪八戒',
//     age:28,
//     gender:'男',
//     sayName:function(){
//         console.log(this.name)
//     }
// }
// obj2.sayName()
// var obj3 = {
//     name:'沙和尚',
//     age:38,
//     gender:'男',
//     sayName:function(){
//         console.log(this.name)
//     }
// }
// obj3.sayName()
// var name = '全局';
// function fun(){
//     //console.log(name);
//     console.log(this.name);
// }
// var obj = {
//     name:'孙悟空',
//     sayName:fun
// };
// var obj2 = {
//     name:'沙和尚',
//     sayName:fun
// };
// fun()
// obj.sayName();
// obj2.sayName();
// // function fun(a,b){
//     console.log(this.name);
// }
// //fun(123,456);
// //创建一个对象
// var obj = {
//     name:'孙悟空',
//     sayName:fun
// }
// //console.log(obj.sayName == fun);
// obj.sayName();//以方法形式调用：obj.name
// fun();//函数形式调用:window.name
// var obj2 = {
//     name:'沙和尚',
//     sayName:fun
// }
// //console.log(obj.sayName == fun);
// obj2.sayName();
