/*正则表达式的语法 */
//创建一个正则表达式检查一个字符串中是否包含aaa
var reg = /aaaaaaaaaaaa/;
console.log(reg.test("aaabfff"));//false
//1、量词
//（1）功能/作用：通过量词可以设置一个内容出现的次数
//（2）/{n}/正好出现次数
var reg = /a{3}/;
console.log(reg.test("aaa"));//tr//（
//（3）/ab{n}/量词只对它前边的内容起作用，即b出现n次
reg = /ab{3}/;
console.log(reg.test("ababab"));//false
//（4）/(ab){n}/ab重复出现n次
reg = /(ab){3}/;
console.log(reg.test("ababab"));//true
//（5）/{m,n}/出现m~n次
reg = /ab{1,3}c/;
console.log(reg.test("abbc"));//true
//（6）{m,}出现m次以上
reg = /ab{3,}c/;
console.log(reg.test("abbbbbc"));//true
//（7）+至少一个，相当于{1,}
reg = /ab+c/;//
console.log(reg);
//（8）*0个或多个，相当于{0,}
reg = /ab*c/;
console.log(reg);
//（9）？0个或1个
reg = /ab?c/;//ac或abc
console.log(reg);
//检查一个字符串是否以a开头
//（10）^表示以xxx开头，匹配开头的字母
reg = /^a/;
//（11）$表示以xxx结尾，匹配结尾的字母
reg = /a$/;
//（12）如果在正则表达式中同时使用^和$，则要求字符串必须完全符合正则表达式
reg = /^a$/;