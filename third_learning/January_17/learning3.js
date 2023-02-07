/*第一遍理解记忆：2023-1-17 */
/*6、修改原型：大部分情况下，不需要修改原型*/
class Person{
    name="孙悟空";
    age = 18;
    sayHello(){
        console.log("Hello,我是"+this.name);
    }
}
class Dog{

}
const p = new Person();
const p2 = new Person();
//（1）不能使用：通过对象修改原型，向原型中添加方法，修改后所有同类实例都能访问该方法
// p.__proto__.run = () => {
//     console.log("我在跑~~");
// }
// p.run();//我在跑~~
// p2.run();//我在跑~~
//（2）不能使用：直接为对象赋值新的原型（无意义）
// p.__proto__ = new Dog();
// console.log(p);//Dog { name: '孙悟空', age: 18 }
// console.log(p2);//Person { name: '孙悟空', age: 18 }
//（3）可使用：通过类去修改（一修改就是修改所有实例的原型；无需创建实例即可完成对类的修改）  ？？
//通过类访问Person实例的原型对象
console.log(Person.prototype);//{ }
Person.prototype.fly = () => {
    console.log("我在飞");
}
p.fly();
console.log(p);
//7、注意：不能通过类的实例去修改原型：通过一个对象影响所有同类对象不合适；修改原型先要创建实例，比较麻烦
//8、原则：
//（1）原型尽量不要手动修改
//（2）不能通过实例对象去修改
//（3）通过  类.prototype 属性去修改
//（4）不要直接给prototype去赋值