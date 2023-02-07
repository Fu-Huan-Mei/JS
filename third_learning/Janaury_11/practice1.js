/*练习1：编写一个程序：用于输入一个数值，判断一个数是奇数还是偶数*/
//prompt()可以获取用户输入内容，以字符串形式返回，可以通过变量来接收
let num = "hhhh";
//验证用户输入是否合法：只有有效数字才判读奇数 偶数
//不能使用==或===来检查一个值是否是NaN,可以用isNaN()函数来检查一个是否为NaN
//错误
// if(num===NaN){
//     console.log("num是NaN");
// }
//正确方式:num%1 !=0 用来判断小数的情况
if(isNaN(num) || num%1 != 0){
    console.log("你的输入有误，请输入整数！");
}else{
    //通过程序显示该数时技术还是偶数
    if(num%2===0){
        console.log(num+"是偶数");
    }else{
        console.log(num+"是奇数");
    }

}
