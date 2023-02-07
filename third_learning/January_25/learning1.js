/*第一遍理解记忆：2023-1-25*/
/*对象的解构*/
const obj = {name:"孙悟空",age:18,gender:"男"};
// let {name,age,gender} = obj;  //声明同时解构对象
let name,age,gender;//先声明
// {name,age,gender} =obj//再解构，会报错
({name,age,gender} =obj);//结构时加上（）就不会报错了
console.log(name); //孙悟空
console.log(age); //18
console.log(gender);// 男
let {a,b,c} = obj;
console.log(a,b,c);//undefined undefined undefined
let {name:a1,age:b1,gender:c1,address:d1="花果山"} = obj;
console.log(a1,b1,c1,d1);//孙悟空 18 男 花果山