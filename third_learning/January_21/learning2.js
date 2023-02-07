/*第一次理解记忆：2023-1-21*/
/*高阶函数 */
//创建一个类
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// //创建类的实例
// const personArr =[
//     new Person("孙悟空",17),
//     new Person("沙和尚",8),
//     new Person("沙师弟",39),
// ]


//一个函数的参数也可以是函数
//回调函数：如果将函数作为参数，则称该函数为回调函数(callback)

//通常回调函数都是匿名函数
// function fn(a){
//     // return true;// [Person { name: '孙悟空', age: 17 },Person { name: '沙和尚', age: 8 },Person { name: '沙师弟', age: 39 }]
//     // return false;//[]
//     //arr[i].age >= 18;
//     //arr[i].age > 60;
//     //arr[i].age > n;
//     //arr[i] % 2 ==== 0;
//     //arr[i].age < 18
//     return a.age < 18;
// }
/*高阶函数：
1、概念：如果一个函数的参数或返回值是函数，则这个函数是高阶函数
2、作用：将函数作为参数，可以对另一个函数动态传递代码
3、情况：
（1）函数作为参数
 */
// r = filter(personArr,a=>a.name === "孙悟空");
// r = filter(personArr,a=>a.age = 18);
// const arr = [1,2,3,4,5,6,7,8,9,10];
// r = filter(arr,a=>a%2===0);
// console.log(r);
//（2）函数作为返回值
/*希望在someFn()函数执行时，可以记录一条日志,
在不修改原函数的基础上，为其增加记录日志的功能
通过高阶函数，动态生成一个新函数*/
function someFn(){   
    return "hello";
}
function outer(cb){
    //箭头函数
    return ()=>{
        console.log("记录日志~~");
        const r = cb();
        return r;
    };
}
let r = outer(someFn);
// console.log(r);
function test(){
    console.log("test~~~");
    return "test";
}
let newTest = outer(test);
console.log(newTest);




