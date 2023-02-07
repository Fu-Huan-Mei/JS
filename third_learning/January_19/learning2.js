/*第一遍理解记忆：2023-1-19*/
/*数组的方法*/
const arr = ["猪八戒","孙悟空","沙和尚"];
//1、push()：向数组的末尾添加一个或多个元素,并返回新数组的长度
arr1 = arr.push("唐僧");
console.log(arr1);//4
console.log(arr);//[ '猪八戒', '孙悟空', '沙和尚', '唐僧' ]
//2、pop()：删除数组的最后一个元素，并返回数组的删除元素
arr2 = arr.pop();
console.log(arr2);//唐僧
console.log(arr);//[ '猪八戒', '孙悟空', '沙和尚' ]
//3、unshift()：向数组的开头添加一个或多个元素，并返回新的长度
arr3 = arr.unshift("牛魔王");
console.log(arr3);//4
console.log(arr);//[ '牛魔王', '猪八戒', '孙悟空', '沙和尚' ]
//4、shift():删除并返回数组的第一个元素
arr4 = arr.shift();
console.log(arr4);//牛魔王
console.log(arr);//[ '猪八戒', '孙悟空', '沙和尚' ]
//5、splice()：
//（1）作用：删除、添加、插入和替换数组中的元素
//（2）参数：删除的起始位置和删除的数量
arr5 = arr.splice(1,3);
//（3）返回值：返回被删除元素
console.log(arr5);//[ '孙悟空', '沙和尚' ]
console.log(arr);//[ '猪八戒' ]
r = arr.splice(1,3,"红孩儿");
console.log(r);//[]
console.log(arr);//[ '猪八戒', '红孩儿' ]
//6、reverse()：反转数组
r1 = arr.reverse();
console.log(arr);//[ '红孩儿', '猪八戒' ]
console.log(r);//[ ]


