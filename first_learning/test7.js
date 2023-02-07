/*2022-11-23
1、for循环嵌套
2、break和continue
(1)break关键字：退出switch或循环语句;label标签终止指定循环
(2)continue：跳过当次循环，默认值会对离它最近的循环起作用
*/
//质数练习的优化：
// for(var i = 0;i < 5;i++){
//     if(i==2){
//         continue;//跳过当次循环
//     }
//     console.log(i);   
// }
// console.log('-----------------------------------------')
// for(var i = 0;i < 5;i++){
//     if(i==2){
//         break;//跳过当前整个循环
//     }
//     console.log(i);   
// }

// for(var i=0;i < 5;i++){
//     console.log(i);
//     break;
// }
// for(var i = 0;i < 5;i++){
//     console.log('@外层循环',i)
//     for(var j = 0;j < 5;j++){
       
//         console.log("@内层循环",j);
//         continue;
//     }
// }
// console.log('-----------------------------------------')
// for(var i = 0;i < 5;i++){
//     console.log('@外层循环',i)
//     for(var j = 0;j < 5;j++){
        
//         console.log("@内层循环",j);
//         break;
//     }
// }
// //创建for循环建立乘法表的高度
// for(var i=1;i <= 9;i++){
//     //console.log(i)
//     //创建一个内层循环；控制图形宽度
//     for(var j=1;j<=i;j++){
//         //console.log(j)
//         console.log(j,'*',i,'=',j*i)//难点：区分乘号两边到底哪个是高，哪个是宽：j就是宽，i就是高
//     }
   
// }
//质数练习
//测试如下程序的性能：在程序执行前，开启计时器：console.time("计时器的名字")可以用来开启计时器

    //1、打印1~100之间的数
    for(var i = 2;i <= 100;i++){
        //3、创建一个布尔值，用来保存结果，默认i是质数
        var flag = true;
        //2、判断i是否为质数
        //（1）先要找出除了1和i以外的其他数，能否被i整除，获取1~i之间所有的数
        //优化2：i开2次开根：36：1 36、2 18、3 12、4 9、6 6、又开始重复前面的值：4 9、
        //可以通过Math.sqrt()对一个属进行开方
        for(var j = 2;j <= Math.sqrt(i);j++){
            if(i % j == 0){
                //(2)如果进入判断，则证明i不是质数，修改flag值为false
                flag = false;
                //优化1：一旦进入判断，则证明i不可能是质数，则剩余的数就不用进行：i%j==0（提高性能，缩短运行时间）
                break;
            }
            }
        //注意位置(前后缩进问题)
        if(flag){
            console.log(i,'是质数');
        }    
    }
    