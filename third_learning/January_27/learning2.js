/*第一遍理解记忆：2023-1-27 */
/*set集合：不重复的集合-内建对象
1、功能：创建集合，功能与数组类似，但是不同点在于set中不能存储重复的数据*/
//2、创建Set
//（1）new Set()
//（2）new Set([...])
const set = new Set();
//向set中添加数据
//3、方法
//（1）size获取数量
//（2）xxx.add()添加元素
//（3）xxx.has()检查元素
//（4）xxx.delete()删除元素
set.add(10);
set.add("孙悟空");
set.add(10);
console.log(set);//Set(2) { 10, '孙悟空' }
//遍历集合Set
for(const item of set){
    console.log(item);//10  孙悟空
}
const arr = [...set];
console.log(arr);//[ 10, '孙悟空' ]
const arr2 = [123,4,2,5,0,1,2,4];
const set2 = new Set(arr2);//利用集合给数组去重
console.log(set2);//Set(6) { 123, 4, 2, 5, 0, 1 }
console.log([set2]);//[ Set(6) { 123, 4, 2, 5, 0, 1 } ]
console.log([...set2]);//[ 123, 4, 2, 5, 0, 1 ]

