/*第一遍理解记忆：2023-1-16*/
/*对象的结构*/
class Person{
    name="孙悟空";
    age = 18;
    sayHello(){
        console.log("Hello,我是"+this.name);
    }//不可以访问
    // sayHello = function(){
    //     console.log("Hello,我是"+this.name);
    // }//可以访问
    constructor(){
        //通过x=y的形式
        this.gender = "男";
    }
}
const p1 = new Person;
console.log(p1);
//1、对象中存储属性的区域：
//（1）对象自身:
//方式一：直接通过对象所添加的属性，位于对象自身中；
//方式二：在类型中通过x=y的形式添加的属性，位于对象自身中  eg:通过对象添加的属性
//直接通过对象所添加的属性
p1.address = "花果山";
console.log(p1);
//（2）其他对象（原型对象）(prototype)：在对象中有一个属性用来存储原型对象，这个属性叫做__proto__;
//当我们访问对象中的属性时，会优先访问对象自身的属性；如果对象自身不包括该属性时，才会去原型对象中寻找
// p1.sayHello = "hello";
console.log(p1.sayHello);
//2、添加到原型对象的情况
//（1）在类中通过xxx(){}方式添加方法
// sayHello(){
//     console.log("Hello,我是"+this.name);
// }
//（2）主动向原型中添加属性或方法

