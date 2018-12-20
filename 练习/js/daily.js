/*
//1.购物车按钮
var val = document.getElementById('val');
function add(){
	val.value == 10?10:val.value++;
}
function minus(){
	val.value == 0?0:val.value--;
}
*/

/*
//2.根据输入的年龄分类
var age = parseInt(window.prompt("你的年岁~","输入(￢︿̫̿￢☆)"));
var def = age!=age?"一定是你的方式不对！":age>18?"成年大叔":age>12?"小正太":"小萝莉";
console.log(def);
*/

/*
//3.选择做的事情

//	1.cf
//	2.x5
//	3.learning

var choose = window.prompt("你想干神马？（1-3）");
if(choose == 1){
	console.log("进入Cf");
}else if(choose == 2){
	console.log("进入X5");
}else if(choose == 3){
	console.log("learning");
}else{
	console.log("你输入的方式不对~~！")
}
*/

/*
//成绩分类if/else
var grade = window.prompt("请输入成绩","!");
if(grade!=grade){
	console.log("姿势不正确");
}else if(grade>100){
	console.log("学神");
}else if(grade>=90){
	console.log("A");
}else if(grade>=75){
	console.log("B");
}else if(grade>=60){
	console.log("C");
}else{
	console.log("D");
}
*/

/*
//4.幼儿园入学准备
//	幼儿园入学
//	年龄3-5
//		身高80-120
//			学费3000-
//				欢迎小朋友
//			去别处哇
//		体检不合格
//	一边去哇
var age = parseInt(window.prompt("请输入您孩子的年龄","在這儿输入"));
if(age!=age){
	console.log("姿势不对");
}else if(age>=3 && age<=5){
	console.log("年龄合格");
	var hei = window.prompt("请输入身高","80-120");
	if(hei>=80 && hei<=120){
		console.log("体检合格");
		var fee = window.prompt("学费","3000+");
		if(fee<=3000){
			console.log("欢迎小朋友");
		}else{
			console.log("太多了去别处哇");
		}
	}else{
		console.log("体检不合格哦");
	}
}else{
	console.log("年龄不符合规定");
}
*/

/*
//switch
var cho = window.parseInt(window.prompt("石头-1，剪刀-2，布-3"));
switch(cho){
	case 1:
		console.log("石头");
		break;
	case 2:
		console.log("剪刀");
		break;
	case 3:
		console.log("布");
		break;
	default:
		console.log("姿势错误！");
}
*/

/*
//跑圈
var run = 10;
for(var i = 0; i < run; i++){
	console.log("跑了第" + (i+1) + "圈,还剩下" + (run-i-1));
}
*/

/*
//周末上班
var data = 31;
for(var i=1;i<=31;i++){
	if(i%7==5){
		console.error("今天" + i + "号，星期六，睡懒觉~");
	}else if(i%7==6){
		console.error("今天" + i + "号，星期天，晒太阳~");
	}else{
		console.log("今天" + i + "号，周" + (i%7+1) + "上班╮(￣▽￣)╭");
	}
}
*/


/*
//4月
var data = 30;
for(var i=1;i<=data;i++){
	if(i%7==2){
		console.log("今天是" + i + "号,星期六~放假!");
	}else if(i%7==3){
		console.log("今天是" + i + "号,星期天!!");
	}else{
		console.log(i + "号,周" + ((i%7+4)>7?(i%7-3):(i%7+4)));
	}
}
*/

/*
//倒三角形
for(var i=5;i>0;i--){
	for(var j=0;j<i;j++){
		document.write(".");
	}
	document.write("<br />");
}
*/

/*
//与电脑进行石头剪刀布游戏
var me = parseInt(window.prompt("石头-0,剪刀-1,布-2"));
var com = parseInt(10*Math.random())%3;
var res = me - com;
function f(a){
	switch(a){
	case 0:
		return "石头";
		break;
	case 1:
		return "剪刀";
		break;
	case 2:
		return "布";
		break;
	}	
}
if(me!=0&&me!=1&&me!=2){
	console.log("姿势不正确");
}else{
	console.log("你输入的是" + f(me));
	console.log("电脑输入的是" + f(com));
}
switch(res){
	case -1:
	case 2:
		console.log("赢");
		break;
	case 1:
	case -2:
		console.log("输");
		break;
	case 0:
		console.log("平局");
}
*/

