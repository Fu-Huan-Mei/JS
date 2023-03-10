/*第一次理解记忆：2023-1-21 */
/*冒泡排序 
1、概述：比较数组中相邻的两个元素，再根据大小来决定是否交换它们的位置
2、特点：适合小数据，不适合大数据*/
//有一个数组：[9,1,3,2,8,0,5,7,6,4]
/*方法一：冒泡排序：升序排列：比较数组中相邻的两个元素，再根据大小来决定是否交换它们的位置
例子：第一次比较：1,3,2,8,0,5,7,6,4,9*/
const arr = [9,1,3,2,8,0,5,7,6,4];
for(let j = 0;j<arr.length-1;j++){//数组中有几个元素就排几次顺序
    for(let i=0;i<arr.length-1-j;i++){//使用arr.length-1-j来提高代码的运行性能
        //arr[i]表示前边的元素；arr[i+1]表示后边的元素
        if(arr[i] > arr[i+1]){
            //需要交换两个元素的位置
            let temp = arr[i]; //创建一个临时变量，来存储arr[i]的变量
            arr[i] = arr[i+1];//将arr[i+1]的值赋值给arr[i]
            arr[i+1] = temp;//修改arr[i+1]的值
        }
    }
}
//3、问题：


console.log(arr);
