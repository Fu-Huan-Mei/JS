/*第一遍理解记忆：2023-1-27 */
/*Date对象-内置对象*/
//1、概述：在JS中所有与时间相关的数据都由Date对象来表示
let d = new Date();//直接通过new Date()创建时间对象时，它创建的是当前的时间对象
console.log(d);//2023-01-27T04:20:35.693Z
//2、参数：
//（1）可以在Date()构造函数中，传递一个表示时间的字符串
//（2）格式：月/日/年 时：分：秒 
d = new Date("12/20/1998 12:22:33");
console.log(d);//1998-12-20T04:22:33.000Z
//（2）格式： 年-月-日T时：分：秒
d = new Date("2019-12-23T12:24:10");
console.log(d);//2019-12-23T04:24:10.000Z
//3、方法
//（1）xxx.getFullYear()返回当前日期的年份
r = d.getFullYear();
console.log(r);//2019
//（2）xxx.getMonth()返回当前日期的月份(0~11)
r = d.getMonth();
console.log(r);//索引11表示12月份
//（3）xxx.getDate()返回当前是几日
r = d.getDate();
console.log(r);//23
//（4）xxx.getDay()返回当前日期是周几(0~6)，0表示周日
r = d.getDay();
console.log(r);//1周一
//（5）xxx.getTime()返回当前日期对象的时间戳
//时间戳：自1970年1月1日0时0分0秒到当前时间所经历的毫秒数
r = d.getTime();
console.log(r);//1577075050000毫秒
//计算机底层存储时间都是时间戳
//(6)Date.now();获取当前最新的时间戳
console.log(Date.now());//1674794801497毫秒
//3、创建:new Date(年，月，日，时，分，毫秒)
d = new Date(2023,0,27,12,32,10);
console.log(d);//2023-01-27T04:32:10.000Z
//4、日期的格式化
//（1）xxx.toLocaleString()：将日期转换为本地字符串；
/*参数：
第一个参数：描述语言和国家信息的字符串：zh-CN中文中国、zh-HK中文香港、en-US英文英国
第二个参数：在对象中可以通过对象的属性对日期的格式进行配置：dateStyle日期风格、
timeStyle时间风格、full long med short、hours是否采用12小时的值：true/false、
weekday星期的显示方式：long/short/narrow、year：2-digit/numeric*/
r = d.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"long"});
console.log(r);//2023年1月27日星期五 GMT+8 12:32:10
r = d.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"long"});
console.log(r);//023年1月27日星期五 GMT+8 12:32:10
r = d.toLocaleString("zh-CN",{year:"numeric",month:"long",day:"2-digit"});
console.log(r);//2023年1月27日
//（2）xxx.