/*
//1用户输入上半部分行数产生菱形
var upRow = window.prompt("请输入上半部分行数");
for(var i = 1,c = upRow-1; i <= upRow; i++,c--){
	for(var j = 1; j<=c; j++){
		document.write("&nbsp;");
	}
	for(var j = 1; j<=i*2-1; j++){
		document.write("* ");
	}
	document.write("<br />");
}
for(var i = upRow-1,c = 1; i >=0; i--,c++){
	for(var j = 1; j<=c; j++){
		document.write("&nbsp;");
	}
	for(var j = 1; j<=i*2-1; j++){
		document.write("* ");
	}
	document.write("<br />");
}
*/

/*
构造函数
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype = {
	eat: function (){
		return "吃饭";
	},
	run: function (){
		return "跑步";
	}
}
var p1 = new Person("xzj",22);
console.log(p1.eat());
for(p in p1){
	console.log(p);
}
var a = "a" in p1;	//检测是否是对象的属性,包括自有属性和继承属性
var b = p1.hasOwnProperty("run");	//检测是否是对象的自有属性
var c = p1.propertyIsEnumerable("name");	//检测是否是对象的自由数学并且可枚举
var d = p1.a !==undefined;	//检测该属性是否存在对象中. 但不能检测属性值为undefined的值,只能用in
console.log(d);
*/
/*
//玩家：普通玩家/电脑玩家； 猜拳系统
Object.prototype.extends = function(func,actions){
	for(var p in func.prototype){
		this.prototype[p] = func.prototype[p];
	}
	for(var p in actions){
		this.prototype[p] = actions[p];
	}
}
function Player(name){
	this.name = name;
	this.point = -1;
}
Player.prototype = {
	guess: function(){
		console.error(this.name + '不能使用这个方法');
	}
}
//普通玩家
function Normal(name){
	Player.call(this,name);
}
Normal.extends(Player,{
	guess: function(){
		do{
			this.point = window.prompt('请出拳,石头-1,剪刀-2,布-3');
		}while(!(this.point&&(this.point==1||this.point==2||this.point==3)));
		return this.point;
	}
}) 
//电脑玩家
function Comp(name){
	Player.call(this,name);
}
Comp.extends(Player,{
	guess: function(){
		this.point = parseInt(Math.random()*10)%3+1;
		return this.point;
	}
})
//生成玩家
var p1 = new Normal('1号');
var p2 = new Comp('2号');
//猜拳系统
function Sys(p1,p2){
	this.p1 = p1;
	this.p2 = p2;
}
Sys.prototype = {
	doIt: function(){
		this.p1.guess();
		this.p2.guess();
		console.log(this.resIt());
		this.p1.point = this.whatQ(this.p1);
		this.p2.point = this.whatQ(this.p2);
		console.log(this.p1.name + ':' + this.p1.point);
		console.log(this.p2.name + ':' + this.p2.point);
		
	},
	whatQ: function(who){
		switch(who.point){
			case '1':
			case 1:
				return '石头';
				break;
			case '2':
			case 2:
				return '剪刀';
				break;
			case '3':
			case 3:
				return '布';
				break;
			default:
				return '纳米..';
		}
	},
	resIt: function(){
		//石头1, 剪刀2, 布3
		var res = this.p1.point - this.p2.point;
		if(res == -1){
			return this.p1.name + '赢';
		}else if(res == 1){
			return this.p2.name + '赢';
		}else if(res == 0){
			return '平局';
		}
	}
}
var s1 = new Sys(p1,p2);
s1.doIt();
*/

/*
给字符串原型添加功能isMobile
给字符串原型添加功能isNumber
给字符串原型添加功能isCardId
给字符串原型添加功能is...

String.prototype.isNum = function(){
	var pattern = /^\d+$/;
	return pattern.test(this);
}
var str = '1';
console.log(str.isNum());
String.prototype.isMobile = function(){
	var pattern = /^(1\d{10}|0\d{2,3}1\d{7,8})$/;
	return pattern.test(this);
}
var str = '02717103180';
console.log(str.isMobile());
String.prototype.isCardId = function(){
	var pattern = /^([1-9]\d{16}(x|\d))$/;
	return pattern.test(this);
}
var str = '12222119941207222x';
console.log(str.isCardId());
*/