/*2023-1-12：第一遍理解记忆*/
/*对象*/
//1、数据类型：
//(1)原始值（基本数据类型）：表示单一的数据，不能表示复杂数据：Number BigInt String Boolean Null Undefined Symbol
//(2)引用数据类型：对象：JS中的一种复合数据类型，可以存储不同的数据类型
//（3）属性：对象中存储的数据称为属性
//2、创建:对象：使用new关键字
let obj = new Object();
//3、添加：向对象中添加属性：对象.属性名=属性值
obj.name = "孙悟空";
obj.age = 18;
obj.gender = "男";
//4、读取：读取对象中的属性：对象.属性名 或 对象[属性名];如果读取一个不存在的属性，则会返回undefined，但不会报错
console.log(obj.name);
console.log(obj.age);
console.log(obj.gender);
//5、修改：属性：对象.属性名=属性值
obj.name = "猪八戒";
console.log(obj.name);
//6、删除：属性:delete 对象.属性名
delete obj.name;
console.log(obj.name);//undefined
//7、检查：使用typeof来检查一个对象时，返回object
console.log(typeof obj);//object
//8、in运算符：
//（1）检察对象中是否含有某个属性
//（2）语法：属性名 in 对象名
//（3）结果：如果有则返回true，没有则返回false
console.log("name" in obj);//false

/*对象的属性*/
//1、属性名：
//（1）字符串（常用）
obj.name = "沙和尚";
console.log(obj.name);
//（2）符号：使用symbol作为属性名，必须使用symbol（因为使用symbol添加的属性，通常是不希望被外界访问到的属性）;
//但是不能直接使用特殊的属性名，需要使用[ ]
let mySymbol = Symbol();
obj[mySymbol] = "通过symbol添加属性";//添加
console.log(obj[mySymbol]);//读取
//（3）使用【】来操作属性时，可以使用变量
let str = 'address';
obj[str] = "花果山";//等价于obj["address"]="花果山"
console.log(obj[str]);//花果山
console.log(obj.str);//undefined
//2、属性值：

