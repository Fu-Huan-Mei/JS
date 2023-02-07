/*第一遍理解记忆：2023-1-18  ？？有点儿不理解 */
/*旧类：早期JS中，直接通过函数定义类 */
//1、一个函数如果直接调用xxx( ),那么整个函数就是一个普通函数
//2、一个函数如果通过new调用new xxx( ),那么整个函数就是一个构造函数
//等价于 class Person{

// }
//创建立即执行函数:主要使用( )
var Person = (function(){
    //创建一个类：类就是用来创建对象
    //构造函数Person
    function Person(name,age){
//3、属性：在构造函数中,this表示新建的对象,在对象中添加属性
        this.name = name;
        this.age = age;
        // this.sayHello = function(){
        // }
    }
    //修改：向原型中添加属性/方法
    Person.prototype.sayHello = function(){
        console.log(this.name);
    }
//4、方法：
//（1）添加：静态属性
    Person.staticProperty = "xxx";
//（2）添加：静态方法
    Person.staticMethod = function(){
    return Person;
    }
})()

    //构造函数
    // const p = new Person("孙悟空",18);
    // console.log(p.name);
    // console.log(p.age);

var Animal = (function(){
    function Animal(){

    }
    return Animal
})()
var Cat = (function(){
    function Cat(){

    }
//5、继承：继承Animal
    Cat.prototype = new Animal();
    return Cat;
})()
var cat = new Cat();
console.log(cat);//Animal {}