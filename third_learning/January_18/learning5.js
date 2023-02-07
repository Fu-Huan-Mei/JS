/*第一遍理解记忆：2023-1-18*/
/*9、数组的遍历 */
//任何类型的值都可以成为数组中的元素
let arr = [1,"hello",true,null,undefined,{name:"孙悟空"},()=>{}];
//创建数组时尽量确保数组中存储的数据类型是相同的
arr = ["孙悟空","猪八戒","沙和尚","唐增","白骨精"];
//（1）概念：获取到数组中的每一个元素
//（2）类型
//正序遍历
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
//倒序遍历
// for(let i = arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }
//创建一个Person类，类中有两个属性name和age,再创建几个Person对象，将其添加到一个数组中
class Person{
    constructor(name,age){
        this.name = name ;
        this.age = age;
    }
}
const personArr = [
    new Person("孙悟空",18),
    new Person("沙和尚",26),
    new Person("红孩儿",15),
]
//遍历数组，打印未成年的信息
for(let i = 0;i < personArr.length;i++){
    age = personArr[i].age;
    // console.log(age);
    if(age<18){
        console.log(personArr[i]);
    }
}
