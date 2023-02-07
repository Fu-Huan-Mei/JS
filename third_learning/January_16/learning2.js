 /*第一遍理解记忆：2023-1-16*/
/*封装-安全性*/
//1、含义：对象是用来存储不同属性的容器；对象不仅负责存储属性，还负责数据安全；
//但是直接添加到对象中的属性并不安全（因为可被任意修改）
//2、数据安全
//（1）私有化数据:将需要保护的数据设置为私有，只可在类内部访问
class Person{
//私有属性：#属性名；只可在类内部访问
    // #address = "花果山";
    #name;
    #age;
    #gender;
    //构造函数
    constructor(name,age,gender){
        this.#name = name ;
        this.#age = age ;
        this.#gender = gender;
    }
    //方法
    sayHello(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
//（2）提供setter和getter方法开放对数据的操作：属性设置私有，通过getter和setter方法操作属性
//getter方法：读取属性，控制属性的读写权限
    getName(){
        return this.#name;
    }
//setter方法：修改属性，在方法中对属性的值进行验证
    setName(name){
        if(age >=0){
            this.#name = name;
        }
       
    }
    get gender(){
        console.log("getter执行了~~");
        return this.#gender;
    }
    set gender(gender){
        console.log("setter执行了~~");
        this.#gender = gender;
    }
}
const p1 = new Person("孙悟空",18,"男");
console.log(p1);//Person { name: '孙悟空', age: 18, gender: '男' }
//私有属性禁止直接访问
p1.getName();
console.log(p1.gender);
p1.gender = "女";//修改属性
console.log(p1.gender);//读取属性
//3、实现封装的方式
//（1）属性私有化：#属性名 只可在类内部访问
//（2）getter和setter方法来操作属性
//get 属性名(){ return this.#属性名 }
//set 属性名(参数/属性名){ this.#属性名=属性值 }
