/*2023-1-12：第一遍理解记忆*/
/*对象的字面量*/
//1、创建对象:使用{}来创建对象,可以直接向对象中添加属性
let obj ={
    name:"孙悟空",
    age:18,
    gender:"男",
};
// console.log(obj);
//2、语法：{ 属性名：属性值，【属性名】：属性值 }
let mySymbol = Symbol();
let obj2 = {
    name:"孙悟空",
    age:18,
    gender:"男",
    [mySymbol]:"特殊的值"
}
// console.log(obj2);

/*枚举对象中的属性:for in 语句*/
//1、含义：将对象中的所有属性全部获取
//2、语法：for(let propName in 对象){ 循环体 }
let obj3 ={
    name:"孙悟空",
    age:18,
    gender:"男",
    addres:"花果山"
};
//3、执行次数：有几个属性就会执行几次，每次执行时，都会将一个属性名赋值给变量
for(let propName  in obj3 ){
    // console.log(propName);//name age gender address
    console.log(obj3[propName]);//孙悟空  18  男  花果山
}
//4、注意：并不是所有属性都可以枚举
let obj4 ={
    name:"孙悟空",
    age:18,
    gender:"男",
    addres:"花果山",
    [Symbol]:"测试的属性"//符号添加的属性不可枚举
};

