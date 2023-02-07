/*练习：计算存款*/
//创建变量保存最初始的钱数
let money = 1000;
let year = 0;
while(money<5000){
    money *= 1.5;//循环每执行一次，就相当于我们存了一年
    year++;//创建计数器来保存年数
}
console.log(money);
console.log(year);
