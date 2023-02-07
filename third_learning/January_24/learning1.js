/*第一遍理解记忆：2023-1-24*/
/*可变参数 */
function fn(){
//1、arguments-隐含参数
//（1）概述：是函数中定义的隐含参数，类数组对象（伪数组)；和数组类似，
//，也可以
//（2）作用：存储函数的实参
    console.log(arguments);
    //类数组对象（伪数组）
    console.log(arguments.length);
//（3）读取：可以通过索引来读取元素
    console.log(arguments[1]);
    //静态方法
    console.log(Array.isArray(arguments));//false
//（4）读取：通过for循环变量来读取arguments隐含参数，但它不是一个数组对象，不能调用数组的方法
    for(let v of arguments){
        console.log(v);
    }
}
//（5）注意：无论是否定义形参，实参都会存储到arguments对象中，可以通过该对象直接访问实参
fn(1,2,3);

//定义一个函数，求任意个数值的和
function sum(){
    let r = 0;
//（6）作用：通过arguments，实参可以不受任何数量的限制，更加灵活地创建函数
    for(let num of arguments){
        r = r + num;
    }
    return r;
   
}
r1 = sum(1,3);
console.log(r1);//4

//2、可变参数
//（1）概念：在定义函数时可以将参数指定为可变参数
//（2）作用：可以接受任意数量的实参，并将它们统一存储到一个数组中返回;
//可变参数的作用和arguments基本一致，但也具有一些不同点
//（3）注意：可变参数的名字可以自己指定：语法：...参数名
function fn2(...args){
    console.log(args);
}
fn2();//[]
//（4）本质：可变参数是一个数组，可以直接使用数组的方法
function sum2(...num){
    return num.reduce((a,b) => a + b,0);
}
r = sum2();
console.log(r);
//（5）注意：当可变参数和普通参数一起使用时，需要将可变参数写到最后
function fn3(a,b,...args){
    //直接访问a和b,但是必须定义形参才可以访问
    console.log("a=",a);
    console.log("b=",b);
    //通过arguments[0]和arguments[1]来访问，不用定义形参也可以直接访问
    // console.log("a=",arguments[0]);
    // console.log("b=",arguments[1]);
    // for(let v of arguments){
    //     console.log(v);
    // }
    console.log(args);
}
fn3(123,456);