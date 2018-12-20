//购物车
var inp = document.getElementById("inp");
function add(){
	inp.value == 10?10:inp.value++;
}
function minus(){
	inp.value == 0?0:inp.value--;
}
/*
//输入年龄分类?:
var age = parseInt(window.prompt("请输入年龄","^_^"));
var den = age!=age?"姿势不正确":(age>=18?"成年大叔":(age>12?"小正太":"小萝莉"));
console.log(den);

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
	幼儿园入学
	年龄3-5
		身高80-120
			学费3000-
				欢迎小朋友
			去别处哇
		体检不合格
	一边去哇

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
//石头剪刀布
var c = window.prompt("石头-1,剪刀-2,布-3");
switch(c){
	case "1":
		console.log("石头");
		break;
	case "2":
		console.log("剪刀");
		break;
	case "3":
		console.log("布");
		break;
	default:
		console.log("姿势不正确唉");
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
var date = 31;
for(var i = 1; i <= date; i++){
	if(i%7==5){
		console.log("今天是" + i + "号,星期六,晒太阳~");
	}else if(i%7==6){
		console.log("今天是" + i + "号,星期天.......");
	}else{
		console.log("今天是" + i + "号,星期" + (i%7+1));
	}
}
*/
//正方形 三角形
/*
var row = 5;
var col = 5;
for(var i = 0; i < row; i++){
	for(var j = 0; j <= i; j++){
		document.write(" *");
	}
	document.write("<br />");
}
*/
//输入上半部分行数
//第一行的的空格=总行数-1
//列 行数*2-1
/*
var row = window.prompt("请输入上半部分行数");
for(var i=1,c=row-1; i<=row;i++,c--){
	for(var j=1;j<=c;j++){
		document.write("&nbsp;");
	}
	for(var j=i*2-1; j>0; j--){
		document.write("* ");
	}
	document.write("<br />");
}
for(var i=row-1,c=1; i>0; i--,c++){
	for(var j=1; j<=c; j++){
		document.write("&nbsp;");
	}
	for(var j=1; j<=i*2-1; j++){
		document.write("* ");
	}
	document.write("<br />");
}
*/
/*
function Person(name,age){
	this.name = name;
	this.age = age;
}
Person.prototype = {
	name:"你的名字",
	age:0,
	run:function (){}
}
var p1 = new Person("续张靖","22");
console.log(p1.name + p1.age + p1.run);
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
//小头爸爸牵着大头儿子去吃饭
//小头爸爸 大头儿子 饭
//牵着 吃
function Person(name){
	this.name = name;
}
Person.prototype = {
	getHand:function(person){
		console.log(this.name + "牵着" + person.name + "的手");
	},
	eat:function(rice){
		console.log(this.name + "吃" + rice.name);
	}
}
function Rice(name){
	this.name = name;
}
var x = new Person("小头爸爸");
var d = new Person("大头儿子");
var a = new Rice("大份蛋炒饭");
var b = new Rice("小份蛋炒饭");
x.getHand(d);
x.eat(a);
d.eat(b);
//早上起来 我打开电脑学习
//time  我 电脑
//起床 打开 学习
function Time(time){
	this.time = time;
}
function Person(name){
	this.name = name;
}
Person.prototype = {
	getUp: function(time){
		console.log(time.time + this.name + "起床");
	},
	open: function(com){
		console.log(this.name + "打开" + com.name);
	},
	doSom: function(what){
		console.log(this.name + what.name);
	}
}
function Com(name){
	this.name = name;
}
function Dosom(name){
	this.name = name;
}
var morning = new Time("早上");
var moon = new Time("中午");
var after = new Time("下午");
var me = new Person("我");
var comp = new Com("电脑");
var mobile = new Com("手机");
var learn = new Dosom("学习");
var fun = new Dosom("玩耍");
me.getUp(morning);
me.open(mobile);
me.doSom(fun);
//宝宝明天坐车来,我很开心
//宝宝 车 时间
//坐 开心
function Person(name){
	this.name = name;
}
Person.prototype = {
	set: function(car){
		console.log(this.name + "坐" + car.name + "过来");
	},
	mood: function(mood){
		console.log(this.name + "很" + mood.name);
	}
}
function Car(name){
	this.name = name;
}
function Mood(name){
	this.name = name;
}
var bb = new Person("宝宝");
var me = new Person("我");
var che = new Car("车");
var happy = new Mood("开心");
bb.set(che);
me.mood(happy);
*/
/*
function Person(name){
	this.name = name;
}
Person.prototype = {
	eat: function(){
		console.log("这里是吃的功能");
	},
	run: function(){
		console.log("这里是跑的功能");
	}
}
function Father(name){
	this.name = name;
}
Father.prototype = Person.Prototype;
var f1 = new Father("baba");
console.log(f1.eat());
*/
/*
var arr = [1,,3];
console.log(arr.length);
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
*/
//11位数,1开头  前3/4位,后11位
//var pattern = /^(1\d{10}|0\d{2,3}1\d{7,8})$/;
//var str = '02717103180';
//var test = pattern.test(str);
//console.log(test);
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