/*正则表达式中的字符 */
//1、大部分可以直接书写
let reg = /ab/;
let r= reg.test("abc");
console.log(r);
//2、|表示或
reg = /ab|c/;
r = reg.test("abc|c");
console.log(r);//true
//3、[ ]表示字符集（或）
//（1）[a-z]任意小写字母
//（2）[A-Z]任意大写字母
//（3）[a-zA-Z]任意字母
reg = /[abc]/;
r = reg.test("a");
console.log(r);//true
reg = /[a-z]/i//匹配模式i表示忽略大小写
r = reg.test("a")
console.log(r);//true
//（4）[0-9]任意数字
//4、[^X]表示除了
reg = /[^a-z]/;
r = reg.test("A");
console.log(r);//true
//5、.表示除了换行符外的所有字符
reg = /./;
r = reg.test(".");
console.log(r);//true
//6、正则表达式使用\作为转义字符
//7、其他字符集：
//（1）\w任意单词字符 [A-Za-z0-9]
//（2）\W除了单词和字符  [^A-Za-z0-9]
//（3）\d任意数字  [0-9]
//（4）\D除了数字   [^0-9]
//（5）\s空格   \S除了空格
//（6）\b单词边界  \B除了单词边界
//8、开头盒结尾
//（1）^表示字符串开头
//（2）$表示字符串结尾
re = /^ab$/;匹配开始位置的a和结束位置的b
r = re.test("abc");
console.log(r);//false
re = /^a$/;//匹配开头和结束位置的a
r = re.test("abc");
console.log(r);
