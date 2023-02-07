 /*第一遍理解记忆：2023-1-16*/
/*构造函数 */
// class Person{
//     name = " 孙悟空";//当我们直接在类中指定实例属性的值时，意味着我们创建的所有对象的属性都是这个值
//     age = 18;
//     gender = "男";
//     sayHello(){
//         console.log(this.name);
//     }
// }
// //创建Person类的实例
// const p1 = new Person();
// console.log(p1);
// const p2 = new Person();
// console.log(p2);
// const p3 = new Person();
// console.log(p3);
class Person{
//1、概述：在类中可以添加一个特殊的方法constructor，该方法称为构造方法（构造函数）
    constructor(name,age,gender){
        // console.log("构造函数执行了~",name,age,gender);
//2、this：可以在构造函数中为实例属性赋值；在构造函数中，this表示当前所创建的对象
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
//3、执行：构造函数会在我们调用类创建对象时执行
const p1 = new Person("孙悟空",18,"男");
console.log(p1);//Person { name: '孙悟空', age: 18, gender: '男' }