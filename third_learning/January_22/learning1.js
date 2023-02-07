/*第一遍理解记忆：2023-1-22*/
/*闭包注意事项 */
function outer(){
    let someVar = "someVar";
    return function (){
        console.log(someVar);
    }
}
/*闭包的生命周期：
1、产生：闭包在外部函数调用时产生，外部函数每次调用都会产生一个新的闭包
2、销毁：在内部函数丢失时销毁（内部函数被垃圾回收了，闭包才会消失）*/
function outer2(){
    let num = 0;
    return () => {
        num++;
        console.log(num);
    }
}
const fn1 = outer2();//独立闭包
fn1();//1   ??为什么要这样打印才会有结果
fn1();//2
fn1();//3
fn1();//4
console.log(fn1);//[Function (anonymous)]
const fn2 = outer2();//独立闭包
fn2();//1
fn2();//2
fn2();//3
fn2();//4
console.log(fn2);//[Function (anonymous)]
// fn1 = null;
// fn2 = null;