/*2022-12-2


*/
//数组中有几个元素，回调函数就会执行几次，每次执行时，浏览器会将遍历到的元素以实参的形式传递进来
// function fun(){   
// }
// var arr = ['hello',1,2,4,5]
// arr.forEach(function(a,b,c){console.log('a=',a,b,c)});

// arr = arr.slice(-2,-1);
// console.log(arr);
// var arr = ['hello',1,2,4,5];
// result = arr.splice(0,1,'hhhh');
// console.log(result);
// console.log(arr);

//数组的去重练习
// var arr = [1,2,3,2,1,3,4,2,5];
// //获取数组中的每一个元素
// for(var i = 0; i < arr.length;i++){
//     //console.log(arr[i]);
//     //获取除了外层循环获得的数组中元素的其他元素
//     for(var j = i + 1;j < arr.length;j++){
//         //console.log(arr[j]);
//         //判断两个元素的值是否相等
//         if(arr[i] == arr[j]){
//             //证明出现了重复的元素，删除arr[j]
//             arr.splice(j,1);
//             //当删除了当前j所在的元素以后，后边的元素会自动补位，此时将不会再比较这个元素，但是我需要再比较一次j的位置的元素
//             //使j--，但是注意：只有删除了一个元素以后才会再比较一次删除位置的元素，所以必须写在if语句的里面（关键点）
//             j--;
//         }
//     }
// }
// console.log(arr);

// var arr1 = [1,2,3];
// var arr2 = ['a','b','c'];
// var result = arr1.concat(arr2);
// console.log(result);

// var arr = [1,2,3,4];
// var result = arr.join('*');
// console.log(arr);
// console.log(result);
// var arr = [1,2,3,4];
// arr.reverse();
// console.log(arr);
// var arr = [1,2,3,4,11];
// arr.sort();
// console.log(arr);
// arr = [4,5,36];
// arr.sort(function(a,b){
//     console.log('a=',a);
//     console.log('b=',b);
// });
// console.log(arr);
arr = [1,5,7,8,2,3,0,1];
arr.sort(function(a,b){
    //默认升序排列
    // if(a > b){
    //     //返回正数表示前后2个数交换位置
    //     return 1;
    // }else if(a < b){
    //     //返回负值表示前后2个数不换位置
    //     return -1;
    // }else{
    //     //返回负值表示前后2个数不换位置
    //     return 0;
    // }
    //升序排列
    //return a - b;
    //降序排列
    return b - a;
});
console.log(arr);