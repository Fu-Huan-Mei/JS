/*第一遍理解记忆：2023-1-18  */
/*new运算符：查询网站：Mdn web docs */
//1、概述：new运算符是创建对象时使用的运算符
//2、构造函数：当使用new调用函数时，该函数将作为构造函数调用
//3、使用new调用函数时，将会发生这些事情 ？？？不理解
function Myclass(){
//（1）创建一个普通的JS对象(Object对象{ })，为了方便，称其为新对象
    //创建对象自身·
    var newInstance = {};
//（2）将构造函数的prototype的属性设置为新对象的原型
    newInstance.__proto__ = Myclass.prototype
//（3）使用实参执行构造函数，将新对象设置为函数中的this即newInstance
//（4）返回值：如果构造函数返回的是一个非原始值，则该值会作为new运算的返回值返回（不用写）；
//如果构造函数的返回值是一个原始值或没有指定返回值，则新的对象将会作为返回值（不用写）；
//通常不会为构造函数指定返回值
    // return {name:"猪八戒"};

}
var mc = new Myclass();
console.log(mc);//Myclass {}
