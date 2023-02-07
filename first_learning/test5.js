/*2022-11-21
1、条件分支语句（switch语句）：switch (条件表达式) { case 表达式：语句...} 
执行流程：执行时会依次将case后的表达式和switch后的条件表达式的值会依次进行全等比较:True,执行case后的所有代码；False，  ；break：退出当前循环;default
2、循环语句：while（条件表达式）{循环体}；创建需要 3要件；先判断后执行
3、循环语句：do while语句；先执行后判断
4、循环语句：for(初始化表达式；条件表达式；更新表达式){语句......};结构更加清晰；初始化表达式只执行了一次；（）中的内容可以省略，但是分号（；）不能省略
执行流程：（1）先执行初始化表达式；（2）再执行条件表达式判断是否执行循环：如果为true，则执行循环语句；如果为false，则终止循环；（3）最后才执行更新表达式，更新表达式执行结束以后继续重复（2）这个步骤

*/
//for循环的练习1：打印1~100之间奇数之和
// //1、打印~100之间的数
// //4、创建一个变量来保存奇数之和
// var sum = 0;//初始化依次即可
//for(var i = 1;i <= 100;i++){
//     //2、判断i是否为奇数：不能被2整除的数就是奇数
//    if(i % 2 != 0){
//         //console.log(i);
//         sum = sum + i;  
//     } 
// }
// //3、求奇数之和
// console.log('sum=',sum);

//for循环的练习2：打印1~100之间奇数之和

// for(var i =0,sum = 0;i<=100;i++){
//     if(i % 2 != 0){
//         //console.log(i)
//         sum = sum + i;
//     }
// }
// console.log('sum=',sum)
//for循环的练习2：打印1~100之间7的倍数之和和个数(先分析，再写代码实现)
// count = 0;
// sum = 0;
// for(i=7;i<=100;i=i+7){
//     count = count + 1
//     sum = sum + i
// }
// console.log('sum=',sum)
// console.log('count=',count)
// var sum = 0;
// var count = 0;
// for(i=1;i<100;i++){
//    if(i % 7 == 0){
//     sum = sum + i
//     count = count + 1
//    }
// }
// console.log('sum=',sum);
// console.log('count=',count);
//练习：水仙花数
// //1、打印所有的三位数
// for(i=100;i<1000;i++){
//     //2、分别获取三位数的百位、十位、个位(难点：难想到)
//     //先求百位数字
//     var hundred = parseInt(i / 100);
//     //获取十位数字
//     var ten = parseInt( (i - hundred * 100) / 10);
//     //获取个位数
//     var a = i % 10;
//     //3、判断i是否为水仙花数
//     if(hundred * hundred * hundred+ten * ten * ten+a * a * a == i){
//         console.log(i);
//     }
// }
//练习：判断一个数是否为质数
// var num = 3;
// if(num <= 1){
//     console.log('该值不合法')
// }else{
//     //创建一个变量来保存当前数的状态:默认当前数是质数(重点)
//     flag = true;
//     //判断num是否为质数
//     //获取2~num之间的数
//     for(var i = 2;i < num;i++){
//         //num不能被所有的i整除，才说明不是质数
//         if(num % i == 0){
//             flag = false;
//         }
//     }
//     //如果num是质数则输出
//     if(flag){
//         console.log(num,'是质数');








//创建一个10次的while循环
//1、初始化表达式；
// var i = 0;
// //2、创建一个循环，定义条件表达式
// while(i < 10){
// //3、设置更新表达式
//     console.log(i);
//     i += 1;
// }

//死循环（不要运行）
// for(var i = 0;i < 10;i += 1){
//     //循环体
//     console.log(i)
// }
// //练习1:年利率
// var money = 1000;
// //定义一个计数器：计算代码执行次数
// count = 0;
// //while循环，定义每年的钱数
// while(money < 5000){
//     money = money * 1.05;
//     count++
// }
// console.log(money,count)



// do{
//     console.log(n++)
// }while(n < 10)
// //1、创建一个初始化变量
// var n = 0;
// //2、在循环中设置一个条件表达式
// while(n < 10){
// //3、定义一个更新表达式，每次更新初始化变量
//     //console.log(n++);
// }

// var i = 9;
// while(i <= 10){
//     console.log(n--);
//     break;

// }
// var n = 1;
// console.log(n++);
// console.log(n++); 
// console.log(n++ );
// console.log(n++ );
// console.log(n++ );
// var num = 3;
// if(num == 1){
//     console.log('一')
// }else if(num == 2){
//     console.log('二')
// }else if(num == 3){
//     console.log('三')
// }
// 
// var num = 'abc';
// switch(num){//条件清楚
//     case 1:
//         console.log('一');
//         //使用break会退出switch语句
//         break;
//     case 2:
//         console.log('二');
//         break;
//     case 3:
//         console.log('三');
//         break;
//     default:
//         console.log('非法数字!');
//         break;
// }
//练习1 :6x / 10 = 6;7x / 10 = 7;8x / 8 = 10

// switch(parseInt(score/10)){
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log('合格');
//         break;
//     default:
//         console.log('不合格');
//         break;    
// }
// var score = 55;
// switch(true){
//     case score >= 60:
//         console.log('合格');
//         break;
//     default:
//         console.log('不合格');
//         break;    
// }