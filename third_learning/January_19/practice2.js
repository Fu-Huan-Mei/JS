/*数组去重方法二*/
//获取数组中的元素??不懂代码的含义
// const arr = [1,2,1,3,2,4,5,5,6,7];
// for(let i=0;i<arr.length;i++){
//     //indexOf()：获取元素在数组中第一次出现的索引
//     const index = arr.indexOf(arr[i],i+1);
//     //判断出现重复内容
//     //splice()方法：
//     if(index !== -1){
//         arr.splice(index,1);
//         i--; 
//     }
// } 
// console.log(arr);

/*数组去重方法三*/
const arr1 = [1,2,1,3,2,4,5,5,6,7];
const newArr = [];
for(let ele of arr1){
    if(newArr.indexOf(ele) === -1){
        newArr.push(ele);
    }
}
console.log(newArr);