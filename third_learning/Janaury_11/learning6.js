 /*2023-1-11：第一遍理解记忆*/
/*循环语句：可以使指定代码反复执行；3种循环（while do-while for)*/
/*while语句*/
//1、语法：while(条件表达式){语句...}
//2、执行流程：while语句在执行时，先对条件表达式进行判断：true，则执行循环体，继续判断，true，再执行循环体，直到false时，循环结束
//死循环（慎用）
// while(true){
//     console.log("hh");
// }
//3、3要件（缺一不可）：（1）初始化表达式：初始化变量（2）条件表达式:循环运行条件（3）更新表达式
//初始化表达式
// let a =0;
// //条件表达式
// while(a<5){
//     console.log(a);
//     //更新表达式
//     a++;
// }
let i =0;
while(1){
    console.log(i);
    i++;
    //循环终止条件
    if(i===5){
        break;
    }
}

/*练习：假设银行存款的年利率为%5，问1000元村多少年以后编程5000元？*/