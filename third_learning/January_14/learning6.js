/*第一遍理解记忆：2023-1-14*/
/*this */
//1、this：函数在执行时，JS解释器每次都会传递一个隐含的参数this
function fn(){
    console.log(111);
}
fn();
//2、this会指向一个对象，this所指向的对象会根据函数调用方式的不同而不同
//（1）第一种情况：以函数形式调用，this指向window
function fn1(){
    console.log(this);
}
fn1();//以函数形式调用：相当于window.fn1()
//（2）第二种情况：以方法形式调用，this指向调用方法的对象
const obj = {name:"孙悟空"};
obj.test = fn1;
obj.test();//以方法形式调用
const obj2 = {name:"猪八戒",test:fn1};
obj2.test();//以方法形式调用
//3、作用：通过this，
//为两个对象添加一个方法，可以打印自己的名字
const obj3 = {
    name:"沙和尚",
    sayHello:function(){
        console.log("沙和尚")
    },
};
obj3.sayHello();//沙和尚
const obj5 = {
    name:"沙师弟",
    sayHello:function(){
        console.log(this.name);//this指的就是obj3这个对象，方便修改name时，也会打印出来最新的修改值
    },
};
obj5.sayHello();//沙师弟
const obj4 = {
    name:"唐僧",
    sayHello:function(){
        console.log("唐僧");
    },
};
obj4.sayHello();//唐僧
