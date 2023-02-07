/*练习2：从键盘输入小明的成绩，进行相应的奖励*/
let score = "jjjj";
if(isNaN(score) || score > 100 || score < 0){
    console.log("请输入一个合法的分数！");
}else{
    if(score==100){
        console.log("汽车一辆！");
    }else if(score >= 80 && score <= 99){
        console.log("手机一部！")
    }else if(score >= 60 && score <=79){
        console.log("参考书一本");
    }else{
        console.log("卷子10套+棍子一根！");
    }
}