/*2022-12-8
1、事件
2、DOM查询
*/ 
//可以为按钮的对应事件绑定处理函数的形式来响应事件,这样当事件被触发时，其对应的函数将会被调用
//绑定一个单击事件,像这种为单击事件绑定的函数，称为单击响应时间
BigInt.onclick = function(){
    console.log('你还点');
};

/*定义一个函数：专门用来为指定元素绑定单击响应函数
参数：idStr表示要绑定的单击响应函数对象的id属性值；fun表示事件的回调函数，当单击元素时，该函数将会被触发
*/
function myClick(idStr,fun){
    //不同btn有不同的单击响应函数
    var btn = document.getElementsById(idStr);
    //创建fun回调函数？？
    btn.onclick = fun;
}
myClick('btn01',function(){

})
