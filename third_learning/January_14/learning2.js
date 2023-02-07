/*第一遍理解记忆：2023-1-14*/
/*作用域链 */
//1、当我们使用一个变量时，JS解释器会优先在当前作用域中寻找变量：如果找到了则直接使用；
//如果没有找到，则继续上一层寻找，找到则使用；如果一直到全局作用域中都没找到，则报错；
let a = 10;
{
    let a = "第一行代码块中的a";
    {
        let a= "第二行代码块中的a";
        console.log(a);
    }
   
}
let b = 33;
function fn(){
    let b = 44;
    function f1(){
        let b = 55;
        console.log(b);
    }
    f1();
}

/*方法(method)*/ 
let obj = { };
obj.name = "孙悟空";
obj.age = 18;
//1、函数也是对象的属性
//2、方法：当一个对象的属性指向一个函数，就称这个函数是该对象的方法
obj.sayHello = function(){
    console.log("hello");
}
//3、调用：调用函数就称为调用对象的方法
obj.sayHello();//hello  调方法
document.write();//调方法
