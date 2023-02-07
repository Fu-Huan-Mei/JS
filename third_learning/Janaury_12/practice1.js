/*练习1：求100以内3的倍数*/
//打印100以内所有的数
let count = 0;//计数器
let r = 0;
for(let i=1;i<100;i++){
    //判断该数是否为3的倍数
    if(i % 3 == 0){
        // console.log(i);
        count++;
        r = r + i;
    }
}
// console.log(count);
// console.log(r);
count = 0;//计数器
r = 0;
for(let i=3;i<100;i+=3){
    count++;
    r += i;
}
// console.log(count);
// console.log(r);

/*练习2：求1000以内的水仙花数*/
//求出1000以内所有的数
/*方法一*/
count = 0;
for(let i=100;i<1000;i++){
    // console.log(i);
    //判断i是否为水仙花数
    //求出百位数
    a = parseInt(i / 100);
    // console.log(i,"-->",a);
    //求出十位数
    b = parseInt((i - a * 100) / 10)
    // console.log(i,"-->",b);
    //求出个位数:c = i % 10
    c = (i - a * 100) % 10;
    // console.log(i,"-->",c);
    if(a**3+b**3+c**3==i){
        // console.log(i);
        count++;
    }
}
// console.log(count);
/*分析：
100 百位数是1 十位数是0 个位数是0
百位数：100 / 100 = 1 101/100=1.01 
十位数：228-200=28 / 10
个位数：228 - 2* 100 = 28
28 % 10*/
/*方法二:利用字符串*/
count = 0;
for(let i=100;i<1000;i++){
    strI = String(i);
    a = strI[0];
    b = strI[1];
    c = strI[2];
    if(a**3+b**3+c**3==i){
        // console.log(i);
        count++;
    }
}
// console.log(count);

/*练习3：质数练习*/
//获取用户输入的数值
let num = 9;
//记录num的状态，默认是true即num是质数
let = flag = true;
//获取除了1和它本身的因数
for(let i = 2;i<num;i++){
    // console.log(i);
    //判断num是否可以被所有的i整除
    //如果num % i == 0,说明num不是质数
    if(num % i == 0){   
        flag = false;
    }
}
if(flag){
    console.log(num,"是质数");
}else{
    console.log(num,"不是质数");
}
/* 分析：
9 / 8 = 1...1  
9 / 7 = 1...2 
9 / 6 = 1...3
9 / 5 = 1...4
9/4 = 1...5
9 / 3 = 3...0
如果num % i == 0,说明num不是质数
如果num % i != 0,说明i是质数*/
