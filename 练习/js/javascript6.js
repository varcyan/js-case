/*
字母做比较
var a = 'a';
var b = 'b';
console.log(a<b);  =>true 字母b在索引中大于字母a
*/
/*
y = 3;
function plus1(x){
	return x+1;
}
plus1(y);	//  =>4 

var square = function(x) {
	return x*x;
}
square(plus1(x));	//  =>16
*/
/*
function moveon(){
	//通过弹出一个对话框来询问用户一个问题
	var answer = confirm('Are you ready?');
	//如果点击“确定”按钮，浏览器将加载一个新的界面
	if(answer){
		window.location = 'http://taobao.com';
	}
}
//在1s钟后执行定义的這个函数
setTimeout(moveon,1000);
*/
/*
window.onload = function debug(msg){
	//通过ID属性获取HTML中的元素
	//var log = documentGetElementById('debuglog');
	//如果這个元素不存在，则创建一个
	//var log;
	//if(!log){
		var log = document.createElement('div');	//创建一个新的div元素
		log.id = 'debuglog';	//给這个元素的HTML ID值设置为“debuglog”
		log.innerHTML = '<h1>Debug log</h1>';	//定义初始内容
		document.body.appendChild(log);	//将其添加到文档的末尾
	//}
	//将消息包装在<pre>中，并添加至log中
	var pre = document.createElement('pre');	//创建<pre>标签
	var text = document.createTextNode(msg);	//将msg包装在一个文本节点中
	pre.appendChild(text);	//将文本添加至<pre>
	log.appendChild(pre);	//将<pre>添加至log
}
*/
/*
var a = -5;
var b = 0;
console.log(a/b);	// =>-Infinity	除以0不会报错，会返回±Infinity

var a = 1;
var b = Infinity;
console.log(a/b);
*/
/*
var now = new Date();
console.log(now);
*/
/*
var a = '我的';
console.log(a.length);	//2
*/
/*
var s = 6;
s.len= 4;	//创建后随即消失
var t = s.len;
console.log(s.len);	//undefined
*/
/*
function equalArrays(a,b) {
	if(a.length != b.length) return false;	//两个床都不通的数组不相等
	for(var i=0; i<a.length; i++)	//循环遍历所有元素
		if(a[i] != b[i]) return false;	//如果有任意元素不等，则数组不相等
	return true;	//否则它们相等
}
*/
/*
var a = {x:1,y:2};
console.log(a.toString());
console.log(a.valueOf());
*/
/*
var a = ["2"];
var b = 2;
console.log(a==b); // =>true
console.log(a.valueOf()); // =>["2"]
console.log(typeof (a.valueOf())); // => object
console.log(a.toString()); // => 2
console.log(typeof (a.toString()));	// =>string
var d = new Date();
console.log(d.valueOf()); // => 14334044859480:毫秒数
console.log(typeof (d.valueOf() + 1));	// =>number
var c = "3";
var d = "4";
console.log(c+d);	//=>34
*/
/*
var a = [2];
console.log((a + 1) +" 类型是："+ typeof(a + 1));	// =>11 "string"
console.log((a - 1) +" 类型是："+ typeof(a - 1));	// =>1 "number"
b = a == a.toString();
console.log(b);	// =>true 
console.log(a>(a-1));	// =>true
*/
/*
var a = ["a"];	//一个对象
var b = ["bc"];	//一个对象
var c = a+b;
console.log(c);	// =>"abc":对象a和b分别被转换成了字符串拼接在一起

var a = ["a"];	//一个对象
var b = [2];	//一个对象 内是数字
var c = a+b;
console.log(c);	// =>"a2":同上

var a = ["a"];	//一个对象
var b = 2;	//一个数字
var c = a+b;
console.log(c); // =>"a2":对象a转换成了字符串，与数字2进行了字符串的拼接

var a = [1];	//一个对象 内是数字
var b = 2;	//一个数字
var c = a+b;
console.log(c);	// =>"12" ：string类型 同上

var a = [1];	//一个对象 内是数字
var b = 1;	//一个数字
console.log(a==b);	// =>true: 转换为了数字？？

var a = ["a"];	//一个对象 里面是字符串
var b = "a";	//一个字符串
console.log(a==b);	// =>true: 对象a转换成了字符串
*/
/*
//作用域链
function t1() {
    var a = "r";
    function t2() {
        var a = "rr";
        console.log(a);
    }
    function t3() {
        var b ="rrr"
       console.log(a);
    }
    t2();	// => "rr"	作用域链 t2 -> t1 -> 全局对象
    t3();	// => "r"	作用域链 t3 -> ti -> 全局对象
}
t1();
*/
/*
//遍历对象元素
var a = {x:1, y:2, z:3};
for(var p in a){
	console.log(p);
}
//遍历数组元素
var b = ["a","b","c",a];
for(var i in b){
	console.log(b[i]);
}
*/
/*
function add(x){
	if(x<0) throw new Error("x不能是负数");
}
add(-1);
*/
//对象有数组/函数/一般对象
//与数字/字符串
var obj = ["a"];
var z = 1;
var add = obj > z;		//=>1,2,31  string
var minus = obj - z;	//=> NaN  number
var b = obj == z;
console.log("相加:" + add + " 类型:" +typeof(add));
console.log("相减:" + minus + " 类型:" +typeof(minus));
console.log("==:" + b + " 类型:" +typeof(b));
var a = classof(null);
console.log(a);