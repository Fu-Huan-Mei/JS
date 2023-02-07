/*第一遍理解记忆：2023-1-24*/
/*内建对象：数组的解构*/
//1、数组解构
const arr = ["孙悟空","猪八戒","沙和尚"];
// let a, b, c ;
// a = arr[0];
// b = arr[1];
// c = arr[2];
let [a,b,c] = arr;//解构赋值
console.log("a=",a,"b=",b,"c=",c);//a= 孙悟空 b= 猪八戒 c= 沙和尚

let [d,e,f] = ["唐僧","白骨精","蜘蛛精"]; //声明同时解构
console.log("d=",d,"e=",e,"f=",f);//d= 唐僧 e= 白骨精 f= 蜘蛛精

[d,e,f] = [1,2,3]; //声明同时解构
console.log("d=",d,"e=",e,"f=",f);//d= 1 e= 2 f= 3

[d,e,f=4] = [1,2,3]; //声明同时解构
console.log("d=",d,"e=",e,"f=",f);//d= 1 e= 2 f= 3

[d,e,f,g,h,l] = [1,2,3]; //声明同时解构
console.log("d=",d,"e=",e,"f=",f,"g=",g,"h=",h,"l=",l);//d= 1 e= 2 f= 3 g= undefined h= undefined l= undefined

[d,e,...f] = [1,2,3,4,5,6,7]; //解构数组时，可以使用...来设置获取多余的元素
console.log("d=",d,"e=",e,"f=",f);//d= 1 e= 2 f= [ 3, 4, 5, 6, 7 ]

function fn2(){
    return ["二郎神","猪八戒"];
}
let [name1,name2] = fn2();
console.log("name1=",name1,"name2=",name2);//name1= 二郎神 name2= 猪八戒

let a1 = 10;
let a2 = 20;
console.log("a1=",a1);//10
console.log("a2=",a2);//20
//通过解构赋值来快速交换两个变量的值
let temp = a1;
a1 = a2;
a2 = temp;
console.log("a1=",a1);//20
console.log("a2=",a2);//10
//与上述效果一样
[a1,a2] = [a2,a1];//[20,10]
console.log("a1=",a1);//10
console.log("a2=",a2);//20                                 

const arr2 = ["孙悟空","猪八戒"];
console.log(arr2);//[ '孙悟空', '猪八戒' ]
[arr2[0],arr2[1] = [arr2[1],arr2[0]]];
console.log("a1=",a1);//10
console.log("a2=",a2);//20

//2、二元数组：数组中可以存任意数据类型，包括数组：如果一个数组中的元素还是数组，称为二元数组
const arr3 = [[1,2,3],[4,5,6]];
console.log(arr3);//[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(arr3[0][0]);
const arr4 = [["孙悟空",18,"男"],["猪八戒",28,"男"]];
for(let v1 of arr4){
    for(let v2 of v1){
        console.log("v2=",v2);
    }
}
let [[name,age,gender],obj] = arr4;
console.log("name:",name);
console.log("age:",age);
console.log("gender:",gender);
console.log("obj:",obj);