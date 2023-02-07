/* 2022-12-28
1、数组
2、数组的遍历：
forEach（）方法：需要一个函数作为参数，一般传一个匿名函数；
像这种函数，由我们创建但不由我们调用称为回调函数，数组中有几个元素就会执行几次,每次执行时，就会将遍历到的元素以实参的形式传递进来
浏览器会在回调函数中传递3个参数：第一个参数：当前正在遍历的元素value；第二个参数：当前正在遍历的元素的索引index；第三个参数：当前正在遍历的数组arr
IE8及以下浏览器不支持该方法
3、slice(start,end)方法：从数组中提取指定元素,包含开始索引不包括结束索引；索引可以传递负值
4、splice(开始位置的索引，删除的数量，第三个以及以后可以传递新元素并自动插入到开始开始位置的索引前边)方法：删除数组中的指定元素，会影响到原数组，将指定元素从原数组中删除，并将删除的元素作为返回值返回
5、函数的方法
6、Date对象
7、Math属于一个工具类，不用创建对象，里封装了数学运算相关的属性和方法
生成0~x之间的随机数：Math.random()*x
生成x~y之间的随机数：Math.random(y-x)+1
8、字符串的方法
*/
// var str = 'hello world';
// var r = str.split('');//传递空串则会将字符串的字母非一个都会进行拆分
// console.log(r);
// //split()将一个字符串拆分为一个数组；参数：需要一个字符串作为参数，再根据该字符串来拆分数组
// var r = str.split('o');
// console.log(r);
// console.log(r[0]);
// var r = str.toUpperCase();
// console.log(r);
// var r = str.toLowerCase();
// console.log(r);
// var r = str.substr(2,9);//参数：第一个：截取开始位置的索引；第二个：截取长度
// console.log(r);
// var r = str.substring(0,3);//不能接收负值作为参数，如果传递负值，则默认为0；而且会自动调整参数的位置，如果第二个参数小于第一个参数，则会自动交换位置
// console.log(r);
// var r = str.slice(0,2);
// console.log(r);
// var r = str.slice(1,4);
// console.log(r);
// var r= str.charAt(0);//根据索引获取指定位置的字符
// console.log(r);
// var r = str.charCodeAt(0);//获取指定位置的字符编码，返回Unicode编码
// console.log(r);
// var r = String.fromCharCode(104);//根据字符编码获取字符
// console.log(r);
// var r= String.fromCharCode(0x1997);
// console.log(r);
// var r1 = 'heiheiehieh';
// var r= str.concat(r1)//连接2个或多个字符串
// console.log(r);
// // var r = r.indexOf('h',5);//返回第一次出现的索引，如果没有找到该内容，则返回-1；可以指定第二个参数表示开始查找的位置
// // console.log(r);
// var r = r.lastIndexOf('h');
// console.log(r);
// console.log(Math.random()*((6-1)+1));
// console.log(Math.PI);
// console.log(Math.ceil(1.234));//Math.ceil()对一个数进行向上取整，小数位只要有值就自动进1
// console.log(Math.floor(1.9989));//Math.floor()对一个数进行向下取整，小数部分被省略
// console.log(Math.round(1.567));
// console.log(Math.random()*100);
// console.log(Math.round(Math.random()*10));
//直接使用构造函数创建Date对象，则会封装为当前代码执行的时间
// var d = new Date();
// console.log(d);
//可以传递指定时间作为参数：格式：月份/日/年 时：分：秒
// var start = Date.now();
// var d2 = new Date('12/03/2016 11:04:30');
// console.log(d2);
// var end = Date.now();
// var r = end - start;
// console.log(r);
// // t = Date.now();//利用时间戳来测试代码执行性能，获取当前的时间戳
// console.log(t);
// var date = d2.getDate();//0~6分别表示周一~周天
// console.log(date);
// var month = d2.getMonth();
// console.log(month);//0~11分别表示1~12月
// var year = d2.getFullYear();
// console.log(year);
// var t = d2.getTime();//获取当前日期对象的时间戳（从格林威治标准时间的1970年1月1日到当前日期所花费的毫秒数）1秒=1000毫秒
// console.log(t/1000/60/60/24/365);
// var arr = ['孙悟空','猪八戒','沙和尚'];
// var arr2 = ['白骨精','玉兔精','蜘蛛精'];
// //concat()可以连接两个或多个数组，并将新的数组返回，该方法不会对原数组产生影响
// var r = arr.concat(arr2);
// console.log(r);
// //join()方法可以将数组转换为一个字符串，不会对原数组产生影响，而是将转换后的字符串作为结果返回，可以指定一个字符串作为参数
// r = arr.join("");
// r = arr.join();
// console.log(r);
// //reverse()方法：反转数组,直接修改原数组
// arr.reverse();
// console.log(arr);
//sort()方法：对
// arr = ['b','d','e','a','c'];
// console.log(arr);
// console.log(arr.sort());
//即使对于纯数字的数组，也会按照unicode编码进行排序；我们可以自己指定排序规则
//浏览器会根据函数的返回值来决定元素的顺序：如果返回一个大于0的值，则元素会交换位置；如果返回一个大于0的值，则元素不交换位置；如果返回0，则连个元素相等
//升序排列：返回a-b；降序排列：返回b-a
// arr = [13,4,11,2,5];
// arr.sort(function(a,b){
// //     if(a>b){
// //         return 1;
// //     }else if(a<b){
// //         return -1;
// //     }else{
// //         return 0;
// //     }
//     // return a - b;//升序排列
//     // return b - a;//降序排列
//     // console.log('a=',a);
//     // console.log('b=',b)
// });
// console.log(arr);





// //创建一个数组
// var arr = [1,2,3,2,1,3,4,2,5];
// //去除数组中重复的元素
// //获取数组中的每一个元素
// for(var i =0;i < arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         //判断两个元素是否相等
//         if(arr[i] == arr[j]){
//             //如果相等则证明出现里重复元素，则删除j对应的元素
//             arr.splice(j,1);
//             //当删除了j所在的元素后，后面元素会自动补位，此时将不会比较这个元素，需要再一次比较j位置的元素
//             j--;//相当于把j的位置再比较了一遍
//         }
//     }
// }
// console.log(arr);

// var arr = ['孙悟空','猪八戒','沙和尚','唐僧','红孩儿'];
// var r = arr.splice(0,2,'铁扇公主','女儿国');//表示从第0个开始删除两个元素
// console.log(arr);
// console.log(r);
// var r = arr.slice(0,2);
// console.log(arr);
// console.log(r);
// var r = arr.slice(0,-1);
// console.log(arr);
// console.log(r);
// // arr.forEach(function(a,b,c) {
//     // console.log("hello");
//     console.log('a='+a);
//     console.log('b='+b);
//     console.log('c='+c,c==arr);
// });
// function Person(name,age){
//     this.name = name;
//     this.age = age;
   
// }
// var per = new Person('孙悟空',18);
// var per1 = new Person('红孩儿',8);
// var per2 = new Person('白骨精',28);
// var perArr = [per,per1,per2];
// // console.log(arr);
// function getAdult(arr){
//     //创建一个新数组
//     var newArr = [];
//     //遍历arr，获取arr中的Person对象
//     for(var i =0;i<arr.length;i++){
//         var p = arr[i]
//         //判断Person中的age是否大于等于18
//         if(p.age >= 18){
//             //将对象放入新数组中
//             newArr.push(p);
//         };
//     };
//     console.log(newArr); 
// }
// getAdult(perArr);

