/*第一遍理解记忆：2023-1-24*/
/*高阶函数：_call和apply*/
//1、this总结：根据函数调用方式不同，this的值也不同
//（1）以函数形式调用，this就是window
//（2）以方法形式调用，this就是调用方法的对象
//（3）构造函数中，this就是新建的对象
//（4）箭头函数没有自己的this，由外层作用域决定
//（5）通过call和apply调用的函数，它们的第一个参数就是函数的this 
// function fn(){//以函数形式调用，this就是window
//     console.log("函数执行了~~",this);
// }
// fn();
// const obj = {name:"孙悟空",fn};
//2、调用函数除了通过 函数（） 这种形式外，还可以通过其他方式来调用函数；  eg：调用函数的call()和apply()两个方法来调用函数
//（1）函数.call()
//（2）函数.apply()
// fn.call(obj);//调用fn的call方法
// fn.apply(obj);
//（3）call和apply的第一个参数，将会成为函数的this
function fn2(a,b){
    console.log("a=",a);
    console.log("b=",b);
    console.log("this=",this);
}
fn2();
//（4）通过call方法调用函数，函数的实参直接在第一个参数后一个一个列出来
fn2.call(1,2);
//（5）通过apply方法调用函数，函数的实参需要通过一个数组传递
fn2.apply([1,2]);
