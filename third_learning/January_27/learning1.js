/*第一遍理解记忆：2023-1-27 */
/*内建对象-Map 
1、作用：存储键值对结构的数据(key-value）
2、存储数据：Map中存储的数据就是一种键值对结构
3、Map和Object主要区别：
（1）Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，JS解释器会自动将其转换为字符串
（2）Map中任何类型的值都可以成为数据的key*/
const obj2 = {};
const obj = {
    "name":"孙悟空",
    "age":18,
    [Symbol()]:"哈哈",
    [obj2]:"嘻嘻"
}
console.log(obj);//{ name: '孙悟空', age: 18, '[object Object]': '嘻嘻', [Symbol()]: '哈哈' }
//4、创建Map对象:new Map( )
const map = new Map();
//5、属性和方法
//（1）map.size()获取map中键值对的数量
//（2）map.set(key,value)向map中添加键值对
map.set("name","孙悟空");
map.set(obj2,"哈哈");
map.set(NaN,"嘻嘻");
console.log(map);//Map(3) { 'name' => '孙悟空', {} => '哈哈', NaN => '嘻嘻' }
//（3）map.get(key)根据key获取value值
console.log(map.get("name"));//孙悟空
console.log(map.get(NaN));//嘻嘻
//（4）map.delete(key)删除指定数据
console.log(map.delete(NaN));//true
//（5）map.has(key)检查map中是否包含指定键
console.log(map.has(obj2));//true
//（6）map.clear()删除全部的键值对
console.log(map.clear());//undefined
//6、补充
//（1）将map转换为数组
const map1= new Map();
const arr1 = Array.from(map1);//方法一
const arr2 = [...map]//方法二
console.log(arr1);//[ ]
console.log(arr2);//[ ]
const map2 = new Map([["name","猪八戒"],["age",18],[{},()=>{}]]);//Map(3) { 'name' => '猪八戒', 'age' => 18, {} => [Function (anonymous)] }
console.log(map2);
//（2）遍历map
for(const entry of map2){
    const [key,value] = entry
    console.log("entry=",entry,"key=",key,"value=",value);
    /*运行结果：
    entry= [ 'name', '猪八戒' ] key= name value= 猪八戒
    entry= [ 'age', 18 ] key= age value= 18
    entry= [ {}, [Function (anonymous)] ] key= {} value= [Function (anonymous)] */
    
}
map2.forEach((key,value)=>{
    console.log("key=",key,"value=",value);
    /*运行结果：
    key= 猪八戒 value= name
    key= 18 value= age
    key= [Function (anonymous)] value= {} */
})
console.log(map2.keys());//获取map中所有的key   [Map Iterator] { 'name', 'age', {} }  
console.log(map2.values());//获取map中通所有的value   [Map Iterator] { '猪八戒', 18, [Function (anonymous)] }  