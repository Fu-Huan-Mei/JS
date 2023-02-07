/*第一遍理解记忆：2023-1-26*/
/*使用JSON进行深复制（深拷贝）*/
const obj = {
    name:"孙悟空",
    friend:{
        name:"猪八戒"
    }
}
console.log(obj);
//对obj进行浅复制
const obj2 = Object.assign({},obj);
console.log(obj2);
obj2.friend.name = "沙和尚";
console.log(obj2);
//对obj进行深复制
const obj3 = structuredClone(obj);
console.log(obj3);
//利用JSON完成深复制
const str = JSON.stringify(obj);
const obj4 = JSON.parse(str);
const obj5 = JSON.parse(JSON.stringify(obj));
console.log(obj5);
