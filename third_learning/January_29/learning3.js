/*exec方法 */
let str = "abcaecadcafc";
//提取出符合axc格式的内容
let reg = /a[a-z]c/g;//g表示全局匹配
//1、xxx.exec()获取字符串中符合正则表达式的内容
let r = reg.exec(str);
console.log(r);//[ 'abc', index: 0, input: 'abcaecadcafc', groups: undefined ]
r = reg.exec(str);
console.log(r);//[ 'aec', index: 3, input: 'abcaecadcafc', groups: undefined ]
r = reg.exec(str);
console.log(r);//[ 'adc', index: 6, input: 'abcaecadcafc', groups: undefined ]
reg = /a([a-z])c/g;//利用()来为元素分组
r = reg.exec(str);
console.log(r);//[ 'abc', 'b', index: 0, input: 'abcaecadcafc', groups: undefined ]  利用（）分组后,可以渠道（）中的字母
r = reg.exec(str);
console.log(r);//[ 'aec', 'e', index: 3, input: 'abcaecadcafc', groups: undefined ]
r = reg.exec(str);
console.log(r);//[ 'adc', 'd', index: 6, input: 'abcaecadcafc', groups: undefined ]
/*通过遍历来获取中间字母 */
while(r){
    console.log(r[0],r[1],r[2]);
/*  abc b undefined
    aec e undefined
    adc d undefined
    afc f undefined*/
    r = reg.exec(str);//重新给r赋值，最后一次r的结果是Null，所以传为布尔值是false，则循环不执行
}