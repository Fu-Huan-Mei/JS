 /*2023-1-11：第一遍理解记忆*/
/*流程控制语句*/
//1、含义：改变程序执行顺序
//2、分类（1）条件判断语句 （2）条件分支语句 （3）循环语句

/*条件判断语句 ：if语句*/
//1、语法：if（条件表达式）  语句
//2、执行流程：先对if后的条件表达式进行求值判断：true，执行if后语句；false，不执行
if(true)
//console.log('哈哈哈');//哈哈哈
//3、注意：if语句只会控制紧随其后的那一行代码，如果希望控制多行语句，则使用{}将语句括起来
a = 10;
if(a>10){
    console.log(10);//不执行
}
//4、非布尔值：如果if后的表达式不是布尔值，则转换为布尔值再计算
if(100){
    console.log("你猜我执行吗？");
}

/*条件分支语句：if-else语句*/
//1、语法：if(条件表达式){ 语句...... }else{ 语句...... }
//2、执行流程：先对条件表达式进行求值判断：true,执行if后的语句；false，执行else后的语句
let age = 50;
if(age > 60){
    console.log("你退休了！");
}else{
    console.log("你还没退休！");
}

/*if-else if-else语句 */
//1、语法：if(条件表达式){ 语句... }else if(条件表达式){ 语句... }else{ 语句... }
//2、执行流程：自上向下依次对if后的条件表达式进行求值判断：true，执行当前if后的语句，执行完毕语句结束；false，继续向下判断，直到找到true为止；
//如果所有条件表达式都是false，则执行else后的语句
age = 100;
if(age>=100){
    console.log("你是一个长寿的人！")
}else if(age>=60){
    console.log("你已经退休了！")
}else if(age>=30){
    console.log("你已经不如中年了！")
}else if(age>=18){
    console.log("你已经成年了！")
}else{
    console.log("你还未成年！")
}
//3、注意：if-else if-else语句只会有一个代码块被执行：一旦执行代码块，则下边的条件都不执行了，注意条件的编写顺序
age = 60;
if(age>=18 && age<=30){
    console.log("你已经成年了！");
}else if(age>=30 && age<=60){
    console.log("你已经步入中年了！");
}else{
    console.log("你真大！");
}

/*switch语句*/
//1、语法：switch(表达式){ case 表达式：代码...break    case 表达式：代码...break    case 表达式：代码...break   default:代码...break}
//2、执行流程：switch语句再执行时，会依次将switch后的表达式和case后的表达式进行全等比较：
//true，则自当前case处开始执行代码，只要是当前case后的代码都要执行;false，继续比较其他case后的表达式，直到找到true为止；
//如果所有比较都是false，则执行default
let num = 1;
switch(num){
    case 1:
        console.log("一");
        break;//break用来结束switch语句
    case 2:
        console.log("二");
        break;
    case 3:
        console.log("三");
        break;
}
//3、switch与if的不同点：switch做全等比较时，结构比较清晰
// if(num==1){
//     console.log("一");
// }else if(num==2){
//     console.log("二");
// }else if(num==3){
//     console.log("三");
// }else{
//     console.log("其他");
// }

