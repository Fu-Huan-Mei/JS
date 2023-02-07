//1、split()根据正则表达式对一个字符串进行拆分
let str = "abc@abc@d";
let r = str.split("@");
console.log(r);//[ 'abc', 'abc', 'd' ]
//2、search()搜索符合正则表达式的内容第一次在字符串中出现的位置，可以传递正则表达式进行匹配
r = str.search("abc");
console.log(r);//0
//3、replace()根据正则表达式替换字符串中的指定内容
r = str.replace("a","13278617321");
console.log(r);//13278617321bc@abc@d
//4、match()根据正则表达式匹配字符串中符合要求的内容
r = str.match();
//5、matchAll()根据正则表达式匹配字符串中符合要求的内容（必须设置g全局匹配模式）；返回的是一个迭代器
str = "13278617321456890556677";  //\d任意数字
r = str.match(/1[3-9]\d{9}/g);
console.log(r);//[ '13278617321' ]
r = str.matchAll(/1[3-9]\d{9}/g);
console.log(r);//Object [RegExp String Iterator] {}
for(let item of r){
    console.log(item);
/*[
  '13278617321',
  index: 0,
  input: '13278617321456890556677',
  groups: undefined
] */
}
