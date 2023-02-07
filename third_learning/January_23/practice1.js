/*递归的练习*/
//一对兔子出生两个月后的每个月都生一对小兔子；编写一个函数，用来计算第n个兔子的数量
//1（1） 2（1） 3（2） 4（3） 5（5） 6（8） 7（13） 8（21） 9（34） 10 11 12 
//规律：当前数=前两个数之和（斐波那契数列）
//求斐波那契额数列的第n个数
function fn(n){
    //基线条件
    if(n<3){
        return 1;
    }
    //递归条件：第n个数 = 第n-1个数 + 第n-2个数
    return fn(n-1)+fn(n-2);
}
let r = fn(17);
console.log(r);