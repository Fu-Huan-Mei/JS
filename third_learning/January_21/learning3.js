/*第一次理解记忆：2023-1-21*/
/*闭包简介*/
/*创建一个函数，第一次调用时打印1，第二次调用时打印2......*/
// let num = 0;
// function fn(){
    
//     num++;
//     console.log(num);
// }
// fn();//1
// fn();//2
// fn();//3
// num = 100;
// fn();//101
//可以利用函数来隐藏不希望被外部访问到的变量
//1、概念：能访问到外部函数作用域(outer)中变量(num)的函数(箭头函数)
function outer(){
//2、使用：需要隐藏一些不希望被别人访问的内容时就可以使用闭包
    let num = 0;//变量num位于函数作用域中，只能在函数内部访问；外部函数中的变量num
//3、构成要件：
//（1）函数的嵌套
//（2）内部函数要引用外部函数中的变量
//（3）内部函数作为返回值返回
    return () => {//内部函数
        num++;
        console.log(num) ;
    }
}
const newFn = outer();
console.log(newFn);
newFn();
newFn();
newFn();
num = 100;
newFn();