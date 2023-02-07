/*第一遍理解记忆：2023-1-16*/
/*多态-灵活性*/
class Person{
    constructor(name){
        this.name = name;
    }
}
class Dog{
    constructor(name){
        this.name = name;
    }
}
class Test {
    constructor(name){
        this.name = name;
    }
}
const dog = new Dog("旺财");
const person = new Person("孙悟空");
const test = new Test("测试");
console.log(dog);
console.log(person);
console.log(test);
//定义一个函数，这个函数将接收一个对象作为参数，可以输出hello并打印对象的name属性
//1、概述：在JS中不会检查参数的类型，即任何数据都可作为参数传递；要调用某个函数，无需指定类型，只需满足某些条件即可
function sayHello(obj){
    // if(obj instanceof Person){ }//不用检查类型
    console.log("hello"+obj.name);
    
}
//2、好处：灵活性
sayHello(person);
sayHello(dog);
sayHello(test);