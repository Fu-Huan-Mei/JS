/*第一次理解记忆：2023-1-21*/
/*2、闭包的原理：词法作用域，函数的外层作用域：
在函数创建时就已经确定了（词法作用域），与调用位置无关  eg:fn()作用域创建的是全局作用域*/
let a = "全局变量a";
function fn(){
    console.log(a);
}
// fn();//
function fn2(){
    let a = "fn2中的a";
    console.log(a);
//
    fn();
}
// fn2();//fn2()作用域是局部作用域
function fn3(){
    let a= "fn3中的a";
    function fn4(){
        console.log(a);
    }
    return fn4;
}
let fn4 = fn3();//不懂？？
fn4();
