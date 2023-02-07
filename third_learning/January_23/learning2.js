/*第一遍理解记忆：2023-1-23 */
/*数组的方法*/
const arr = ["m","b","c","g","s"];
console.log("排序前：",arr);//[ 'm', 'b', 'c', 'g', 's' ]
//1、sort()：
//（1）概述：用来对数组进行排序（会改变原数组），默认对数组升序排列
const r  = arr.sort();
console.log("排序后：",arr);// [ 'b', 'c', 'g', 'm', 's' ]
//（2）注意：sort默认会按照Unicode编码排序，如果直接通过sort()方法对数字进行排序，可能会得到一个错误的结果
const arr1 = [2,8,1,5,0,3];
console.log("排序前：",arr1);//[ 2, 8, 1, 5, 0, 3 ]
const r1  = arr1.sort();
console.log("排序后：",arr1);//[ 0, 1, 2, 3, 5, 8 ]
//（3）参数：回调函数作为参数，通过回调函数来指定排序规则
arr1.sort((a,b) => a - b);//升序
arr1.sort((a,b) => b - a);//降序
console.log("降序：",arr1);//降序：[ 8, 5, 3, 2, 1, 0 ]
//2、forEach()对数组进行遍历
//（1）概述：数组中有几个元素，回调函数就会被调用几次；每次调用都会将数组中的元素作为参数传递
const arr2 = ["m","b","c","g","s"];
//（2）参数：element表示当前元素、index表示当前元素的索引、array表示被遍历的数组
arr2.forEach((element,inex,arr) => {
    // console.log(123);
    console.log(element);
})
arr2.forEach((element,index) => console.log(element,index));
//3、filter()非破坏性方法，不会影响原数组
//（1）概述：将数组中符合条件的元素进行过滤，保存到新数组中返回
arr3 = [1,2,3,4,5,6,7,8,9];
//获取数组中所有偶数
//（2）参数：回调函数作为参数，为每一个元素去调用回调函数，并根据返回值决定是否将元素添加到新数组中
let r3 = arr3.filter(ele => ele % 2 == 0);
console.log(r3);//[ 2, 4, 6, 8 ]
//4、map()方法
//（1）概述：根据当前数组中的元素生成新数组
//（2）参数：回调函数，回调函数的返回值会作为新数组中的元素
arr4 = [1,2,3,4,5,6,7,8,9];
let r4 = arr4.map(ele => 123);
console.log(r4);
r4 = arr4.map(ele => ele * 2);
console.log(arr4);
r4 = arr4.map(ele => "<li>" + ele + "</li>");
console.log("新数组:",r4);
console.log("原数组：",arr4);
//5、reduce()方法
//（1）概述：将一个数组中的所有元素合并为一个值
//（2）参数：
//第一个：回调函数，通过回调函数函数来指定合并规则
//第二个：可选参数，指定初始值
r5 = arr4.reduce ((a,b) => {//r5 = arr4.reduce((a,b) => a+b )
    // console.log(a,b);
    return a + b;
})
console.log(r5);//45
r5 = arr4.reduce((a,b) => a+b,5)
console.log(r5);//第二个参数5表示初始值

