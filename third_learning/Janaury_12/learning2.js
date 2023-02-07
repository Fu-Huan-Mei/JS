/*2023-1-12：第一遍理解记忆*/
/*循环的嵌套：在循环中可以嵌套循环*/
// console.log("*****");
// console.log("*****");
// console.log("*****");
// console.log("*****");
// console.log("*****");
//外层循环每执行一次，内层循环就执行一圈（完整的周期）
//练习1：在网页中打印长方形
//外层循环，控制图形高度
// for(let i=0;i<5;i++){
//     // console.log("*");
//     //内层循环，控制图形宽度
//     for(let j=0;j<5;j++){
//         console.log("*");
//     }
//     //输出一个不换行
//     console.log('\n');
// }

//练习2：打印一个正三角形
// for(let i=1;i<6;i++){
//     for(let j=0;j<i;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

//练习3：打印九九乘法表
//创建外层循环：控制图形高度
// for(let i=1;i<10;i++){
//     // console.log("i","=",i);
//     //创建内层循环：控制图形宽度
//     for(let j=1;j<i+1;j++){
//         // console.log("j","=",j);
//         // console.log(j,"*",i,"=",i*j );
//     }
//     //输出一个不换行
//     // console.log("\n");
// }
/*
1*1=1             i=1 j=1
1*2=2 2*2=4       i=2 j=1 2
1*3=3 2*3=6 3*3=9 i=3 j= 1 2 3  */

//练习4：求100以内所有质数
//先获取100以内所有的数
for(let i=2;i<100;i++){
    // console.log(i);
    //创建变量，保存i的状态：假设i是质数
    let flag = true;
    //检查i是否为质数
    //先获取除了i和它本身以外的所有因数
    for(let j=2;j<i;j++){
        // console.log(j);
        //再判断i是否能被j整除：如果i%j==0，则说明i不是质数
        if(i%j==0){
            // console.log(i,"不是质数");
            flag = false;
        }
    }
    //判断结果（注意编写位置）
    if(flag){
        // console.log(i,"是质数");
    }
}

/*关键字*/
//1、break：终止switch和循环语句,终止离它最近的循环
for(let i=0;i<5;i++){
    // console.log("外层循环i",i);
    //内层循环，控制图形宽度
    for(let j=0;j<5;j++){
        if(j==3){
            break;
        }
        // console.log("内层循环j",j);
    }
    // console.log("\n");  
}
//2、continue： 跳过当次循环
for(let i=0;i<5;i++){
    if(i==3){
        continue;
    }
    // console.log(i);
}

/*修改质数练习 */
//练习4：求100以内所有质数

//第一种做法：0.307 seconds
//先获取100以内所有的数
// for(let i=2;i<100;i++){
//     // console.log(i);
//     //创建变量，保存i的状态：假设i是质数
//     let flag = true;
//     //检查i是否为质数
//     //先获取除了i和它本身以外的所有因数
//     for(let j=2;j<i;j++){
//         // console.log(j);
//         //再判断i是否能被j整除：如果i%j==0，则说明i不是质数
//         if(i%j==0){
//             // console.log(i,"不是质数");
//             flag = false;
//         }
//     }
//     //判断结果（注意编写位置）
//     if(flag){
//         console.log(i,"是质数");
//     }
// }

//第二种做法：使用break优化  0.217 seconds
//先获取100以内所有的数
// for(let i=2;i<100;i++){
//     // console.log(i);
//     //创建变量，保存i的状态：假设i是质数
//     let flag = true;
//     //检查i是否为质数
//     //先获取除了i和它本身以外的所有因数
//     for(let j=2;j<i;j++){
//         // console.log(j);
//         //再判断i是否能被j整除：如果i%j==0，则说明i不是质数
//         if(i%j==0){
//             // console.log(i,"不是质数");
//             flag = false;
//             break;
//         }
//     }
//     //判断结果（注意编写位置）
//     if(flag){
//         console.log(i,"是质数");
//     }
// }

// 第三种做法：使用break优化（数据结构：代码）和因数开平方根(算法)
// 先获取100以内所有的数
for(let i=2;i<100;i++){
    // console.log(i);
    //创建变量，保存i的状态：假设i是质数
    let flag = true;
    //检查i是否为质数
    //先获取除了i和它本身以外的所有因数
    for(let j=2;j<=i ** .5;j++){
        // console.log(j);
        //再判断i是否能被j整除：如果i%j==0，则说明i不是质数
        if(i%j==0){
            // console.log(i,"不是质数");
            flag = false;
            break;
        }
    }
    //判断结果（注意编写位置）
    if(flag){
        console.log(i,"是质数");
    }
}




