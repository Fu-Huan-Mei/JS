/*类*/
/*5、方法 */
//（1）实例方法：实例方法中的this就是当前实例，通过实例调用
class Person{
    name = "孙悟空";
    // sayHello = function(){
    //     //添加方法的一种方式
    // }
    sayHello(){
        console.log("大家好，我是"+this.name);
        //添加方法（实例方法），实例方法中的this就是当前实例
    }
//（2）静态方法：静态方法中this指向当前类，通过类来调用
    static test(){
        console.log("我是静态方法"+this);
        //静态方法（类方法）通过类来调用
    }
}

const p1 = new Person();
//实例方法：通过实例调用
console.log(p1);
//静态方法：通过类来调用，静态方法中this指向当前类
Person.test();