/*2023-1-12：第一遍理解记忆*/
/*变量和对象*/
//1、修改对象：如果有其他变量指向该对象，则所有指向该对象的变量都会受到影响
let obj = {
    name:"孙悟空"
}
let obj2 = obj;
obj2.name = "猪八戒";//修改对象
console.log(obj2);//{ name: '猪八戒' }
console.log(obj);//{ name: '猪八戒' }
//2、修改变量：只会影响当前的变量
obj2 = null;//修改变量
console.log(obj2);//null
console.log(obj);//{ name: '猪八戒' }
obj2 = {};//修改变量
obj2.name = "沙师弟";
console.log(obj2);//{ name: '沙师弟' }
console.log(obj);//{ name: '猪八戒' }
//3、const:使用变量存储对象时，很容易因为改变变量指向的对象，提高代码的复杂度；所以通常情况下，
//声明存储对象的变量时都会使用const
const obj3 = {
    name:"孙悟空"
}
const obj4 = obj3;
console.log(obj3 == obj4);//true
//4、注意：const只是禁止变量重新赋值，不会影响对象的修改
obj3.name = "观世音";
console.log(obj3);//{ name: '观世音' }