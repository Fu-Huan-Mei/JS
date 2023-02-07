/*垃圾回收(Garbage Collection)*/
//1、概述：程序运行一段时间后，也会产生垃圾;该对象无任何变量对其引用
let obj = {name:"孙悟空"};
console.log(obj);//{name:"孙悟空"};
obj = null;
console.log(obj);//null
//2、垃圾结果：垃圾对象的存在，会严重影响程序的性能
//3、垃圾回收机制：JS解释器会自动回收垃圾;可以将不再使用的变量设置为null
