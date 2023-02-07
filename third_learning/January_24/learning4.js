/*第一遍理解记忆：2023-1-24*/
/*高阶函数：_bind */
function fn(a,b,c){
    console.log("fn执行了~~");
    console.log("this=",this);//this是指： { name: '孙悟空' }
    console.log("a=",a);
    console.log("b=",b);
    console.log("c=",c);
}
const obj = {name:"孙悟空"};
//1、概述：bind()是函数的方法，用来创建一个新的函数
//3、参数：通过bind返回的函数，this由bind的第一个参数决定（无法修改）
let r = fn.bind(obj);
//2、作用：为新函数绑定this；为新函数绑定参数
let r1 = fn.bind(obj,10,20,30);
r1();
//4、注意：箭头函数没有自身的this，它的this由外层函数作用域决定，
//无法通过call、apply和bind方法来修改它的this；箭头函数中没有arguments
class MyClass{
    fn = () => {
        console.log("this=",this);
    }
}
const mc = new MyClass();

console.log(mc);