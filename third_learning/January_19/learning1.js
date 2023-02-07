/*第一遍理解记忆：2023-1-19*/
/*1、展开运算符：
//（1）概述：可以将一个数组中的元素展开到另一个数组中或作为函数的参数传递；通过它也可以对数组进行浅复制*/
const arr = ["孙悟空","猪八戒","唐僧"];
const arr2 = arr.slice();
console.log(arr===arr2);//false
const arr3 = [arr[0],arr[1],arr[2]];
console.log(arr3);//[ '孙悟空', '猪八戒', '唐僧' ]
/*（2）语法：...数组 */
const arr4 = ["孙悟空",...arr,"猪八戒","唐僧"];
console.log(arr4);//[ '孙悟空', '孙悟空', '猪八戒', '唐僧', '猪八戒', '唐僧' ]
//作为函数的参数传递
function sum(a,b,c){
    return a+b+c;
}
const arr5 = [10,20,30];
// let r= sum(arr5[0],arr5[1],arr5[2]);
r = sum(...arr5);
console.log(r);
/*2、对象的复制： 
 （1）概述：将被复制对象的属性复制到目标对象里，并将目标对象返回*/
const obj = {name:"孙悟空",age:18};
/*（2）语法：Object.assign(目标对象，被复制的对象) */
const obj2 = Object.assign({},obj);
console.log(obj2);//{ name: '孙悟空', age: 18 }
const obj3 = {address:"花果山",age:28};
Object.assign(obj3,obj);
console.log(obj3);//{ address: '花果山', age: 18, name: '孙悟空' }
//（3）展开运算符：复制对象
const obj4 = {...obj};//将obj中的属性在新对象中展开
console.log(obj4);//{ name: '孙悟空', age: 18 }
const obj5 = {address:"花果山",...obj};//将obj中的属性在新对象中展开
console.log(obj5);//{ address: '花果山', name: '孙悟空', age: 18 }