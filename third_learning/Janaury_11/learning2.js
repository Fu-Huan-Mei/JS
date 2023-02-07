 /*2023-1-11：第一遍理解记忆*/
/*相等运算符 */
//1、==：
//（1）含义：相等运算符：比较两个值是否相等
let r = 1 == 1;
//console.log(r);//true
//（2）特点：比较不同类型的数据：先转为相同类型（通常为数值），再比较，类型转换后值相同会返回true
r = "1" == 1;
//console.log(r);//true
//（3)注意：null和undefined做相等比较：返回true
r = null == undefined;
//console.log(r);//true
//（4）注意：NaN不和任何值相等，包括它本身
r = NaN == NaN;
//console.log(r);//false

//2、===：
//（1）含义：全等运算符：比较两个值是否全等
//（2）特点：不会进行自动的类型转换：如果两个值的类型不同则直接返回false
r = 1===1;
//console.log(r);//true
r = null === undefined;
//console.log (r);//false

//3、！=
//（1）含义：不等：检查两个值是否不相等
//（2）特点：自动类型转换
r = 1!=1;
console.log(r);//false

//4、！==
//（1）含义：不全等
//（2）特点：不会自动类型转换
r = 1!==1;
console.log(r);//false
r = 1!="1";
console.log(r);//false