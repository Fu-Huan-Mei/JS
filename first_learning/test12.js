//2022-12-1
/*
1、构造函数
2、原型：prototype:每创建一个函数，解析器都会向函数中添加一个属性prototype,这个属性对应着一个对象，这个对象就是我们所谓的原型对象；
当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，可以通过__proto__来访问该属性
原型对象就像一个公共区域，所有同一个类的实例都可以访问到这个原型对象，我们将对象中
3、原型对象也是对象，也有原型：当使用该对象的方法或属性时，会先在自身中找......
4、toString()
5、垃圾回收（GC）：程旭运行过程中会产生垃圾，会导致程序运行速度过慢
（1）垃圾：当一个对象没有任何变量或属性对它进行引用，此时我们将永远无法操作该对象，就会产生垃圾，在js中拥有垃圾回收机制，会将这些垃圾自动销毁，我们不需要也不能进行垃圾回收
（2）我们只需要把不用的都西昂设置为null即可
6、数组（Array)也是一个对象，和普通对象功能类似，用来存储数据，但不同的是普通对象使用字符串作为属性名，但数组使用数字作为索引操作元素
(1)索引（index):从0开始的整数：0 1 2 3 4 5 6 7 8 9
(2)功能：存储性能较好，使用数组来存储数据
（3）创建:数组中元素可以是任意数据类型
（4）方法：push()向数组末尾添加一个或多个元素，并返回数组新的长度，可以将要添加的元素作为方法的参数传递、pop()添加数组
（5）遍历数组：将数组种所有元素都取出来
*/
// var arr = ['孙悟空','猪八戒','沙师弟','玉兔将'];
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// for(var i = 0; i < arr.length;i++){
//     console.log(arr[i])
// };
//练习
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.toString = function(){
    return "Person[name=" + this.name +",age = " + this.age+"]";
};
var per = new Person('孙悟空',18);
var per2 = new Person('猪八戒',28);
var per3 = new Person('红孩儿',8);
var per4 = new Person('蜘蛛精',16);
var per5 = new Person('二郎神',38);

var perArr = [per,per2,per3,per4,per5];

function getAdult(arr){
    //创建一个新数组
    newArr = []
    //遍历arr，获取rr种的Person对象
    for(var i = 0;i < arr.length; i++){
        var p = arr[i];
        //判断Person对象的age是否大于18岁(我在这里卡住了)
        if(p.age >= 18){
            newArr.push(p);
        }
        
    }
    //将新数组返回
    return newArr;    
}
var result = getAdult(perArr)
console.log(result)
// // // arr.push('蜘蛛精');
// // // console.log(arr);
// // // arr = arr.push();//将数组新的长度作为返回值返回
// // // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// arr.unshift('玉兔精');//往前添加元素，并返回新的数组长度
// console.log(arr);
// arr.shift();//删除数组第一个元素
// console.log(arr);
// //数组中放入数组（叫做二维数组）
// arr = [[1,2,3],[4,5,6]];
// console.log(arr);
// arr = [1,'hello',true,null,undefined];
// console.log(arr);
// //也可以是对象
// var arr =[ {name:'孙悟空'},{age:19}];
// console.log(arr);
// var arr = [{function(){}}]
// console.log(arr);
//创建数组(找对象)
// var arr = new Array();
// // console.log(arr,typeof arr);
// //向数组中添加元素：数组[索引] = 值
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[10] = 40;
//使用字面量创建数组,指定数组中的元素
// var arr = [];
// console.log(typeof arr);
// var arr = [1,2,3,4,5,6];
// console.log(arr,arr.length);
// console.log(arr[0]);
// arr = [10];
// console.log(arr);
// arr = new Array(10);
// console.log(arr);
// var arr = new Array(1,2,3,4,5,6);
// console.log(arr);
// //读取数组中的元素
// console.log(arr[0]);
// console.log(arr[3]);//读取不存在的索引，会返回undefined
// //获取数组的长度:length属性:连续数组；非连续数组，会获取到最大索引+1
// console.log(arr.length);
// console.log(arr);
// //修改length大于原长度，则会将多余部分空出来
// arr.length = 10;
// //修改length大于原长度，则会将多出元素将被删除
// arr.length = 3
// console.log(arr.length);
// console.log(arr);
// arr[4] = 50;
// console.log(arr.length);
// console.log(arr);
// //希望永远向数组最后位置添加数字；数组[数组.length] = 值
// arr[arr.length] = 10;
// console.log(arr);


// //创建对象
// var obj = new Object();
// obj = null;
// console.log(obj);
// // //创建一个构造函数
// function Myclass(){
// }
// //向Myclass的原型中添加一个name属性
// Myclass.prototype.name = '我是原型中的名字';
// var mc = new Myclass();
// console.log(mc.name);
// //in检查对象中是否含有某个属性，如果原型中有，也会返回true
// console.log("name" in mc);
// //可以使用对象的hasOwnProperty()检查对象自身是否含有该属性
// //使用该方法只有当都西昂自身含有该属性是时，才会返回true
// console.log(mc.hasOwnProperty("name"));
// console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"));
// console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
// // function Person(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     //向对象中添加方法，函数每执行一次就会创建一个sayHello方法，但是会占用内存，所以需要共享一个方法
//     this.sayHello = fun
    
// }
// //将sayHello()方法定义到全局作用域中，污染了全局作用域中的命名空间，而且定义到全局作用域中，也不安全
// function fun(){
//     console.log('hello!大家好，我是',this.name)
// }
// //创建一个Person类的实例:per、per2
// var per = new Person('孙悟空',18,'男');
// var per2 = new Person('猪八戒',28,'男');
// per.sayHello();
// per2.sayHello();
// console.log(per.sayHello == per2.sayHello);
// console.log(per.__proto__ );
// console.log(per2.__proto__);
// console.log(Person.__proto__);

