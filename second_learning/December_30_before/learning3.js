/*2022-12-16
1、if条件语句
（1）语法二：            
if(条件表达式){            
    语句...
}else if(条件表达式){
    语句...
}else if(条件表达式){  
    语句...
}else{
    语句...
}
(2)执行流程：先对if后的条件表达式进行判断：如果该值是true，则执行当前的语句；
如果该值是false，则继续向下判断；如果条件都不满足，则执行最后一个else后的语句
（3）防止出现死代码
2、条件分支语句（switch语句)
（1）语法：switch(条件表达式){
    case 表达式：语句  break;
    case 表达式：语句  break;
    case 表达式：语句  break;
    default:语句...break;
}
（2）执行流程：依次将case后和switch后的条件表达式的值进行全等比较:
如果比较结果是True,则开始执行该case后的所有语句，可以在case后跟着break关键字，确保只执行当前语句，不执行其他语句
如果比较结果都为False，则执行default后的语句
3、switch和if语句在功能上重复，使用时根据自己习惯选择，可以互相代替
4、while循环：先判度再执行
（1）语法：while(条件表达式){
    语句......
}
（2）执行流程：先对条件表达式进行求值判断：
如果值为true，则执行循环体循环体执行完后，继续对循环体进行判断；如果值为false，则终止循环
（3）死循环：该循环不会停止，除非浏览器关闭，在开发中慎用！会卡死电脑！可以使用break来终止循环
（4）3个要件（步骤）：创建初始化变量；在循环中设置条件表达式；定义一个更新表达式，每次更新初始化变量
5、do...while...循环：先执行后判断；保证循环体至少执行一次
（1）语法：do{
    语句...
}while(条件表达式)
（2）执行流程：先执行再判断
6、for循环在for循环中为我们提供专门位置房个表达式：初始化表达式、条件表达式、更新表达式
（1）语法：for(初始化表达式；条件表达式；更新表达式 ){  语句...   }；
（2）执行流程：先执行初始化表达式，再执行条件表达式：true，执行语句；false，终止循环；执行更新表达式；继续重复第二步
（3）初始化表达式：只执行一次
（4）for循环3个部分可以省略，也可以写在外部
*/

// for(var i = 0;i < 10;i++){
//     console.log(i);
// };
// // var i = 0;
// while(i < 10){
//     i++;
//     console.log(i);
// }
//年利率：
//定义一个变量：表示第一年的钱数
// var m = 1000;
// //定义一个计数器：表示年数
// var n = 0;
// // 定义一个while循环来计算每年的钱数
// while(m < 5000){
//     m = m * 1.05
//     //使n自增
//     n++;
// };
// console.log(m);
// console.log(n);
// // var i = 0;
// do{
//     i++;
//     console.log(i);
// }while(i<10)
// //创建初始化变量
// var i = 0;
// //在循环中设置条件表达式
// while(i < 10){
//     i++;
//     console.log(i);
// }
// var n =0;
// while(true){
//     console.log(n++);
//     if(n==10){
//         break;
//     }
// }

// 向页面中输出连续的数字
// var num = 2;
// switch(num){
//     case 1:
//         console.log('一');
//         break;
//     case 2:
//         console.log('二');
//         break;
//     case 3:
//         console.log('三');
//         break;
//     default:
//         console.log('其他');
//         break;
// }
// var age = 80;
// if(age > 100){
//     console.log('活着挺没意思！')
// }else if(age > 80){
//     console.log('你也老大不小！')
// }else if(age > 60){
//     console.log('你也退休了！')
// }else{
//     console.log('你好好工作吧！')
// }
// var age = 80;
// if(age > 60){
//     console.log('你已经退休了！')
// }else{
//     console.log('你还没退休！')
// }
// var score = 60;
// switch(parseInt(score/10)){
//     case 10:
//     case 9:
//     case 8:
//     case 7:
//     case 6:
//         console.log('合格');
//         break;
//     default:
//         console.log('不合格');
//         break;
// }
// var score = 90;
// switch(true){
//     case score >= 60:
//         console.log('合格！');
//         break;
//     default:
//         console.log('不合格！');
//         break;
// }

