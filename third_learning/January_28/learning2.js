/*字符串*/
//1、本质：字符数组eg:"hello"-->["h","e","l","l","o"]
let str = "hello";
//2、属性和方法
//（1）length：获取字符串的长度
console.log(str.length);//5
//（2）字符串[索引]：获取指定位置的字符
for(let char of str){
    console.log(char);//h e l l o
}
//（3）str.at()（实验方法）：根据索引获取字符，可以接受负索引
str = "hello";
console.log(str.at(0));//h
console.log(str.at(1));//e
//（4）str.charAt()根据索引获取字符
console.log(str.charAt(0));//h
//（5）str.concat()连接两个或多个字符串
str2 = "world";
console.log(str.concat(str2));//hello world
//（6）str.includes()检查字符串中是否包含某个内容：有返回true，没有则返回false;第二个参数表示起始位置
console.log(str.includes("hello"));//true
//（7）str.indexOf()查询字符串的索引
console.log(str.indexOf("h"));//0
//（8）str.lastIndfexOf()查询字符串中是否包含某个内容，返回值是索引
console.log(str.lastIndexOf("h"));//0
//（9）str.startsWith检查一个字符串是否以指定内容开头
console.log(str.startsWith("h"));//true
//（10）str.endsWith检查一个字符串是否以指定内容结尾
console.log(str.endsWith("h"));//false
str = "100";
//（11）str.padStart()在字符串开头添加指定的内容，使字符串保持指定长度
console.log(str.padStart(7,"0"));//代表字符串的长度是7，不够就在字符前面补0   运行结果：0000100
//（12）str.padEnd()在字符串结尾添加指定的内容，使字符串保持指定长度
console.log(str.padEnd(7,"0"));//1000000
console.log(str);//100 字符串不会发生任何变化
//（13）str.replace()使用新字符串替换一个指定内容
r = str.replace(0,2);
console.log(r);//120
//（14）str.replaceAll()使用新字符串替换所有指定内容
r = str.replaceAll(0,2);
console.log(r);//122
//（15）str.slice()对字符串进行切片
r = str.slice(0,2);
console.log(r);//10
//（16）str.substring()：截取字符串
r = str.slice(0,2);
console.log(r);//10
//（11）str.split()将字符串拆分为一个数组
str = "abc@bcd@efg";
console.log(str.split("@"));//数组[ 'abc', 'bcd', 'efg' ]
//（12）str.toLowerCase()将字符串转为小写
str = "abcdABCD";
console.log(str.toLowerCase());//abcdabcd
//（13）str.toUpperCase()将字符串转为大写
console.log(str.toUpperCase());//ABCDABCD
//（14）str.trim()去除字符串前后空格
str = "   abc   ";
console.log(str.trim());//abc
//（15）str.trimStart()去除字符串开始空格
//（16）str.trimEnd()去查字符串结束空格
