/*第一遍理解记忆：2023-1-17 */
/*instanceof和hasOwn*/
class Animal{}
class Dog extends Animal{}
const dog = new Dog();
console.log(dog.__proto__);//Animal {}
console.log(Dog.prototype);//Animal {}
//1、instanceof 检查一个对象是否是一个类的实例，检查对象的原型链是否有该实例，
//只要原型链上有该类实例，就会返回true   eg:dog-->Animal实例-->Object实例-->Object原型
console.log(dog instanceof Dog);//true
console.log(dog instanceof Animal);//true
//2、Object是所有对象的原型，所以任何对象和Object进行instanceof运算都会返回true
console.log(dog instanceof Object);//true
const obj = new Object();
console.log(obj.__proto__);//[Object: null prototype] {}
console.log(Object.prototype);//[Object: null prototype] {}
class Person{
    name="孙悟空";
    age=18;
    sayHello(){
        console.log("Hello,我是",this.name);
    }
}
const p = new Person();
console.log("name" in p);//true
/*3、in：使用in运算符检查属性时，无论属性在对象自身还是在原型对象中，都会返回true*/
console.log("sayHello" in p);//true
/*4、hasOwnProperty（不推荐）
（1）含义：检查一个对象的自身是否含有某个属性
（2）语法：对象.hasOwnProperty(属性名)*/
console.log(p.hasOwnProperty("sayHello"));//false
console.log(p.hasOwnProperty("name"));//true
/*5、Object.hasOwn(推荐)
（1）含义：检查一个对象的自身是否含有某个属性
（2）语法：Object.hasOwn(对象.属性名) */
console.log(Object.hasOwn(p.sayHello));//false
console.log(Object.hasOwn(p.name));//false