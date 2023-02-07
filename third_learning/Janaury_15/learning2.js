/*类*/
//3、属性
//（1）类的代码块：设置对象属性，默认是严格模式
class Person{
//（2）实例属性：直接写的属性
    name = "孙悟空"//Person的实例属性name  p1.name    实例属性(直接写的属性）
    age = 18//Person的实例属性age          p1.age
//（3）静态属性（类属性）：使用static声明的属性
    static test = "test静态属性";//使用static声明的属性,通过类去访问:Person.test
    static h = "静态属性";//使用static声明的属性,通过类去访问:Person.h
}
//（4）实例属性的访问：只可通过实例访问
const p1 = new Person();//p1就是Person类的实例,只可通过实例访问
console.log(p1);//Person { name: '孙悟空', age: 18 }
const p2 = new Person();
console.log(p2);//Person { name: '孙悟空', age: 18 }
//（5）静态属性（类属性）的访问：通过类去访问
console.log(Person.test);//test静态属性

