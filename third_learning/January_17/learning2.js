/*第一遍理解记忆：2023-1-17 */
//5、原型的作用：所有的同类型对象的原型对象都是同一个，那原型链也一样
class Person{
    //在对象中，有些值是独有的，像属性（name age gender），每个对象都有自己对应的值
    name="孙悟空";
    age=18;
    //但是有些值对于每个对象而言是一样的，像各种方法，对于一样的值没有必要重复创建
    sayHello(){
        console.log("Hello,我是"+this.name);
    }
}
class Dog{

}
//（1）原型是公共区域，可以被所有该类实例访问；可以将该类实例中所有公共属性（方法）统一存储到原型中，
//那只需创建一个属性，即可被所有实例访问
//p和p2就是同类型对象：它们的原型对象是同一个
const p = new Person();
const p2 = new Person();
console.log(p.sayHello);//[Function: sayHello]
const d = new Dog();
const d2 = new Dog();
//（2）继承通过原型实现：当继承时，子类的原型就是一个父类的实例？？？
class Animal{

}
class Cat extends Animal{

}
class TomCat extends Cat{
    
}
const cat = new Cat();
console.log(cat.__proto__);//Animal {}
console.log(cat.__proto__.__proto__);//object {}
console.log(cat.__proto__.__proto__.__proto__);//[Object: null prototype] {}  即Object原型
console.log(cat.__proto__.__proto__.__proto__.__proto__);//null
