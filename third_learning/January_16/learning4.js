/*第一遍理解记忆：2023-1-16*/
/*继承-扩展性*/
//创建Dog类
// class Dog{
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log("汪汪汪~~");
//     }
// }
// //创建Cat类
// class Cat{
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log("喵喵喵~~");
//     }
// }
// const dog = new Dog("旺财");
// const cat = new Cat("汤姆");
//创建Animal类
class Animal{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log("动物在叫~~");
    }
}
//1、概述：当一个类继承另一个类时，就相当于将另一个类中的代码复制到了当前类中（简单理解）
//2、创建：通过extends关键字完成继承
//3、父类（超类）：被继承的类   eg:Animal
//4、子类：继承的类            eg:Dog Cat
class Dog extends Animal{
//5、重写
//（1）重写方法：在子类中，可以通过创建同名的方法来重写父类的方法
    sayHello(){
        console.log("汪汪汪~~");
    }
}
class Cat extends Animal{
//（2）重写构造函数：第一行代码必须为super()
    constructor(name){
        super(name);//调用父类的构造函数
        // this.name = name;
    }
    sayHello(){
        //调用父类的sayHello()
        super.sayHello();//在方法中可以使用super来引用父类的方法
        console.log("喵喵喵");
    }
    
}
//6、好处：减少重复的代码，并且可以在不修改类的前提下对其进行扩展
const dog = new Dog("旺财");
console.log(dog);//Dog { name: '旺财' }  汪汪汪~~
dog.sayHello();
const cat = new Cat("汤姆");
console.log(cat);//Cat { name: '汤姆' }    动物在叫~~
cat.sayHello();
//7、继承：通过继承在不修改一个类的情况下对其对其进行扩展
//8、OCP开闭原则：程序应该对修改关闭，对扩展开放

