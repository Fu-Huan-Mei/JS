/*第一遍理解记忆：2023-1-27 */
/*Math-内建对象*/
//1、概述：Math是一个工具类对象
console.log(Math);//Object [Math] {}
//2、常量：Math.PI圆周率
console.log(Math.PI);//3.141592653589793
//3、方法
//（1）Math.abs()求一个数的绝对值   absolute
let r = Math.abs(-10);
console.log(r);//10
//（2）Math.min()求多个数的最小值
r = Math.min(1,2,3,4,99);
console.log(r);//1
//（3）Math.max()求一个数的最大值
r = Math.max(1,2,3,4,99);
console.log(r);//99
//（4）Math.pow()求x的y次幂
r = Math.pow(4,2);
console.log(r);//16
//（5）Math.sqrt()求一个数的平方根
r = Math.sqrt(4);
console.log(r);//2
//（6）Math.floor()向下取整（向小取整）
console.log(Math.floor(9.9999));//9

//（7）Math.ceil()向上取整（向大取整）
console.log(Math.ceil(9.999));//10
//（8）Math.round()四舍五入取整
console.log(Math.round(19.333));//19
//（9）Math.trunc()直接去除小数位
console.log(Math.trunc(2.344566));
//（10）Math.random()生成一个0~1之间的随机数
console.log(Math.random());//0.8001645263991628
for(let i=0;i<1000;i++){
    r = Math.random();
    if(r === 0){
        console.log(r);
    }else if(r === 1){
        console.log(r);
    }
}
console.log("执行完毕~~");
//情况一：生成0~x之间的随机整数：Math.round(Math.random() * x);  Math.floor(Math.random() * x+1)
//生成0~5之间的随机整数
for(let i=0;i<100;i++){
    r = Math.round(Math.random() * 5);
    console.log(r);
}
//情况二：生成x~y之间的随机数：Math.round(Math.random() * (y-x) + x);
//生成11~20之间的随机数
r = Math.round(Math.random() * 9 + 11);
console.log(r);//13


//（11）Math.sign()返回一个数的符号
console.log(Math.sign(10));//1
console.log(Math.sign(10000123));//1
console.log(Math.sign());//NaN
console.log(Math.sign(0));//0
console.log(Math.sign(123));//1
