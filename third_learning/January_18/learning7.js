/*第一遍理解记忆：2023-1-18*/
/*10、数组中的方法*/
//（1）Array.isArray()：检查一个对象（作为参数）是否是数组
console.log(Array.isArray(["name:Bob",true,null,undefined]));//true
console.log(Array.isArray("hello"));//false
//（2）at() ：根据索引获取数组中指定的元素;可以接收负值作为参数
const arr = ["孙悟空","猪八戒","沙和尚","唐增","白骨精"];
console.log(arr.at(-1));//白骨精
console.log(arr[arr.length-1]);//白骨精
//（3）concat()：连接两个或多个数组；非破坏性方法，不会影响原数组，而是返回一个新的数组
const arr2 = [1,2,3,4];
arr3 = arr.concat(arr2);
console.log(arr3);
//（4）indexOf()：
//作用：获取元素在数组中第一次出现的索引
let r = arr.indexOf("孙悟空");
console.log(r);//0
//参数：要查询的元素和查询的起始位置
//（5）lastIndexOf()：
//作用：元素在数组中最后一次出现的位置
let r1 = arr.lastIndexOf("孙悟空");
//返回值：找到则返回元素的索引，没有找到则返回-1
console.log(r1);//0
//（6）join()：
//作用：将一个数组中的元素连接为一个字符串 
let r2 = arr.join("&");
console.log(r2);
//参数：指定一个字符串作为连接符
//（7）slice：前包后不包
//作用：截取数组（非破坏性方法）
//参数：截取的起始位置（包括该位置）、截取的结束位置（不包括结束位置）；
//第二个参数可以省略不写，如果省略则会一直截取到最后；
//索引可以是负值；
//如果将两个参数全都省略，则可以对数组进行浅拷贝（浅复制）
let r3 = arr.slice(0,4);
console.log(r3);


