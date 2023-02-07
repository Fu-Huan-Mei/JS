/*第一遍理解记忆：2023-1-18*/
/*对象的复制：产生新对象*/
//1、特点：复制要产生新对象
const arr = ["孙悟空","猪八戒",'沙和尚'];
const arr2 = arr;
console.log(arr);
console.log(arr2);
arr2[2]="唐僧";
console.log(arr2);
//2、复制：当调用slice时，会产生一个新数组，从而完成对数组的浅复制
const arr3 = arr.slice();
console.log(arr3);
//3、浅拷贝(shallow copy):
//（1）概述：通过对对象的拷贝都是浅拷贝；只对对象的浅层复制（只复制一层）；
//如果对象中存储的数据是原始值，那拷贝的深浅则不重要；只会对对象本身复制，不会复制对象中的属性或元素
const arr4 = [{name:"孙悟空"},{name:"猪八戒"}];
//（2）语法：数组.slice()
const arr5 = arr4.slice();
console.log(arr5);//[ { name: '孙悟空' }, { name: '猪八戒' } ]
//4、深拷贝(deep copy)：
//（1）概述：不仅复制对象本身，还复制对象的属性和元素；因为性能问题，使用不建议使用深拷贝
//（2）语法：structuredClone(数组)
const arr6 = structuredClone(arr4);

console.log(arr6);//[ { name: '孙悟空' }, { name: '猪八戒' } ]