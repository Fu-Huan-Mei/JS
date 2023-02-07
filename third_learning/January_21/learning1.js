/*第一次理解记忆：2023-1-21*/
/*封装函数：把代码封装到一个函数中，就可以重复使用*/
// const arr = [9,1,3,2,8,0,5,7,6,4];
// const arr2 = [9,8,7,6,5,4,3,2,1];
//把代码封装到一个函数中，就可以重复使用
// function sort(arr){
//     //取出一个元素
//     for(let i=0;i<arr.length;i++){
//         // console.log(arr[i]);
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] > arr[j]){
//                 //交换两个元素的位置
//                 let temp = arr[i]; 
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }
// sort(arr);
// console.log(arr);
// sort(arr2);
// console.log(arr2);

//把代码封装到一个函数中，就可以重复使用
// function sort(array){
//     //对数组进行浅复制（非破坏性方法）
//     // const arr = [...array];//方法一
//     const arr = array.slice();//方法二
//     //取出一个元素
//     for(let i=0;i<arr.length;i++){
//         // console.log(arr[i]);
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i] > arr[j]){
//                 //交换两个元素的位置
//                 let temp = arr[i]; 
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let r = sort(arr);
// console.log(arr);
// console.log(r);

//创建一个类
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
//创建类的实例
const personArr =[
    new Person("孙悟空",17),
    new Person("沙和尚",8),
    new Person("沙师弟",39),
]
//filter()函数对数组进行过滤
// function filter(arr){
//     const newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].age < 18){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// r = filter(personArr);
// console.log(r);
/*小问题： 目前函数只能过滤出数组中age属性小于18的对象，但是不知道是否有age属性
希望过滤更加灵活：eg：过滤数组中age大于18的对象、过滤数组中name为xxx的对象、
过滤数组中的偶数、过滤数组中的奇数等等*/
function filter(arr,cb){
    const newArr = [];
    // console.log("-->",cb);
    for(let i=0;i<arr.length;i++){
       
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//回调函数：如果将函数作为参数，则称该函数为回调函数(callback)
function fn(a){
    // return true;// [Person { name: '孙悟空', age: 17 },Person { name: '沙和尚', age: 8 },Person { name: '沙师弟', age: 39 }]
    // return false;//[]
    //arr[i].age >= 18;
    //arr[i].age > 60;
    //arr[i].age > n;
    //arr[i] % 2 ==== 0;
    //arr[i].age < 18
    return a.age < 18;
}
//一个函数的参数也可以是函数
//回调函数：如果将函数作为参数，则称该函数为回调函数(callback)
r = filter(personArr,fn);
console.log(r);


