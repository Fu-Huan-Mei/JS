/*第一遍理解记忆：2023-1-14*/
//4、箭头函数的this：([参数]) => 返回值
//（1）无参箭头函数：() => 返回值
//（2）一个参数的箭头函数：a => 返回值
//（3）多个参数的箭头函数：(a,b) => 返回值
//（4）只有一个语句的函数：() => 返回值
//（5）只返回一个对象的函数：() => ({ ... })
//（6）有多行语句的函数：() => { ...       return 返回值; }
//一般函数
function fn2(){
    console.log("fn2-->",this);
}
fn2();//window   调用函数
//（7）箭头函数：没有自己的this，它的this由外层作用域决定：总是window，与调用方式无关
const fn3 = () => {
    console.log("fn3-->",this)
}
fn3();//window  调用函数
const obj1 = {
    name:"孙悟空",
    fn2,//fn2为简写属性，就相当于fn2:fn2,
    fn3//fn3为简写属性，就相当于fn3:fn3
}
obj1.fn2();//obj   调用方法
obj1.fn3();//window   调用方法
const obj2 = {
    name:"孙悟空",
    fn2,//fn2为简写属性，就相当于fn2:fn2,
    fn3,//fn3为简写属性，就相当于fn3:fn3
    sayHello(){
        console.log(this.name);
    }// sayHello(){}为sayHello:function(){  }的简写方法
}
obj2.sayHello();//孙悟空
const obj3 = {
    name:"孙悟空",
    fn2,//fn2为简写属性，就相当于fn2:fn2,
    fn3,//fn3为简写属性，就相当于fn3:fn3
    sayHello(){// sayHello(){}为sayHello:function(){  }的简写方法
        console.log(this.name);
        function t(){
            console.log("t-->",this);//它的this由外层作用域决定，就是sayHekko的this
        }
        t();//以函数形式调用
    }
}
obj3.sayHello();//以方法形式调用  结果为window
const obj4 = {
    name:"孙悟空",
    fn2,//fn2为简写属性，就相当于fn2:fn2,
    fn3,//fn3为简写属性，就相当于fn3:fn3
    sayHello(){// sayHello(){}为sayHello:function(){  }的简写方法
        console.log(this.name);
//（8）箭头函数的调用：this比较稳定，不会轻易改变
        //箭头函数的this就是sayHello的this,箭头函数的this比较稳定，不会轻易改变
        const t2 = () => {
            console.log("t2-->",this);
        };
        t2();
    }
}
obj4.sayHello();//以方法形式调用  结果为window
