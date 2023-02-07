/*第一遍理解记忆：2023-1-17 */
/*原型对象*/
class Person{
    name = "孙悟空";
    age = 18;
    sayHello(){
        console.log("hello,我是",this.name);
    }
}
const p = new Person();//Person { name: '孙悟空', age: 18 }
console.log(p);
//1、访问：一个对象的原型对象：
//（1）对象.__proto__ 
console.log(p.__proto__);//{}
//（2）Object.getPrototypeOf( 对象 )
console.log(Object.getPrototypeOf(p));//{ }
//2、原型对象中的数据：
//（1）对象中的数据（属性、方法）
console.log(p.__proto__);//{ }
//（2）对象的构造函数（constructor）
console.log(p.constructor);//[class Person]
//3、注意：原型对象也有原型，会构成一条原型链，根据对象的复杂程度不同，原型链的长度不同
//（1）p对象的原型链：p对象-->原型-->原型-->null
console.log(p.__proto__.__proto__);//[Object: null prototype] {}
console.log(p.__proto__.__proto__.__proto__);//null
//（2）obj对象的原型链：obj对象-->原型-->null
const obj = {};
console.log(obj.__proto__);//[Object: null prototype] {}
console.log(obj.__proto__.__proto__);//null
//4、原型链：找属性链，找不到会返回undefined
//读取对象属性时，会优先寻找对象自身的属性：如果对象中有，则使用，没有则去对象的原型中寻找；
//如果原型中有，则使用，没有则去原型的原型中寻找；直到找到Object对象的原型，Object的原型没有原型（为null);
//如果依然没有找到，则返回undefined
//作用域链：找变量链，找不到会报错



