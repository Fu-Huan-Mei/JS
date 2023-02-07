/*2022-12-18
1、练习
2、嵌套的for循环
*/ 
//通过for循环来输出一个长方形
//控制图形的高度
for(var i = 1;i < 6;i++){
    // console.log('*****');
    //控制图形的宽度
    for(var j=1;j < 6;j++){
        process.stdout.write('*');
        // console.log('*');
    }
    //输出一个不换行
   console.log('\n');

}

//打印1~100之间所有7的倍数的个数以及总和
//计数
// var n = 0;
// //求和
// var sum = 0;
// for(var i=1;i < 101;i++){
//     // console.log(i);
//     //判断i是否为7的倍数
//     if(i%7==0){
//         sum = sum+ i
//         // console.log(i);
//         n = n + 1
//     }
// }
// console.log('总和为：',sum);
// console.log('个数为：',n);
// //水仙花数:999
// for(var i=100;i < 1000;i++){
//     //打印所有的三位数
//     // console.log(i);
//     //百位数
//     var a = parseInt(i / 100);
//     // console.log(a);
//     //十位数(这个十位数我没有求出来)
//     var b = parseInt((i - a * 100) / 10);
//     // console.log(b);
//     //个位数
//     var c = i % 10;
//     // console.log(c);
//     //判断i是否为水仙花数
//     if(a * a * a + b * b * b + c * c * c == i){
//         console.log(i);
//     }

// }
//判断一个数是否为质数
// var num = 3;
// //判断该值是否合法
// if(num <= 1){
//     console.log("该值不合法！")
// }else{
//     //创建一个变量保存当前数的状态(难点！)：假设该数是一个质数
//     flag = true;

//     //判断num是否为质数
//     //获取2~num之间的数即有可能被整除的数
//     for(var i =2;i<num;i++){
//         // console.log(i);
//         //判断num是否被i整除
//         if(num % i == 0){
//             //如果num可被i整除，说明num一定不是质数
//             // console.log(num,'不是质数！');
//             //但是我想打印的结果是num是质数
//             flag = false;
//         }
//     }

//     if(flag){
//         console.log(num,'是质数！');
//     }
// }
