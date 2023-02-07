/*面向对象(OOP) */
//1、程序：对现实世界的抽象，一切皆对象  eg:照片就是对人的抽象
//2、组成：属性和方法
//3、面向对象的编程：程序中所有操作都是通过对象来完成，做任何操作之前都要找对象，再搞对象

/*类*/
//1、使用Object创建对象的问题：
//（1）无法区分不同类型的对象
//（2）不方便批量创建对象
const p = {
    //添加属性
    name:"王老五",
    age:48,
    height:180,
    width:100,
    //添加方法
    sleep(){
        console.log(this.name + "睡觉了~~")
    },
    eat(){
        console.log(this.name + "吃饭了")
    }
}
console.log(p);
const yellow = {
    name:"大黄",
    age:3,
    sleep(){
        console.log(this.name + "睡觉了")
    },
    eat(){
        console.log(this.name + "吃饭了")
    }
}
console.log(yellow);

//2、在JS中可以通过（类）来创建对象
//（1）类：创建对象的模板，可以将对象中的属性和方法直接定义在类中；定义后，直接通过类来创建对象
//（2）语法：class 类名{ }  或者 const 类名 = class { }
//（3）类名：使用大驼峰命名法
//const Person = class {};(不常用）)
//定义Person类专门创建人的对象
class Person {

}
//定义Dog类专门创建狗的对象
class Dog{

}
//调用构造函数来创建对象
const p1 = new Person();
const p2 = new Person();
//（4）同类对象：通过同一类创建的对象
const d1 = new Dog();
const d2 = new Dog();
//（5）instanceOf：使用instanceof检查一个对象是否是一个类的实例，返回true或者false;如果某个对象是由某个类创建的，则称该对象是这个类的实例
console.log(p1 instanceof Person);//true
console.log(d1 instanceof Dog);//true
//（6）模式：类的代码块，默认是严格模式


const p3 = new Person();
p3.name = "孙悟空";
p3.age = 18;
console.log(p3);//Person { name: '孙悟空', age: 18 }
