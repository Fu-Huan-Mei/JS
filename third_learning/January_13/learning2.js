/*第一遍理解记忆：2023-1-13*/
/*函数*/
//6、返回值
//（1）概述：在函数中，可以通过return关键字来指定函数的返回值，返回值就是函数的执行结果，函数调用完毕后返回值便会作为结果返回
function sum(a,b){
    // console.log(a+b);//计算完成后，计算结果就直接打印了
    return a+b;//将计算结果作为返回值返回
}
let r = sum(123,234);
console.log(r);//357

function s(){
    return true;
}
let result = s();
console.log(result);//true
//（2）类型：任何值（包括对象和函数）
function fn(){
    return {name:"孙悟空"};//对象
    return ()=>{console.log("哈哈哈")};//箭头函数
//（3）注意：如果return后不写任何值，则相当于return undefined
    return ;//相当于return undefined;
}
//（4）return一执行，函数立即结束
console.log(123);
// return;
// console.log(456);
//（5）箭头函数的返回值：可以直接写在箭头后
// const sum1 = (a,b) => { return a + b;}
const sum1 = (a,b) => a + b;
let r1 = sum1(123,456);
console.log(r1);//579
//如果直接在箭头后设置对象字面量的返回值时，对象字面量必须使用()括起来
//const f1 = () => { return {name:"孙悟空"}};
const f1 = () => ({name:"孙悟空"});
let r2 = f1();
console.log(r2);//{ name: '孙悟空' }

//7、方法(method) 
let obj = {};
obj.name = "孙悟空";
obj.age = 18;
//（1）函数也可以成为对象的属性
obj.sayHello = function(){
    console.log("hello");
}
obj.sayHello();

